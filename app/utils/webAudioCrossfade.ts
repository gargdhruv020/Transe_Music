/**
 * Web Audio API Seamless Track Transition & Crossfade Engine
 *
 * Implements Apple Music & DJ-style dual-node crossfading using the Web Audio API:
 * 1. Dual Audio Nodes (Source A & Source B)
 * 2. GainNode volume envelope control for both channels
 * 3. Smart transition timing (triggers automatically 5s before track end)
 * 4. Linear and Exponential volume ramping curves
 * 5. Synchronized Media Session API metadata handoff at exact midpoint (50%)
 */

export interface TrackMetadata {
  title: string;
  artist: string;
  album?: string;
  artwork?: Array<{ src: string; sizes: string; type: string }>;
}

export type CrossfadeCurve = "linear" | "exponential" | "equal-power";

export class WebAudioCrossfadeEngine {
  private ctx: AudioContext | null = null;
  private gainNodeA: GainNode | null = null;
  private gainNodeB: GainNode | null = null;
  private sourceA: MediaElementAudioSourceNode | AudioBufferSourceNode | null = null;
  private sourceB: MediaElementAudioSourceNode | AudioBufferSourceNode | null = null;
  private activeChannel: "A" | "B" = "A";
  private isTransitioning = false;
  private midpointTimer: ReturnType<typeof setTimeout> | null = null;
  private transitionDuration = 5; // seconds

  constructor(crossfadeDurationSeconds = 5) {
    this.transitionDuration = crossfadeDurationSeconds;
  }

  /**
   * Initializes the AudioContext and sets up the dual GainNodes.
   * Must be called during or after an initial user gesture.
   */
  public initAudioContext(): AudioContext {
    if (!this.ctx || this.ctx.state === "closed") {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtxClass();

      // Create GainNodes for both channels
      this.gainNodeA = this.ctx.createGain();
      this.gainNodeB = this.ctx.createGain();

      // Initial state: Channel A at full volume, Channel B silent
      this.gainNodeA.gain.setValueAtTime(1, this.ctx.currentTime);
      this.gainNodeB.gain.setValueAtTime(0, this.ctx.currentTime);

      // Connect both GainNodes to master audio destination (speakers)
      this.gainNodeA.connect(this.ctx.destination);
      this.gainNodeB.connect(this.ctx.destination);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  /**
   * Connects an HTMLMediaElement to Channel A or Channel B
   */
  public connectMediaElement(element: HTMLMediaElement, channel: "A" | "B"): MediaElementAudioSourceNode {
    const ctx = this.initAudioContext();
    const source = ctx.createMediaElementSource(element);
    const targetGain = channel === "A" ? this.gainNodeA! : this.gainNodeB!;
    source.connect(targetGain);

    if (channel === "A") {
      this.sourceA = source;
    } else {
      this.sourceB = source;
    }

    return source;
  }

  /**
   * Executes a seamless crossfade between Channel A and Channel B
   *
   * @param nextTrackMetadata - Metadata of incoming song for lock-screen MediaSession sync
   * @param curve - "linear" | "exponential" | "equal-power" (default: "exponential")
   * @param onComplete - Callback executed when the crossfade finishes
   */
  public executeCrossfade(
    nextTrackMetadata?: TrackMetadata,
    curve: CrossfadeCurve = "exponential",
    onComplete?: () => void
  ): void {
    if (!this.ctx || !this.gainNodeA || !this.gainNodeB) {
      this.initAudioContext();
    }

    const ctx = this.ctx!;
    const now = ctx.currentTime;
    const duration = this.transitionDuration;
    const midpointSeconds = duration / 2;

    this.isTransitioning = true;

    const outgoingGain = this.activeChannel === "A" ? this.gainNodeA! : this.gainNodeB!;
    const incomingGain = this.activeChannel === "A" ? this.gainNodeB! : this.gainNodeA!;

    // Cancel any scheduled parameter changes
    outgoingGain.gain.cancelScheduledValues(now);
    incomingGain.gain.cancelScheduledValues(now);

    // Anchor current values
    outgoingGain.gain.setValueAtTime(outgoingGain.gain.value, now);
    incomingGain.gain.setValueAtTime(incomingGain.gain.value, now);

    if (curve === "linear") {
      // Linear ramp: gain goes straight 1 -> 0 and 0 -> 1
      outgoingGain.gain.linearRampToValueAtTime(0, now + duration);
      incomingGain.gain.linearRampToValueAtTime(1, now + duration);
    } else if (curve === "exponential") {
      // Exponential ramp: natural logarithmic volume taper (0.0001 floor prevents -Infinity)
      outgoingGain.gain.setValueAtTime(Math.max(outgoingGain.gain.value, 0.0001), now);
      incomingGain.gain.setValueAtTime(0.0001, now);
      outgoingGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      incomingGain.gain.exponentialRampToValueAtTime(1, now + duration);
    } else {
      // Equal-power curve using setValueCurveAtTime (32-point lookup table)
      const samples = 32;
      const curveOut = new Float32Array(samples);
      const curveIn = new Float32Array(samples);
      for (let i = 0; i < samples; i++) {
        const t = i / (samples - 1);
        curveOut[i] = Math.cos(t * 0.5 * Math.PI);
        curveIn[i] = Math.sin(t * 0.5 * Math.PI);
      }
      outgoingGain.gain.setValueCurveAtTime(curveOut, now, duration);
      incomingGain.gain.setValueCurveAtTime(curveIn, now, duration);
    }

    // Media Session API Sync: Swap lock-screen metadata at exact midpoint (50% progress)
    if (this.midpointTimer) clearTimeout(this.midpointTimer);
    this.midpointTimer = setTimeout(() => {
      if (nextTrackMetadata && "mediaSession" in navigator) {
        this.syncMediaSession(nextTrackMetadata);
      }
    }, midpointSeconds * 1000);

    // Complete transition when duration expires
    setTimeout(() => {
      this.isTransitioning = false;
      this.activeChannel = this.activeChannel === "A" ? "B" : "A";
      // Ensure clean final values
      outgoingGain.gain.setValueAtTime(0, ctx.currentTime);
      incomingGain.gain.setValueAtTime(1, ctx.currentTime);

      if (onComplete) onComplete();
    }, duration * 1000);
  }

  /**
   * Updates the HTML5 Media Session metadata (lock screen, notification tray, Bluetooth).
   */
  public syncMediaSession(metadata: TrackMetadata): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: metadata.title,
        artist: metadata.artist,
        album: metadata.album || "Trance Sangeet",
        artwork: metadata.artwork || [
          { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
          { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
        ],
      });
    } catch (_) {}
  }

