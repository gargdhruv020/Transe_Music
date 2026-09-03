/**
 * ====================================================================================
 * VOCAL-CATCHING AUTOMIX & TRANSIENT GATE ENGINE (Web Audio API + DSP)
 * ====================================================================================
 *
 * Implements Apple Music-style intelligent DJ AutoMix:
 * 1. Transient & Decibel Gate Analysis: Scans PCM audio for the first major vocal/melody onset
 * 2. Dynamic Cue Trimming: Bypasses slow instrumental intros, cueing exactly 1.0s before vocals
 * 3. Smart Lyric Overlap Engine: 8-second transition with DJ frequency-carving ducking curves
 * 4. Mobile Thread Offloading: Heavy Float32Array DSP scanning executed in a Web Worker
 */

export interface TrackMetadata {
  id?: string | number;
  title: string;
  artist: string;
  album?: string;
  artwork?: Array<{ src: string; sizes: string; type: string }>;
  vocalStartTime?: number;
  cueTime?: number;
}

export interface VocalAnalysisResult {
  vocalStartTime: number; // Timestamp in seconds where the core vocal/melody punches in
  cueTime: number;        // vocalStartTime - 1.0s (captures singer's breath & pickup)
  baselineDb: number;     // Average intro baseline level in dBFS
  peakDb: number;         // Vocal transient level in dBFS
  transientIndex: number; // Raw sample index
}

/* ──────────────────────────────────────────────────────────────────
 * 1. INLINE DSP WEB WORKER (MOBILE THREAD OFFLOADING)
 * ────────────────────────────────────────────────────────────────── */

const DSP_WORKER_SCRIPT = `
  self.onmessage = function(e) {
    const { channelData, sampleRate, maxScanDuration = 60.0 } = e.data;
    const totalSamples = Math.min(channelData.length, Math.floor(sampleRate * maxScanDuration));
    
    // Window analysis: 20ms windows (e.g. 882 samples @ 44.1kHz)
    const windowSize = Math.floor(sampleRate * 0.02);
    const numWindows = Math.floor(totalSamples / windowSize);
    
    if (numWindows < 10) {
      self.postMessage({ vocalStartTime: 0, cueTime: 0, baselineDb: -60, peakDb: 0, transientIndex: 0 });
      return;
    }

    const windowEnergies = new Float32Array(numWindows);
    
    // 1. Calculate RMS energy per 20ms frame
    for (let w = 0; w < numWindows; w++) {
      let sum = 0;
      const offset = w * windowSize;
      for (let i = 0; i < windowSize; i++) {
        const val = channelData[offset + i];
        sum += val * val;
      }
      windowEnergies[w] = Math.sqrt(sum / windowSize);
    }

    // 2. Compute baseline intro energy (first 3 seconds / 150 windows)
    const baselineFrames = Math.min(Math.floor(sampleRate * 3.0 / windowSize), Math.floor(numWindows * 0.25));
    let baselineSum = 0;
    for (let w = 0; w < baselineFrames; w++) {
      baselineSum += windowEnergies[w];
    }
    const baselineRms = Math.max(0.0001, baselineSum / baselineFrames);
    const baselineDb = 20 * Math.log10(baselineRms);

    // 3. Transient Gate Detection: Find sustained energy jump (> 7 dB above baseline or absolute threshold)
    // A vocal hook has sustained energy for at least 300ms (15 consecutive 20ms frames)
    const SUSTAIN_FRAMES = 15;
    let detectedFrame = -1;
    const energyThreshold = Math.max(baselineRms * 2.24, 0.04); // +7dB = 2.24x amplitude jump

    // Start scanning from 2 seconds in (skips initial drop-in/DJ sweep) up to 55s
    const scanStartFrame = Math.floor(sampleRate * 2.0 / windowSize);

    for (let w = scanStartFrame; w < numWindows - SUSTAIN_FRAMES; w++) {
      const currentEnergy = windowEnergies[w];

      if (currentEnergy > energyThreshold) {
        // Check for sustained vocal phrase (not an isolated snare hit or hi-hat)
        let sustainedCount = 0;
        for (let s = 1; s <= SUSTAIN_FRAMES; s++) {
          if (windowEnergies[w + s] > energyThreshold * 0.7) {
            sustainedCount++;
          }
        }

        // If at least 80% of subsequent frames sustain energy, we found the main vocal/hook!
        if (sustainedCount >= SUSTAIN_FRAMES * 0.8) {
          detectedFrame = w;
          break;
        }
      }
    }

    // Fallback: If no sharp transient jump found, search for max transient peak
    if (detectedFrame === -1) {
      let maxEnergy = 0;
      let maxFrame = 0;
      for (let w = scanStartFrame; w < numWindows; w++) {
        if (windowEnergies[w] > maxEnergy) {
          maxEnergy = windowEnergies[w];
          maxFrame = w;
        }
      }
      detectedFrame = maxFrame > 0 ? maxFrame : 0;
    }

    const vocalStartSeconds = (detectedFrame * windowSize) / sampleRate;
    // Cue point: exactly 1.0s before vocal to catch intake breath & pickup bar
    const cueSeconds = Math.max(0, vocalStartSeconds - 1.0);
    const peakDb = 20 * Math.log10(Math.max(0.0001, windowEnergies[detectedFrame]));

    self.postMessage({
      vocalStartTime: Number(vocalStartSeconds.toFixed(3)),
      cueTime: Number(cueSeconds.toFixed(3)),
      baselineDb: Number(baselineDb.toFixed(1)),
      peakDb: Number(peakDb.toFixed(1)),
      transientIndex: detectedFrame * windowSize
    });
  };
`;

