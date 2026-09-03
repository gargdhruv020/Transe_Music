/**
 * ====================================================================================
 * MOBILE-COMPATIBLE BUFFER-BASED WEB AUDIO API DSP ENGINE
 * ====================================================================================
 *
 * Professional DSP implementation tailored for mobile WebKit / Android security contexts:
 * 1. CORS & Binary ArrayBuffer Fetching: Raw byte pre-caching with explicit anonymous CORS
 * 2. Mobile Context Resumption: User-gesture hardware clock authorization for iOS/Android
 * 3. Silenced Phrase Trimming: RMS decibel threshold scanning (-48 dBFS) for Apple Music AutoMix punch
 * 4. Dynamic 10-Second Tempo Interpolation: Dynamic ±3% linearRampToValueAtTime beat-matching
 * 5. Media Session Lock-Screen Sync: Synchronized metadata & timeline handoff at midpoint
 */

export interface TrackData {
  id: number | string;
  title: string;
  artist: string;
  album?: string;
  url: string;
  artwork?: Array<{ src: string; sizes: string; type: string }>;
  bpm?: number;
}

export interface DeckPlaybackState {
  deckId: "A" | "B";
  sourceNode: AudioBufferSourceNode | null;
  gainNode: GainNode;
  buffer: AudioBuffer | null;
  bpm: number;
  startTime: number;
  duration: number;
  isPlaying: boolean;
}

/* ──────────────────────────────────────────────────────────────────
 * 1. CORS & BINARY FETCH OVERHAUL (ARRAYBUFFER LOADER)
 * ────────────────────────────────────────────────────────────────── */

export class BinaryAudioLoader {
  private static bufferCache: Map<string, AudioBuffer> = new Map();
  private static inflightRequests: Map<string, Promise<AudioBuffer>> = new Map();