  /**
   * Smart auto-transition trigger:
   * Monitors active audio track and initiates crossfade when currentTime reaches 5s before end.
   */
  public checkAutoTransition(
    currentTime: number,
    duration: number,
    nextTrackMetadata?: TrackMetadata,
    onCrossfadeStart?: () => void
  ): boolean {
    if (this.isTransitioning) return false;
    if (duration <= this.transitionDuration * 2) return false; // Minimum track length safeguard

    const timeRemaining = duration - currentTime;
    if (timeRemaining <= this.transitionDuration && timeRemaining > 0.5) {
      if (onCrossfadeStart) onCrossfadeStart();
      this.executeCrossfade(nextTrackMetadata);
      return true;
    }
    return false;
  }

  /**
   * Aborts an active crossfade immediately (e.g., when user manually skips or seeks)
   */
  public abortCrossfade(): void {
    if (this.midpointTimer) {
      clearTimeout(this.midpointTimer);
      this.midpointTimer = null;
    }
    this.isTransitioning = false;
    if (this.ctx && this.gainNodeA && this.gainNodeB) {
      const now = this.ctx.currentTime;
      this.gainNodeA.gain.cancelScheduledValues(now);
      this.gainNodeB.gain.cancelScheduledValues(now);
      if (this.activeChannel === "A") {
        this.gainNodeA.gain.setValueAtTime(1, now);
        this.gainNodeB.gain.setValueAtTime(0, now);
      } else {
        this.gainNodeA.gain.setValueAtTime(0, now);
        this.gainNodeB.gain.setValueAtTime(1, now);
      }
    }
  }

  public getActiveChannel(): "A" | "B" {
    return this.activeChannel;
  }

  public getIsTransitioning(): boolean {
    return this.isTransitioning;
  }
}
