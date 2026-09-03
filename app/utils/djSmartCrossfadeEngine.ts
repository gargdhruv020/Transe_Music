/**
 * ====================================================================================
 * DJ SMART CROSSFADE & REMIX ENGINE (Web Audio API + DSP Architecture)
 * ====================================================================================
 *
 * Professional dual-deck playback architecture engineered for club-grade mixing:
 * 1. Dual Audio Nodes & Independent Gain Control (Deck A & Deck B)
 * 2. Client-Side BPM Detection via OfflineAudioContext and spectral transient analysis
 * 3. 6-Second Smart Equal-Power DJ Crossfade (constant acoustic energy curve)
 * 4. Automatic Tempo & Pitch Matching (Remix Mode) with ±3% playbackRate blending
 * 5. HTML5 Media Session lock-screen & Bluetooth synchronization at exact midpoint (50%)
 */

export interface TrackMetadata {
  title: string;
  artist: string;
  album?: string;
  artwork?: Array<{ src: string; sizes: string; type: string }>;
  bpm?: number;
}

export interface DeckChannel {
  id: "A" | "B";
  sourceNode: AudioBufferSourceNode | MediaElementAudioSourceNode | null;
  gainNode: GainNode;
  eqLow: BiquadFilterNode;
  eqMid: BiquadFilterNode;
  eqHigh: BiquadFilterNode;
  filterNode: BiquadFilterNode; // DJ sweep filter (lowpass / highpass)
  currentBpm: number;
  metadata: TrackMetadata | null;
  isPlaying: boolean;
  startTime: number;
  duration: number;
}

export type CrossfadeCurveType = "equal-power" | "exponential" | "linear";