  /**
   * Fetches raw binary audio bytes via ArrayBuffer with explicit CORS headers.
   * Caches decoded AudioBuffers in memory to allow instant zero-latency cueing.
   */
  public static async loadAudioBuffer(
    ctx: AudioContext,
    url: string,
    abortSignal?: AbortSignal
  ): Promise<AudioBuffer> {
    // 1. Check in-memory decoded buffer cache
    if (this.bufferCache.has(url)) {
      return this.bufferCache.get(url)!;
    }

    // 2. Prevent duplicate concurrent fetches for the same URL
    if (this.inflightRequests.has(url)) {
      return this.inflightRequests.get(url)!;
    }

    const fetchPromise = (async () => {
      try {
        // Fetch raw binary bytes with strict CORS anonymous credentials
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
          credentials: "omit",
          headers: {
            "Accept": "audio/*,application/octet-stream;q=0.9,*/*;q=0.8"
          },
          signal: abortSignal
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText} fetching ${url}`);
        }

        const arrayBuffer = await response.arrayBuffer();

        // Decode binary audio data safely for mobile WebKit & Blink
        const decodedBuffer = await MobileAudioContextManager.safeDecodeAudioData(ctx, arrayBuffer);

        // Run silenced phrase trimming (AutoMix punch)
        const trimmedBuffer = SilencedPhraseTrimmer.trimSilence(ctx, decodedBuffer, -48);

        // Cache the trimmed audio buffer (capped to 20 tracks to prevent memory pressure on mobile)
        if (this.bufferCache.size > 20) {
          const oldestKey = this.bufferCache.keys().next().value;
          if (oldestKey) this.bufferCache.delete(oldestKey);
        }
        this.bufferCache.set(url, trimmedBuffer);

        return trimmedBuffer;
      } finally {
        this.inflightRequests.delete(url);
      }
    })();

    this.inflightRequests.set(url, fetchPromise);
    return fetchPromise;
  }

  public static clearCache(): void {
    this.bufferCache.clear();
    this.inflightRequests.clear();
  }
}

/* ──────────────────────────────────────────────────────────────────
 * 2. MOBILE CONTEXT RESUMPTION & HARDWARE CLOCK AUTHORIZATION
 * ────────────────────────────────────────────────────────────────── */

export class MobileAudioContextManager {
  private static sharedContext: AudioContext | null = null;
  private static isUnlocked = false;

  /**
   * Returns or constructs the singleton AudioContext.
   */
  public static getContext(): AudioContext {
    if (!this.sharedContext || this.sharedContext.state === "closed") {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      this.sharedContext = new AudioCtxClass({
        latencyHint: "playback",
        sampleRate: 44100
      });
      this.isUnlocked = false;
    }
    return this.sharedContext;
  }

  /**
   * Central user-gesture authorization module.
   * MUST be called synchronously inside a click or touch event (e.g. site Play button).
   * Unlocks iOS Safari's hardware sample-rate clock by playing a 1-sample silent buffer.
   */
  public static async unlock(userInitiatedEvent?: Event): Promise<boolean> {
    const ctx = this.getContext();

    try {
      // 1. Force state resumption if suspended
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      // 2. iOS Hardware Bus Unlock: Fire a 1-sample silent pulse
      if (!this.isUnlocked) {
        const silentBuffer = ctx.createBuffer(1, 1, ctx.sampleRate);
        const source = ctx.createBufferSource();
        source.buffer = silentBuffer;
        source.connect(ctx.destination);
        source.start(0);

        // Wait a microtask to confirm clock advancement
        if (ctx.state === "running") {
          this.isUnlocked = true;
        }
      }

      return ctx.state === "running";
    } catch (err) {
      console.warn("Mobile AudioContext unlock error:", err);
      return false;
    }
  }

  /**
   * Universal decodeAudioData with Promise support + legacy WebKit callback fallback.
   */
  public static async safeDecodeAudioData(
    ctx: AudioContext,
    arrayBuffer: ArrayBuffer
  ): Promise<AudioBuffer> {
    // ArrayBuffer is detached after decoding; make a copy if needed
    const bufferCopy = arrayBuffer.slice(0);

    return new Promise<AudioBuffer>((resolve, reject) => {
      // Modern Promise-based API with backwards-compatible callback signature
      const promise = ctx.decodeAudioData(
        bufferCopy,
        (decoded) => resolve(decoded),
        (error) => reject(error)
      );

      if (promise && typeof promise.then === "function") {
        promise.then(resolve).catch(reject);
      }
    });
  }
}

/* ──────────────────────────────────────────────────────────────────
 * 3. SILENCED PHRASE TRIMMING (APPLE MUSIC AUTOMIX DSP)
 * ────────────────────────────────────────────────────────────────── */

export class SilencedPhraseTrimmer {
  /**
   * Scans raw PCM channel data and trims introductory dead air & trailing silence.
   * Uses RMS energy thresholding in dBFS (-48 dBFS = ~0.0039 amplitude).
   * Ensures transitions punch in directly on the first transient (kick/beat).
   *
   * @param ctx - Active AudioContext
   * @param sourceBuffer - Raw decoded AudioBuffer
   * @param thresholdDb - Silence threshold in dBFS (default: -48 dBFS)
   * @returns Trimmed AudioBuffer
   */
  public static trimSilence(
    ctx: AudioContext,
    sourceBuffer: AudioBuffer,
    thresholdDb = -48
  ): AudioBuffer {
    const numChannels = sourceBuffer.numberOfChannels;
    const sampleRate = sourceBuffer.sampleRate;
    const totalSamples = sourceBuffer.length;

    // Convert dBFS threshold to linear amplitude: A = 10^(dB / 20)
    const linearThreshold = Math.pow(10, thresholdDb / 20);

    // Analyze left & right channels
    const channels: Float32Array[] = [];
    for (let c = 0; c < numChannels; c++) {
      channels.push(sourceBuffer.getChannelData(c));
    }

    const windowSize = Math.floor(sampleRate * 0.005); // 5ms analysis windows
    let startSample = 0;
    let endSample = totalSamples - 1;

    // 1. Scan forward from start for initial phrase onset
    for (let i = 0; i < totalSamples - windowSize; i += windowSize) {
      let rms = 0;
      for (let w = 0; w < windowSize; w++) {
        for (let c = 0; c < numChannels; c++) {
          const val = channels[c][i + w];
          rms += val * val;
        }
      }
      rms = Math.sqrt(rms / (windowSize * numChannels));

      if (rms > linearThreshold) {
        // Step back 2ms to preserve natural transient attack
        startSample = Math.max(0, i - Math.floor(sampleRate * 0.002));
        break;
      }
    }

    // 2. Scan backward from end for trailing decay
    for (let i = totalSamples - windowSize; i > startSample; i -= windowSize) {
      let rms = 0;
      for (let w = 0; w < windowSize; w++) {
        for (let c = 0; c < numChannels; c++) {
          const val = channels[c][i + w];
          rms += val * val;
        }
      }
      rms = Math.sqrt(rms / (windowSize * numChannels));

      if (rms > linearThreshold) {
        endSample = Math.min(totalSamples - 1, i + windowSize);
        break;
      }
    }

    const trimmedLength = Math.max(sampleRate, endSample - startSample); // Guarantee >= 1s

    // If already tight (< 50ms silence), avoid redundant buffer allocation
    if (startSample < sampleRate * 0.05 && endSample > totalSamples - sampleRate * 0.05) {
      return sourceBuffer;
    }

    // Allocate trimmed AudioBuffer
    const trimmedBuffer = ctx.createBuffer(numChannels, trimmedLength, sampleRate);
    for (let c = 0; c < numChannels; c++) {
      const targetChannel = trimmedBuffer.getChannelData(c);
      targetChannel.set(channels[c].subarray(startSample, startSample + trimmedLength));
    }

    return trimmedBuffer;
  }
}

/* ──────────────────────────────────────────────────────────────────
 * 4. DUAL-DECK AUTOMIX & DYNAMIC 10-SECOND TEMPO INTERPOLATION
 * ────────────────────────────────────────────────────────────────── */

export class MobileAutoMixEngine {
  private ctx: AudioContext;
  private masterGain: GainNode;
  private compressor: DynamicsCompressorNode;

  private deckA: DeckPlaybackState;
  private deckB: DeckPlaybackState;
  private activeDeckId: "A" | "B" = "A";

  private isTransitioning = false;
  private transitionWindow = 10.0; // Exact 10-second transition window
  private midpointTimer: ReturnType<typeof setTimeout> | null = null;
  private completionTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(transitionWindowSeconds = 10.0) {
    this.transitionWindow = transitionWindowSeconds;
    this.ctx = MobileAudioContextManager.getContext();

    // Studio Master Limiter
    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.setValueAtTime(-1.5, this.ctx.currentTime);
    this.compressor.ratio.setValueAtTime(12.0, this.ctx.currentTime);
    this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
    this.compressor.release.setValueAtTime(0.1, this.ctx.currentTime);

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);

    this.compressor.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    // Deck A Setup
    const gainA = this.ctx.createGain();
    gainA.gain.setValueAtTime(1.0, this.ctx.currentTime);
    gainA.connect(this.compressor);
    this.deckA = {
      deckId: "A",
      sourceNode: null,
      gainNode: gainA,
      buffer: null,
      bpm: 128,
      startTime: 0,
      duration: 0,
      isPlaying: false
    };

    // Deck B Setup
    const gainB = this.ctx.createGain();
    gainB.gain.setValueAtTime(0.0, this.ctx.currentTime);
    gainB.connect(this.compressor);
    this.deckB = {
      deckId: "B",
      sourceNode: null,
      gainNode: gainB,
      buffer: null,
      bpm: 128,
      startTime: 0,
      duration: 0,
      isPlaying: false
    };
  }

  /**
   * Plays a track on the currently active deck.
   */
  public async playTrack(track: TrackData): Promise<void> {
    await MobileAudioContextManager.unlock();
    const ctx = this.ctx;

    // Load and trim audio buffer
    const buffer = await BinaryAudioLoader.loadAudioBuffer(ctx, track.url);

    const activeDeck = this.activeDeckId === "A" ? this.deckA : this.deckB;
    const idleDeck = this.activeDeckId === "A" ? this.deckB : this.deckA;

    // Stop existing nodes
    if (activeDeck.sourceNode) {
      try { activeDeck.sourceNode.stop(); } catch (_) {}
    }
    if (idleDeck.sourceNode) {
      try { idleDeck.sourceNode.stop(); } catch (_) {}
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.setValueAtTime(1.0, ctx.currentTime);
    source.connect(activeDeck.gainNode);

    activeDeck.gainNode.gain.cancelScheduledValues(ctx.currentTime);
    activeDeck.gainNode.gain.setValueAtTime(1.0, ctx.currentTime);
    idleDeck.gainNode.gain.setValueAtTime(0.0, ctx.currentTime);

    const now = ctx.currentTime;
    source.start(now);

    activeDeck.sourceNode = source;
    activeDeck.buffer = buffer;
    activeDeck.bpm = track.bpm || 128;
    activeDeck.startTime = now;
    activeDeck.duration = buffer.duration;
    activeDeck.isPlaying = true;

    this.syncMediaSession(track);
  }

  /**
   * Pre-loads the incoming track into memory so it's decoded and ready ahead of time.
   */
  public async preloadUpcomingTrack(trackUrl: string): Promise<AudioBuffer> {
    return BinaryAudioLoader.loadAudioBuffer(this.ctx, trackUrl);
  }

  /**
   * Executes the 10-Second AutoMix DJ Transition with Dynamic Tempo Interpolation.
   *
   * 1. Incoming deck starts playback at volume 0.0 with trimmed phrase onset
   * 2. Equal-power volume curve maintains constant collective energy
   * 3. Playback rate dynamically ramps up to ±3% to align beats mid-transition
   * 4. Media Session lock-screen metadata updates at exact midpoint (5.0s)
   * 5. Outgoing deck stops at 10.0s, and incoming playbackRate glides to native tempo
   */
  public async execute10SecondAutoMix(
    upcomingTrack: TrackData,
    onMidpoint?: () => void,
    onComplete?: () => void
  ): Promise<void> {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const duration = this.transitionWindow; // 10.0s
    const midpointSeconds = duration * 0.5; // 5.0s

    // Load & trim incoming buffer
    const incomingBuffer = await BinaryAudioLoader.loadAudioBuffer(ctx, upcomingTrack.url);

    const outgoing = this.activeDeckId === "A" ? this.deckA : this.deckB;
    const incoming = this.activeDeckId === "A" ? this.deckB : this.deckA;

    // Instantiate incoming AudioBufferSourceNode
    const incomingSource = ctx.createBufferSource();
    incomingSource.buffer = incomingBuffer;
    incomingSource.connect(incoming.gainNode);

    incoming.sourceNode = incomingSource;
    incoming.buffer = incomingBuffer;
    incoming.bpm = upcomingTrack.bpm || 128;
    incoming.startTime = now;
    incoming.duration = incomingBuffer.duration;
    incoming.isPlaying = true;

    /* ── DYNAMIC TEMPO INTERPOLATION CURVE (±3% STRETCH) ── */
    const bpmOutgoing = outgoing.bpm || 128;
    const bpmIncoming = incoming.bpm || 128;

    // Calculate tempo ratio (e.g. 132 / 128 = 1.031)
    let tempoRatio = bpmOutgoing / bpmIncoming;

    // Clamp stretch to strict ±3% window [0.97, 1.03] to protect musical pitch
    tempoRatio = Math.max(0.97, Math.min(1.03, tempoRatio));

    // Tempo Automation:
    // 0.0s - 5.0s (First half): incoming track smoothly ramps up to matched tempo
    incomingSource.playbackRate.setValueAtTime(1.0, now);
    incomingSource.playbackRate.linearRampToValueAtTime(tempoRatio, now + midpointSeconds);

    // 5.0s - 12.0s (Second half & post-mix): incoming track smoothly glides back to native tempo (1.0)
    incomingSource.playbackRate.linearRampToValueAtTime(1.0, now + duration + 2.0);

    /* ── EQUAL-POWER CROSSFADE VOLUME CURVE ── */
    outgoing.gainNode.gain.cancelScheduledValues(now);
    incoming.gainNode.gain.cancelScheduledValues(now);

    outgoing.gainNode.gain.setValueAtTime(1.0, now);
    incoming.gainNode.gain.setValueAtTime(0.0, now);

    const points = 100;
    const outCurve = new Float32Array(points);
    const inCurve = new Float32Array(points);

    for (let i = 0; i < points; i++) {
      const progress = i / (points - 1);
      // Constant-energy trigonometric crossfade:
      // Outgoing = cos(progress * pi / 2)
      // Incoming = sin(progress * pi / 2)
      outCurve[i] = Math.cos(progress * 0.5 * Math.PI);
      inCurve[i] = Math.sin(progress * 0.5 * Math.PI);
    }

    outgoing.gainNode.gain.setValueCurveAtTime(outCurve, now, duration);
    incoming.gainNode.gain.setValueCurveAtTime(inCurve, now, duration);

    // Start incoming source immediately on trimmed beat
    incomingSource.start(now);

    /* ── MEDIA SESSION LOCK-SCREEN SYNC AT MIDPOINT (5.0s) ── */
    if (this.midpointTimer) clearTimeout(this.midpointTimer);
    this.midpointTimer = setTimeout(() => {
      this.syncMediaSession(upcomingTrack);
      if (onMidpoint) onMidpoint();
    }, midpointSeconds * 1000);

    /* ── TRANSITION COMPLETION (10.0s) ── */
    if (this.completionTimer) clearTimeout(this.completionTimer);
    this.completionTimer = setTimeout(() => {
      this.isTransitioning = false;
      this.activeDeckId = this.activeDeckId === "A" ? "B" : "A";

      // Stop outgoing source and reset gains
      if (outgoing.sourceNode) {
        try { outgoing.sourceNode.stop(); } catch (_) {}
        outgoing.sourceNode.disconnect();
        outgoing.sourceNode = null;
      }
      outgoing.isPlaying = false;
      outgoing.gainNode.gain.setValueAtTime(0.0, ctx.currentTime);
      incoming.gainNode.gain.setValueAtTime(1.0, ctx.currentTime);

      if (onComplete) onComplete();
    }, duration * 1000);
  }

  /* ──────────────────────────────────────────────────────────────────
   * 5. MEDIA SESSION LOCK-SCREEN SYNCHRONIZATION
   * ────────────────────────────────────────────────────────────────── */

  public syncMediaSession(track: TrackData): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title,
        artist: track.artist,
        album: track.album || "Trance Sangeet (AutoMix)",
        artwork: track.artwork || [
          { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
          { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
        ]
      });
    } catch (_) {}
  }

  public abortTransition(): void {
    if (this.midpointTimer) clearTimeout(this.midpointTimer);
    if (this.completionTimer) clearTimeout(this.completionTimer);
    this.isTransitioning = false;

    const ctx = this.ctx;
    const now = ctx.currentTime;

    this.deckA.gainNode.gain.cancelScheduledValues(now);
    this.deckB.gainNode.gain.cancelScheduledValues(now);

    if (this.activeDeckId === "A") {
      this.deckA.gainNode.gain.setValueAtTime(1.0, now);
      this.deckB.gainNode.gain.setValueAtTime(0.0, now);
      if (this.deckB.sourceNode) {
        try { this.deckB.sourceNode.stop(); } catch (_) {}
        this.deckB.sourceNode = null;
      }
    } else {
      this.deckA.gainNode.gain.setValueAtTime(0.0, now);
      this.deckB.gainNode.gain.setValueAtTime(1.0, now);
      if (this.deckA.sourceNode) {
        try { this.deckA.sourceNode.stop(); } catch (_) {}
        this.deckA.sourceNode = null;
      }
    }
  }

  public getIsTransitioning(): boolean {
    return this.isTransitioning;
  }
}