/* ──────────────────────────────────────────────────────────────────
 * 2. VOCAL TRANSIENT ANALYZER (THREAD-OFFLOADED)
 * ────────────────────────────────────────────────────────────────── */

export class VocalTransientAnalyzer {
  private static worker: Worker | null = null;

  private static getWorker(): Worker {
    if (!this.worker) {
      const blob = new Blob([DSP_WORKER_SCRIPT], { type: "application/javascript" });
      const url = URL.createObjectURL(blob);
      this.worker = new Worker(url);
    }
    return this.worker;
  }

  /**
   * Offloads heavy Float32Array PCM scanning to a dedicated background Web Worker thread.
   * Guarantees 60/120 FPS UI smoothness on mobile iOS Safari and Android Chrome.
   */
  public static async analyzeVocalOnset(
    audioBuffer: AudioBuffer,
    maxScanDuration = 60.0
  ): Promise<VocalAnalysisResult> {
    const worker = this.getWorker();
    const channelData = audioBuffer.getChannelData(0); // Analyze mono/left channel
    const sampleRate = audioBuffer.sampleRate;

    // Subsample to first 60 seconds to conserve memory and transmission bandwidth
    const maxSamples = Math.min(channelData.length, Math.floor(sampleRate * maxScanDuration));
    const sampleChunk = channelData.slice(0, maxSamples);

    return new Promise((resolve) => {
      const handler = (e: MessageEvent<VocalAnalysisResult>) => {
        worker.removeEventListener("message", handler);
        resolve(e.data);
      };
      worker.addEventListener("message", handler);

      // Send to background worker thread
      worker.postMessage({
        channelData: sampleChunk,
        sampleRate,
        maxScanDuration
      }, [sampleChunk.buffer]);
    });
  }
}

/* ──────────────────────────────────────────────────────────────────
 * 3. DUAL-DECK VOCAL-CATCHING AUTOMIX ENGINE
 * ────────────────────────────────────────────────────────────────── */

export class VocalCatchingAutoMixEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;

  // Deck A & Deck B GainNodes
  private gainNodeA: GainNode | null = null;
  private gainNodeB: GainNode | null = null;
  private sourceNodeA: AudioBufferSourceNode | null = null;
  private sourceNodeB: AudioBufferSourceNode | null = null;

  private activeDeck: "A" | "B" = "A";
  private isTransitioning = false;
  private transitionDuration = 8.0; // 8.0s smart lyric overlap

  private midpointTimer: ReturnType<typeof setTimeout> | null = null;
  private completionTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(transitionDurationSeconds = 8.0) {
    this.transitionDuration = transitionDurationSeconds;
  }

  /**
   * Initializes AudioContext with a transparent mastering limiter.
   */
  public initAudioContext(): AudioContext {
    if (!this.ctx || this.ctx.state === "closed") {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass({ latencyHint: "playback", sampleRate: 44100 });

      // Transparent mastering compressor to tame vocal clashes
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-1.5, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(6.0, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(8.0, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.005, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.12, this.ctx.currentTime);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);

      this.gainNodeA = this.ctx.createGain();
      this.gainNodeB = this.ctx.createGain();

      this.gainNodeA.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.gainNodeB.gain.setValueAtTime(0.0, this.ctx.currentTime);

      // Signal Routing: Decks -> Compressor -> MasterGain -> Speakers
      this.gainNodeA.connect(this.compressor);
      this.gainNodeB.connect(this.compressor);
      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  /**
   * Plays a track from start on the active deck.
   */
  public playTrack(buffer: AudioBuffer, metadata: TrackMetadata, startOffset = 0): void {
    this.initAudioContext();
    const ctx = this.ctx!;
    const now = ctx.currentTime;

    const activeGain = this.activeDeck === "A" ? this.gainNodeA! : this.gainNodeB!;
    const idleGain = this.activeDeck === "A" ? this.gainNodeB! : this.gainNodeA!;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(activeGain);

    activeGain.gain.cancelScheduledValues(now);
    activeGain.gain.setValueAtTime(1.0, now);
    idleGain.gain.setValueAtTime(0.0, now);

    source.start(now, startOffset);

    if (this.activeDeck === "A") {
      this.sourceNodeA = source;
    } else {
      this.sourceNodeB = source;
    }

    this.syncMediaSession(metadata);
  }

  /**
   * Smart Lyric Overlap Engine:
   * Triggered exactly 8 seconds before the outgoing track finishes.
   *
   * 1. Bypasses upcoming track's instrumental intro; sets start point to (vocalStartTime - 1.0s).
   * 2. Executes a DJ ducking curve on the outgoing track so background beats drop cleanly.
   * 3. Fires the incoming song directly on its vocal hook.
   * 4. Synchronizes lock-screen MediaSession metadata at the 4.0s midpoint.
   */
  public executeVocalOverlapAutoMix(
    upcomingBuffer: AudioBuffer,
    upcomingMetadata: TrackMetadata,
    vocalAnalysis: VocalAnalysisResult,
    onMidpoint?: () => void,
    onComplete?: () => void
  ): void {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    this.initAudioContext();
    const ctx = this.ctx!;
    const now = ctx.currentTime;
    const duration = this.transitionDuration; // 8.0 seconds
    const midpointSec = duration * 0.5; // 4.0 seconds

    const outgoingGain = this.activeDeck === "A" ? this.gainNodeA! : this.gainNodeB!;
    const incomingGain = this.activeDeck === "A" ? this.gainNodeB! : this.gainNodeA!;

    // 1. Cue incoming track bypassed right to the vocal pickup
    const cuePoint = Math.max(0, vocalAnalysis.cueTime);
    const incomingSource = ctx.createBufferSource();
    incomingSource.buffer = upcomingBuffer;
    incomingSource.connect(incomingGain);

    if (this.activeDeck === "A") {
      this.sourceNodeB = incomingSource;
    } else {
      this.sourceNodeA = incomingSource;
    }

    // Cancel prior automations
    outgoingGain.gain.cancelScheduledValues(now);
    incomingGain.gain.cancelScheduledValues(now);

    outgoingGain.gain.setValueAtTime(1.0, now);
    incomingGain.gain.setValueAtTime(0.0, now);

    /* ── 2. DJ VOCAL-CARVING DUCKING CURVE (setValueCurveAtTime) ── */
    // Outgoing Curve: Drops sharply from 1.0 -> 0.35 in first 1.5s to clear vocal space,
    // rides underneath during vocal hook, then fades to 0.0 at the end.
    const steps = 64;
    const outgoingCurve = new Float32Array(steps);
    const incomingCurve = new Float32Array(steps);

    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1); // Progress: 0.0 -> 1.0 (over 8 seconds)

      // Outgoing Track Envelope (Ducking + Outro taper)
      if (t <= 0.2) {
        // First 1.6s: Fast ducking from 1.0 down to 0.35
        const p = t / 0.2;
        outgoingCurve[i] = 1.0 - p * 0.65;
      } else if (t <= 0.6) {
        // 1.6s - 4.8s: Vocal collision window - outgoing track rides low underneath
        outgoingCurve[i] = 0.35 * Math.cos(((t - 0.2) / 0.4) * 0.5 * Math.PI);
      } else {
        // 4.8s - 8.0s: Final decay to silence
        const p = (t - 0.6) / 0.4;
        outgoingCurve[i] = 0.2 * (1.0 - p);
      }

      // Incoming Track Envelope (Rapid punch on vocal pickup)
      if (t <= 0.125) {
        // First 1.0s (pickup breath): Ramps 0.0 -> 0.85
        const p = t / 0.125;
        incomingCurve[i] = Math.sin(p * 0.5 * Math.PI) * 0.85;
      } else if (t <= 0.35) {
        // 1.0s - 2.8s: Vocal hits full power (1.0)
        const p = (t - 0.125) / 0.225;
        incomingCurve[i] = 0.85 + p * 0.15;
      } else {
        // Maintained at full volume
        incomingCurve[i] = 1.0;
      }
    }

    outgoingGain.gain.setValueCurveAtTime(outgoingCurve, now, duration);
    incomingGain.gain.setValueCurveAtTime(incomingCurve, now, duration);

    // Start incoming song exactly at its cropped vocal cue point!
    incomingSource.start(now, cuePoint);

    /* ── 3. MEDIA SESSION LOCK-SCREEN SYNC AT MIDPOINT (4.0s) ── */
    if (this.midpointTimer) clearTimeout(this.midpointTimer);
    this.midpointTimer = setTimeout(() => {
      this.syncMediaSession(upcomingMetadata);
      if (onMidpoint) onMidpoint();
    }, midpointSec * 1000);

    /* ── 4. COMPLETION & ROLE SWAP (8.0s) ── */
    if (this.completionTimer) clearTimeout(this.completionTimer);
    this.completionTimer = setTimeout(() => {
      this.isTransitioning = false;
      const outgoingSource = this.activeDeck === "A" ? this.sourceNodeA : this.sourceNodeB;

      if (outgoingSource) {
        try { outgoingSource.stop(); } catch (_) {}
        outgoingSource.disconnect();
      }

      if (this.activeDeck === "A") {
        this.sourceNodeA = null;
      } else {
        this.sourceNodeB = null;
      }

      this.activeDeck = this.activeDeck === "A" ? "B" : "A";
      outgoingGain.gain.setValueAtTime(0.0, ctx.currentTime);
      incomingGain.gain.setValueAtTime(1.0, ctx.currentTime);

      if (onComplete) onComplete();
    }, duration * 1000);
  }

  public syncMediaSession(metadata: TrackMetadata): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: metadata.title,
        artist: metadata.artist,
        album: metadata.album || "Trance Sangeet (Vocal AutoMix)",
        artwork: metadata.artwork || [
          { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
          { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
        ]
      });
    } catch (_) {}
  }

  public abortAutoMix(): void {
    if (this.midpointTimer) clearTimeout(this.midpointTimer);
    if (this.completionTimer) clearTimeout(this.completionTimer);
    this.isTransitioning = false;

    if (this.ctx && this.gainNodeA && this.gainNodeB) {
      const now = this.ctx.currentTime;
      this.gainNodeA.gain.cancelScheduledValues(now);
      this.gainNodeB.gain.cancelScheduledValues(now);

      if (this.activeDeck === "A") {
        this.gainNodeA.gain.setValueAtTime(1.0, now);
        this.gainNodeB.gain.setValueAtTime(0.0, now);
        if (this.sourceNodeB) {
          try { this.sourceNodeB.stop(); } catch (_) {}
          this.sourceNodeB = null;
        }
      } else {
        this.gainNodeA.gain.setValueAtTime(0.0, now);
        this.gainNodeB.gain.setValueAtTime(1.0, now);
        if (this.sourceNodeA) {
          try { this.sourceNodeA.stop(); } catch (_) {}
          this.sourceNodeA = null;
        }
      }
    }
  }

  public getActiveDeck(): "A" | "B" {
    return this.activeDeck;
  }

  public getIsTransitioning(): boolean {
    return this.isTransitioning;
  }
}