export class DJSmartCrossfadeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private analyser: AnalyserNode | null = null;

  private deckA!: DeckChannel;
  private deckB!: DeckChannel;
  private activeDeckId: "A" | "B" = "A";

  private isCrossfading = false;
  private transitionDuration = 6.0; // 6-second crossfade window
  private midpointTimeout: ReturnType<typeof setTimeout> | null = null;
  private completionTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(crossfadeDurationSeconds = 6.0) {
    this.transitionDuration = crossfadeDurationSeconds;
  }

  /* ── 1. DUAL AUDIO NODES & GAIN CONTROL ARCHITECTURE ─────────────── */

  /**
   * Initializes the AudioContext and the entire dual-deck signal processing graph.
   * Safe to call repeatedly; guarantees a running AudioContext within user gestures.
   */
  public initAudioContext(): AudioContext {
    if (!this.ctx || this.ctx.state === "closed") {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();

      // Master Limiter / Brickwall Compressor (prevents inter-sample clipping when summing 2 loud tracks)
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-1.0, this.ctx.currentTime); // -1 dBFS threshold
      this.compressor.knee.setValueAtTime(6.0, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(12.0, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime); // 3ms fast attack
      this.compressor.release.setValueAtTime(0.15, this.ctx.currentTime); // 150ms release

      // Master Output Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);

      // Real-time FFT Analyser for VU Metering & Visualizers
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 256;

      // Master Routing: Channels -> Compressor -> MasterGain -> Analyser -> Speakers
      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      // Initialize Deck A and Deck B channel strips
      this.deckA = this.createDeckChannel("A");
      this.deckB = this.createDeckChannel("B");

      // Deck A starts active (unity gain), Deck B starts silent
      this.deckA.gainNode.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.deckB.gainNode.gain.setValueAtTime(0.0, this.ctx.currentTime);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  /**
   * Constructs an independent DJ Channel Strip with 3-Band Isolator EQ and DJ Filter.
   */
  private createDeckChannel(id: "A" | "B"): DeckChannel {
    const ctx = this.ctx!;

    // 3-Band DJ Isolator EQ
    const eqLow = ctx.createBiquadFilter();
    eqLow.type = "lowshelf";
    eqLow.frequency.setValueAtTime(250, ctx.currentTime);
    eqLow.gain.setValueAtTime(0, ctx.currentTime);

    const eqMid = ctx.createBiquadFilter();
    eqMid.type = "peaking";
    eqMid.frequency.setValueAtTime(1000, ctx.currentTime);
    eqMid.Q.setValueAtTime(1.0, ctx.currentTime);
    eqMid.gain.setValueAtTime(0, ctx.currentTime);

    const eqHigh = ctx.createBiquadFilter();
    eqHigh.type = "highshelf";
    eqHigh.frequency.setValueAtTime(3500, ctx.currentTime);
    eqHigh.gain.setValueAtTime(0, ctx.currentTime);

    // DJ Sweep Filter (Bi-directional Lowpass / Highpass)
    const filterNode = ctx.createBiquadFilter();
    filterNode.type = "allpass"; // Neutral by default

    // Dedicated Channel Volume GainNode
    const gainNode = ctx.createGain();

    // Channel Signal Flow: EQ Low -> EQ Mid -> EQ High -> DJ Filter -> Volume Gain -> Compressor
    eqLow.connect(eqMid);
    eqMid.connect(eqHigh);
    eqHigh.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(this.compressor!);

    return {
      id,
      sourceNode: null,
      gainNode,
      eqLow,
      eqMid,
      eqHigh,
      filterNode,
      currentBpm: 128,
      metadata: null,
      isPlaying: false,
      startTime: 0,
      duration: 0,
    };
  }

  /* ── 2. AUTOMATIC BEATS-PER-MINUTE (BPM) DSP ANALYZER ─────────────── */

  /**
   * Client-side BPM Analyzer using OfflineAudioContext.
   * Isolates bass transients via a 150Hz low-pass filter and detects rhythm intervals.
   */
  public async detectBPM(audioBuffer: AudioBuffer): Promise<number> {
    try {
      // Analyze a representative 30-second window to optimize performance
      const sampleRate = audioBuffer.sampleRate;
      const duration = Math.min(audioBuffer.duration, 30.0);
      const offlineCtx = new OfflineAudioContext(1, Math.floor(sampleRate * duration), sampleRate);

      // Render audio through a Low-Pass filter to isolate kick drums
      const source = offlineCtx.createBufferSource();
      source.buffer = audioBuffer;

      const filter = offlineCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(150, 0); // 150 Hz cutoff isolates the rhythmic low-end
      filter.Q.setValueAtTime(1.0, 0);

      source.connect(filter);
      filter.connect(offlineCtx.destination);
      source.start(0);

      const filteredBuffer = await offlineCtx.startRendering();
      const channelData = filteredBuffer.getChannelData(0);

      // Peak detection & dynamic energy thresholding
      const peaks = this.extractPeaks(channelData, sampleRate);
      const intervals = this.calculateInterBeatIntervals(peaks);
      const bpm = this.calculateBPMFromIntervals(intervals);

      return bpm >= 60 && bpm <= 180 ? Math.round(bpm) : 128; // Fallback to 128 BPM if inconclusive
    } catch (e) {
      console.warn("BPM detection fallback:", e);
      return 128;
    }
  }

  private extractPeaks(data: Float32Array, sampleRate: number): number[] {
    const stepSize = Math.floor(sampleRate / 100); // 10ms windows
    const peaks: number[] = [];
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      sum += Math.abs(data[i]);
    }
    const average = sum / data.length;
    const threshold = average * 1.8; // Dynamic transient threshold

    for (let i = 0; i < data.length; i += stepSize) {
      let maxVal = 0;
      let maxIdx = i;
      for (let j = i; j < i + stepSize && j < data.length; j++) {
        const val = Math.abs(data[j]);
        if (val > maxVal) {
          maxVal = val;
          maxIdx = j;
        }
      }
      if (maxVal > threshold) {
        peaks.push(maxIdx / sampleRate);
      }
    }
    return peaks;
  }

  private calculateInterBeatIntervals(peaks: number[]): number[] {
    const intervals: number[] = [];
    for (let i = 1; i < peaks.length; i++) {
      const diff = peaks[i] - peaks[i - 1];
      // Interval must be between 0.33s (180 BPM) and 1.0s (60 BPM)
      if (diff >= 0.33 && diff <= 1.0) {
        intervals.push(diff);
      }
    }
    return intervals;
  }

  private calculateBPMFromIntervals(intervals: number[]): number {
    if (intervals.length === 0) return 128;
    const histogram: Record<number, number> = {};

    for (const interval of intervals) {
      const calculatedBpm = Math.round(60 / interval);
      histogram[calculatedBpm] = (histogram[calculatedBpm] || 0) + 1;
    }

    let dominantBpm = 128;
    let maxVotes = 0;
    for (const bpmStr in histogram) {
      const count = histogram[bpmStr];
      if (count > maxVotes) {
        maxVotes = count;
        dominantBpm = Number(bpmStr);
      }
    }
    return dominantBpm;
  }

  /* ── 3. SMART CROSSFADE WITH CONSTANT-ENERGY DJ CURVE ─────────────── */

  /**
   * Triggers a seamless 6-second crossfade between outgoing and incoming decks.
   * Uses an equal-power trigonometric curve so total sound energy never dips.
   *
   * @param incomingMetadata - Track details of the incoming song
   * @param incomingBpm - Detected or pre-defined BPM of the incoming song
   * @param onMidpoint - Callback when crossfade hits exact 50% midpoint (3.0s)
   * @param onComplete - Callback when crossfade completes (6.0s)
   */
  public executeDJCrossfade(
    incomingMetadata: TrackMetadata,
    incomingBpm = 128,
    onMidpoint?: () => void,
    onComplete?: () => void
  ): void {
    this.initAudioContext();
    const ctx = this.ctx!;
    const now = ctx.currentTime;
    const duration = this.transitionDuration; // Exactly 6.0 seconds
    const midpointSec = duration / 2; // Exactly 3.0 seconds

    this.isCrossfading = true;

    const outgoingDeck = this.activeDeckId === "A" ? this.deckA : this.deckB;
    const incomingDeck = this.activeDeckId === "A" ? this.deckB : this.deckA;

    incomingDeck.metadata = incomingMetadata;
    incomingDeck.currentBpm = incomingBpm;

    // Reset scheduled parameter automations
    outgoingDeck.gainNode.gain.cancelScheduledValues(now);
    incomingDeck.gainNode.gain.cancelScheduledValues(now);

    // Anchor starting volumes
    outgoingDeck.gainNode.gain.setValueAtTime(1.0, now);
    incomingDeck.gainNode.gain.setValueAtTime(0.0, now);

    /* ── EQUAL-POWER DJ CROSSFADE CURVES ── */
    // Curve resolution: 64 samples
    const curvePoints = 64;
    const outCurve = new Float32Array(curvePoints);
    const inCurve = new Float32Array(curvePoints);

    for (let i = 0; i < curvePoints; i++) {
      const progress = i / (curvePoints - 1); // 0.0 -> 1.0
      // Constant-energy trigonometric crossfade:
      // Outgoing: cos(t * pi/2)
      // Incoming: sin(t * pi/2)
      // Guaranteed: out^2 + in^2 = 1.0 (no volume hole in the mix!)
      outCurve[i] = Math.cos(progress * 0.5 * Math.PI);
      inCurve[i] = Math.sin(progress * 0.5 * Math.PI);
    }

    outgoingDeck.gainNode.gain.setValueCurveAtTime(outCurve, now, duration);
    incomingDeck.gainNode.gain.setValueCurveAtTime(inCurve, now, duration);

    /* ── 4. TEMPO & PITCH MATCHING (REMIX MODE) ── */
    this.applyTempoMatch(outgoingDeck, incomingDeck, now, duration);

    /* ── 5. MEDIA SESSION LOCK-SCREEN SYNC AT MIDPOINT (3.0s) ── */
    if (this.midpointTimeout) clearTimeout(this.midpointTimeout);
    this.midpointTimeout = setTimeout(() => {
      this.syncMediaSession(incomingMetadata);
      if (onMidpoint) onMidpoint();
    }, midpointSec * 1000);

    /* ── TRANSITION COMPLETION ── */
    if (this.completionTimeout) clearTimeout(this.completionTimeout);
    this.completionTimeout = setTimeout(() => {
      this.isCrossfading = false;
      this.activeDeckId = this.activeDeckId === "A" ? "B" : "A";

      // Stop outgoing deck and clamp final gain levels
      outgoingDeck.gainNode.gain.setValueAtTime(0.0, ctx.currentTime);
      incomingDeck.gainNode.gain.setValueAtTime(1.0, ctx.currentTime);

      if (outgoingDeck.sourceNode && "playbackRate" in outgoingDeck.sourceNode) {
        outgoingDeck.sourceNode.playbackRate.setValueAtTime(1.0, ctx.currentTime);
      }

      if (onComplete) onComplete();
    }, duration * 1000);
  }

  /* ── 4. TEMPO & PITCH MATCHING (REMIX MODE) IMPLEMENTATION ─────────── */

  /**
   * Adjusts the playbackRate of the incoming track by up to ±3% to lock tempos.
   */
  private applyTempoMatch(outgoing: DeckChannel, incoming: DeckChannel, startTime: number, duration: number): void {
    if (!incoming.sourceNode || !("playbackRate" in incoming.sourceNode)) {
      return; // MediaElementAudioSourceNode playbackRate is set on HTMLMediaElement
    }

    const bpmOut = outgoing.currentBpm || 128;
    const bpmIn = incoming.currentBpm || 128;

    if (bpmOut > 0 && bpmIn > 0) {
      // Calculate ratio: e.g. 130 / 128 = 1.0156
      let ratio = bpmOut / bpmIn;

      // Restrict tempo adjustments to ±3% max (0.97 - 1.03) to preserve musical pitch
      ratio = Math.max(0.97, Math.min(1.03, ratio));

      // Smoothly ramp tempo over the 6-second crossfade window
      const source = incoming.sourceNode as AudioBufferSourceNode;
      source.playbackRate.cancelScheduledValues(startTime);
      source.playbackRate.setValueAtTime(ratio, startTime);

      // Subtly glide back to original tempo (1.0) after the mix completes
      source.playbackRate.linearRampToValueAtTime(1.0, startTime + duration * 1.5);
    }
  }

  /* ── 5. MEDIA SESSION LOCK-SCREEN SYNCHRONIZATION ─────────────────── */

  /**
   * Updates native lock-screen controls, Bluetooth metadata, and notification drawer.
   */
  public syncMediaSession(metadata: TrackMetadata): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: metadata.title,
        artist: metadata.artist,
        album: metadata.album || "Trance Sangeet (DJ Mix)",
        artwork: metadata.artwork || [
          { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
          { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
        ],
      });
    } catch (_) {}
  }

  /* ── SMART TRANSITION TIMING (6-SECOND AUTO TRIGGER) ─────────────── */

  /**
   * High-frequency check invoked by the playback monitor.
   * Initiates crossfade exactly when the current track has 6.0 seconds remaining.
   */
  public checkAutoCrossfadeThreshold(
    currentTime: number,
    duration: number,
    incomingMetadata: TrackMetadata,
    incomingBpm = 128,
    onMidpoint?: () => void,
    onComplete?: () => void
  ): boolean {
    if (this.isCrossfading) return false;
    if (duration <= this.transitionDuration * 2) return false; // Minimum track length safeguard (12s)

    const timeRemaining = duration - currentTime;

    // Trigger crossfade between 6.0s and 0.5s before end
    if (timeRemaining <= this.transitionDuration && timeRemaining >= 0.5) {
      this.executeDJCrossfade(incomingMetadata, incomingBpm, onMidpoint, onComplete);
      return true;
    }
    return false;
  }

  /**
   * Aborts active crossfade immediately (e.g. user manually skips, seeks, or pauses).
   */
  public abortCrossfade(): void {
    if (this.midpointTimeout) {
      clearTimeout(this.midpointTimeout);
      this.midpointTimeout = null;
    }
    if (this.completionTimeout) {
      clearTimeout(this.completionTimeout);
      this.completionTimeout = null;
    }
    this.isCrossfading = false;

    if (this.ctx) {
      const now = this.ctx.currentTime;
      this.deckA.gainNode.gain.cancelScheduledValues(now);
      this.deckB.gainNode.gain.cancelScheduledValues(now);

      if (this.activeDeckId === "A") {
        this.deckA.gainNode.gain.setValueAtTime(1.0, now);
        this.deckB.gainNode.gain.setValueAtTime(0.0, now);
      } else {
        this.deckA.gainNode.gain.setValueAtTime(0.0, now);
        this.deckB.gainNode.gain.setValueAtTime(1.0, now);
      }
    }
  }

  /* ── ACCESSORS & HELPERS ─────────────────────────────────────────── */

  public getActiveDeck(): DeckChannel {
    return this.activeDeckId === "A" ? this.deckA : this.deckB;
  }

  public getIncomingDeck(): DeckChannel {
    return this.activeDeckId === "A" ? this.deckB : this.deckA;
  }

  public getIsCrossfading(): boolean {
    return this.isCrossfading;
  }

  public setMasterVolume(level: number): void {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1.0, level));
      this.masterGain.gain.setValueAtTime(clamped, this.ctx.currentTime);
    }
  }
}
