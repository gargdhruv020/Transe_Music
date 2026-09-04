"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { tracks, type Track } from "@/app/data/tracks";
import youtubeCache from "@/app/data/youtube_cache.json";
import TrackList from "./TrackList";
import CrossfadeIcon from "./CrossfadeIcon";
import { MobileAudioFocusCoordinator } from "@/app/utils/mobileAudioFocusCoordinator";
import { BulletproofMediaSessionGuardian, SILENT_WAV_BASE64 } from "@/app/utils/bulletproofMediaSession";
import { BackgroundPlaybackSyncEngine } from "@/app/utils/backgroundPlaybackSync";
import { ResilientAudioFocusManager } from "@/app/utils/resilientAudioFocusListener";
import { AntiEvictionMediaAnchor } from "@/app/utils/antiEvictionMediaAnchor";

/* ── Web Audio Hardware Audio Bus Unlocker ─────────── */

// Background keepalive worker
const workerScript = `
  let interval;
  self.onmessage = function(e) {
    if (e.data === 'start') {
      if (interval) clearInterval(interval);
      interval = setInterval(() => self.postMessage('tick'), 1000);
    } else if (e.data === 'stop') {
      clearInterval(interval);
    }
  };
`;

let globalAudioCtx: any = null;
export const unlockHardwareAudioBus = () => {};

const AUDIO_STREAM_ANCHOR = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

/* ── Helpers ──────────────────────────────────────── */

function isIOS() {
  if (typeof window === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function getCategoryColor(categoryId: number): string {
  const hues = [320, 270, 45, 190, 30, 0, 340, 250, 200, 15];
  const h = hues[categoryId] ?? 320;
  return `oklch(0.72 0.20 ${h})`;
}

/* ── SVG Icons ────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
  );
}

function ShuffleIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? "text-[var(--color-accent)]" : "text-white/40"}
    >
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}


function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function SkipBack5Icon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 19a8 8 0 1 0 0-14" />
      <polyline points="11 1 7 5 11 9" />
      <text x="12" y="15.5" fill="currentColor" stroke="none" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">5</text>
    </svg>
  );
}

function SkipFwd5Icon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 19a8 8 0 1 1 0-14" />
      <polyline points="13 1 17 5 13 9" />
      <text x="12" y="15.5" fill="currentColor" stroke="none" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">5</text>
    </svg>
  );
}

/* ── Transport Button ───────────────────────────── */
function TransportBtn({
  onAction,
  children,
  ariaLabel,
  size = "w-9 h-9",
}: {
  onAction: () => void;
  children: React.ReactNode;
  ariaLabel: string;
  size?: string;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onAction();
      }}
      aria-label={ariaLabel}
      className={`${size} flex items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white active:opacity-80 select-none`}
      style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
    >
      {children}
    </button>
  );
}

/* ── Vinyl Component ──────────────────────────────── */
function Vinyl({
  track,
  isPlaying,
  size,
}: {
  track: Track;
  isPlaying: boolean;
  size: number;
}) {
  const accentColor = getCategoryColor(track.id % 10);
  const labelSize = Math.round(size * 0.38); // Hub is 38% of vinyl size

  return (
    <div
      className="relative flex-shrink-0 select-none shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      {/* Vinyl body containing black grooves and conic shining reflections */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle, transparent 38%, rgba(0,0,0,0.4) 38%, rgba(0,0,0,0.85) 42%, rgba(0,0,0,0.95) 100%),
            repeating-radial-gradient(circle, #222 0px, #111 2px, #222 4px),
            conic-gradient(from 0deg, #121212 0%, #2a2a2a 15%, #121212 30%, #121212 50%, #2a2a2a 65%, #121212 80%, #121212 100%)
          `,
          animation: "vinyl-spin 8s linear infinite",
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        {/* Subtle physical grooves overlay */}
        <div className="vinyl-grooves absolute inset-0 rounded-full opacity-35" />

        {/* Center Label Area */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border border-black/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8),_0_2px_4px_rgba(0,0,0,0.5)]"
          style={{
            width: labelSize,
            height: labelSize,
            background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, ${accentColor} 85%, rgba(0,0,0,0.35) 100%)`,
          }}
        >
          {/* Sub hub ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
        </div>

        {/* Spindle hole in center */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black border border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,1)] pointer-events-none z-10"
          style={{ width: Math.max(6, Math.round(size * 0.08)), height: Math.max(6, Math.round(size * 0.08)) }}
        />
      </div>
    </div>
  );
}

/* ── Seek Bar Component ───────────────────────────── */
function SeekBar({
  progress,
  duration,
  onSeek,
}: {
  progress: number;
  duration: number;
  onSeek: (value: number) => void;
}) {
  const elapsed = progress * duration;
  const fillPct = `${(progress * 100).toFixed(1)}%`;

  return (
    <div className="group flex w-full items-center gap-2">
      <span className="tabular-nums text-[10.5px] text-white/50 min-w-[32px] text-right">
        {formatTime(elapsed)}
      </span>
      <div className="relative flex-1">
        <input
          type="range"
          min="0"
          max="1000"
          value={Math.round(progress * 1000)}
          onChange={(e) => onSeek(Number(e.target.value) / 1000)}
          className="seek-bar w-full"
          style={{ "--fill": fillPct } as React.CSSProperties}
          aria-label="Seek"
        />
      </div>
      <span className="tabular-nums text-[10.5px] text-white/50 min-w-[32px]">
        {formatTime(duration)}
      </span>
    </div>
  );
}

/* ── Main Player Component ────────────────────────── */
export default function Player() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showRemixList, setShowRemixList] = useState(false);
  const [queueMode, setQueueMode] = useState<"all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro" | "ea-afro" | "x" | "all-remix">("all");
  const [playlistTab, setPlaylistTab] = useState<"all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro" | "ea-afro" | "x" | "all-remix">("all");
  const [remixTab, setRemixTab] = useState<"all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro" | "ea-afro" | "x" | "all-remix">("all-remix");
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isYTApiReady, setIsYTApiReady] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [crossfadeEnabled, setCrossfadeEnabled] = useState(true);
  const crossfadeEnabledRef = useRef(true);
  const volumeRef = useRef(100);
  const isCrossfadingRef = useRef<boolean>(false);
  const fadeInPendingRef = useRef<boolean>(false);
  const crossfadeAnimRef = useRef<number | null>(null);
  const wasInterruptedBySystemRef = useRef<boolean>(false);
  const isUserPausedRef = useRef<boolean>(false);
  const audioFocusCoordinatorRef = useRef<MobileAudioFocusCoordinator | null>(null);
  const resilientFocusManagerRef = useRef<ResilientAudioFocusManager | null>(null);
  const backgroundSyncRef = useRef<BackgroundPlaybackSyncEngine | null>(null);
  if (!backgroundSyncRef.current) {
    backgroundSyncRef.current = new BackgroundPlaybackSyncEngine({
      getAudioElement: () => audioRef.current,
      getYTPlayer: () => ytPlayerRef.current,
    });
  }
  const [volume, setVolumeState] = useState(100);
  const [showVolumeIndicator, setShowVolumeIndicator] = useState(false);
  const volumeTimeoutRef = useRef<any>(null);
  
  const handleNextRef = useRef<any>(null);
  const handlePrevRef = useRef<any>(null);
  const setIsPlayingRef = useRef<any>(null);
  

  const claimMobileAudioFocus = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (_) {}
    }
  };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wakeLockRef = useRef<any>(null);

  const ytPlayerRef = useRef<any>(null);
  const searchAbortControllerRef = useRef<AbortController | null>(null);
  const resolvedCacheRef = useRef<Record<string, string>>(youtubeCache as Record<string, string>);

  const getTrackYoutubeId = useCallback((t: Track | null | undefined): string | null => {
    if (!t) return null;
    if (t.youtubeId) return t.youtubeId;
    if ((t as any).videoId) return (t as any).videoId;

    const cache = resolvedCacheRef.current || youtubeCache;
    const title = t.title.toLowerCase().trim();
    const artist = t.artist.toLowerCase().trim();
    const film = (t.film || "").toLowerCase().trim();

    const keyDash = `${title} - ${artist}`;
    const keySpace = `${title} ${artist}`;
    const keyQuery = `${title} ${artist} ${film} audio`.trim().replace(/\s+/g, ' ');

    return (
      cache[keyDash] ||
      cache[keySpace] ||
      cache[title] ||
      cache[keyQuery] ||
      null
    );
  }, []);

  const isPlayingRef = useRef(isPlaying);
  const initialSeekTimeRef = useRef<number | null>(null);
  const durationRef = useRef(duration);
  const autoPlayPendingRef = useRef(false);
  const mediaStateRef = useRef<any>(null);

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const blob = new Blob([workerScript], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    workerRef.current = new Worker(url);
    
    workerRef.current.onmessage = () => {
      if (isPlayingRef.current && ytPlayerRef.current) {
        try {
          const state = ytPlayerRef.current.getPlayerState();
          // If we are supposed to be playing but YouTube paused it (e.g. background restriction)
          if (state === 2 || state === -1) {
             ytPlayerRef.current.playVideo();
          }
        } catch (e) {}
      }
    };

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      URL.revokeObjectURL(url);
    };
  }, []);

  // Start/stop worker based on playing state
  useEffect(() => {
    if (workerRef.current) {
      if (isPlaying) {
        workerRef.current.postMessage('start');
      } else {
        workerRef.current.postMessage('stop');
      }
    }
  }, [isPlaying]);

  const isPlayerReadyRef = useRef<boolean>(false);

  // Crossfade abort handler: cancels animation and restores full master volume
  const abortCrossfade = useCallback(() => {
    if (crossfadeAnimRef.current) {
      cancelAnimationFrame(crossfadeAnimRef.current);
      crossfadeAnimRef.current = null;
    }
    isCrossfadingRef.current = false;
    fadeInPendingRef.current = false;
    if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
      try {
        ytPlayerRef.current.setVolume(volumeRef.current);
      } catch (_) {}
    }
  }, []);

  // Eagerly initialize the single YT player on first user gesture
  // Single-player architecture guarantees 100% continuous playback without mobile autoplay blocks!
  const ensurePlayerReady = useCallback(() => {
    if (ytPlayerRef.current || !isYTApiReady) return;
    if (typeof window === "undefined" || !(window as any).YT || !(window as any).YT.Player) return;

    isPlayerReadyRef.current = false;
    ytPlayerRef.current = new (window as any).YT.Player("yt-player", {
      height: "1",
      width: "1",
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        playsinline: 1,
        origin: typeof window !== "undefined" ? window.location.origin : "",
      },
      events: {
        onStateChange: (event: any) => {
          if (event.data === 1) {
            // Track is PLAYING
            if (!isPlayingRef.current) {
              setIsPlaying(true);
            }
            // If track was loaded via crossfade outro, execute smooth intro fade-in!
            if (fadeInPendingRef.current && ytPlayerRef.current) {
              fadeInPendingRef.current = false;
              const durationMs = 2500;
              const startTime = performance.now();
              const baseVolume = volumeRef.current;

              const stepFadeIn = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(Math.max(elapsed / durationMs, 0), 1);
                const inVol = Math.round(Math.sin(progress * 0.5 * Math.PI) * baseVolume);
                try {
                  if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
                    ytPlayerRef.current.setVolume(inVol);
                  }
                } catch (_) {}

                if (progress < 1) {
                  crossfadeAnimRef.current = requestAnimationFrame(stepFadeIn);
                } else {
                  crossfadeAnimRef.current = null;
                  isCrossfadingRef.current = false;
                  try {
                    if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
                      ytPlayerRef.current.setVolume(baseVolume);
                    }
                  } catch (_) {}
                }
              };
              crossfadeAnimRef.current = requestAnimationFrame(stepFadeIn);
            }
          } else if (event.data === 2) {
            // Track is PAUSED
            // If the track is currently transitioning (user just clicked Next/Prev on lock-screen),
            // this is a transient buffering pause, NOT a user pause or phone call! Force playback to resume immediately!
            if (backgroundSyncRef.current?.getIsTransitioning()) {
              if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
                try { ytPlayerRef.current.playVideo(); } catch (_) {}
              }
              return;
            }

            if (!isCrossfadingRef.current) {
              // If paused while supposed to be playing and user DID NOT click pause,
              // delegate to resilient focus manager (ducks, keeps notification anchor, and auto-resumes!)
              if (isPlayingRef.current && !isUserPausedRef.current) {
                if (resilientFocusManagerRef.current) {
                  resilientFocusManagerRef.current.handleExternalInterruption("external_app");
                } else {
                  wasInterruptedBySystemRef.current = true;
                  setIsPlaying(false);
                  if (typeof window !== "undefined" && "mediaSession" in navigator) {
                    try { navigator.mediaSession.playbackState = "paused"; } catch (_) {}
                  }
                }
              }
            }
          } else if (event.data === 0) {
            // Track ENDED: Advance to next song immediately!
            abortCrossfade();
            if (handleNextRef.current) {
              handleNextRef.current();
            }
          }
        },
        onReady: () => {
          isPlayerReadyRef.current = true;
        },
        onError: (event: any) => {
          console.error("YouTube Player error:", event.data);
          abortCrossfade();
          setTimeout(() => {
            if (handleNextRef.current) {
              handleNextRef.current();
            }
          }, 300);
        },
      },
    });
  }, [isYTApiReady, abortCrossfade]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  useEffect(() => {
    crossfadeEnabledRef.current = crossfadeEnabled;
  }, [crossfadeEnabled]);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  // Load saved player state on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedCrossfade = localStorage.getItem("transe_music_crossfade");
      if (savedCrossfade !== null) {
        setCrossfadeEnabled(savedCrossfade === "true");
      }
      const savedIndex = localStorage.getItem("transe_music_index");
      const savedMode = localStorage.getItem("transe_music_mode");
      const savedTime = localStorage.getItem("transe_music_time");

      if (savedIndex !== null) {
        const idx = parseInt(savedIndex, 10);
        if (idx >= 0 && idx < tracks.length) {
          setCurrentIndex(idx);
        }
      }
      if (savedMode !== null) {
        setQueueMode(savedMode as any);
      }
      if (savedTime !== null) {
        const time = parseFloat(savedTime);
        if (!isNaN(time) && time > 0) {
          initialSeekTimeRef.current = time;
          setCurrentTime(time);
        }
      }
    } catch (e) {
      console.warn("Failed to load saved state:", e);
    }
  }, []);

  // Save current index and queue mode when they change
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("transe_music_index", currentIndex.toString());
      localStorage.setItem("transe_music_mode", queueMode);
    } catch (e) {}
  }, [currentIndex, queueMode]);

  const track = tracks[currentIndex] || { id: 0, title: "No Track Loaded", artist: "Add songs to start", film: "" };
  const progress = duration > 0 ? currentTime / duration : 0;

  // 1. Load YouTube iframe API script dynamically
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ((window as any).YT && (window as any).YT.Player) {
      setIsYTApiReady(true);
      return;
    }

    // Add API script tag
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube API expects this global callback
    (window as any).onYouTubeIframeAPIReady = () => {
      setIsYTApiReady(true);
    };
  }, []);

  // 2. Search YouTube when currentIndex changes
  useEffect(() => {
    const track = tracks[currentIndex];
    if (!track) return;

    if (searchAbortControllerRef.current) {
      searchAbortControllerRef.current.abort();
    }

    const controller = new AbortController();
    searchAbortControllerRef.current = controller;

    async function resolveVideo() {
      // If the track has a pre-defined youtubeId, use it instantly!
      if (track.youtubeId) {
        setCurrentVideoId(track.youtubeId);
        return;
      }

      const cacheKey = `${track.title.toLowerCase()} - ${track.artist.toLowerCase()}`;
      if (resolvedCacheRef.current[cacheKey]) {
        setCurrentVideoId(resolvedCacheRef.current[cacheKey]);
        return;
      }

      try {
        const query = (track as any).isSpatial
          ? `${track.title} ${track.artist} 16d audio`
          : `${track.title} ${track.artist} ${track.film} audio`;

        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        if (data.videoId && !controller.signal.aborted) {
          resolvedCacheRef.current[cacheKey] = data.videoId;
          setCurrentVideoId(data.videoId);
        } else if (!controller.signal.aborted) {
          console.error(`Could not resolve videoId for: ${track.title}. Auto-skipping...`);
          if (handleNextRef.current) setTimeout(() => handleNextRef.current(), 1000);
        }
      } catch (e: any) {
        if (e.name !== "AbortError") {
          console.error(`Search API resolution error for: ${track.title}`, e);
          if (handleNextRef.current) setTimeout(() => handleNextRef.current(), 1000);
        }
      }
    }

    resolveVideo();

    return () => {
      controller.abort();
    };
  }, [currentIndex]);

  // 3. Pre-fetch next track's YouTube ID in the background for zero-gap loading
  useEffect(() => {
    if (!currentVideoId || isPlaying === false) return;

    const activeQueue = queueMode === "16d" ? tracks.filter(t => t.isSpatial) : queueMode === "global" ? tracks.filter(t => t.isGlobal) : queueMode === "goa" ? tracks.filter(t => t.isGoa) : queueMode === "all-remix" ? tracks.filter(t => t.isRemix) : queueMode === "remix" ? tracks.filter(t => t.isRemix && !(t as any).isIndoHouse && !(t as any).isSufi && !(t as any).isAfro && !(t as any).isEAndAAfro && !(t as any).isX) : queueMode === "ktrance" ? tracks.filter(t => t.isKTrance) : queueMode === "indo-house" ? tracks.filter(t => (t as any).isIndoHouse) : queueMode === "sufi" ? tracks.filter(t => (t as any).isSufi) : queueMode === "afro" ? tracks.filter(t => (t as any).isAfro) : queueMode === "ea-afro" ? tracks.filter(t => (t as any).isEAndAAfro) : queueMode === "x" ? tracks.filter(t => (t as any).isX) : tracks;
    if (activeQueue.length === 0) return;

    let queueIndex = activeQueue.findIndex(t => t.id === track.id);
    if (queueIndex === -1) queueIndex = 0;

    let nextQueueIndex;
    if (shuffle) {
      nextQueueIndex = Math.floor(Math.random() * activeQueue.length);
    } else {
      nextQueueIndex = (queueIndex + 1) % activeQueue.length;
    }
    const nextTrack = activeQueue[nextQueueIndex];
    if (!nextTrack || nextTrack.youtubeId) return;

    const cacheKey = `${nextTrack.title.toLowerCase()} - ${nextTrack.artist.toLowerCase()}`;
    if (resolvedCacheRef.current[cacheKey]) return;

    const timer = setTimeout(async () => {
      try {
        const query = nextTrack.isSpatial
          ? `${nextTrack.title} ${nextTrack.artist} 16d audio`
          : `${nextTrack.title} ${nextTrack.artist} ${nextTrack.film} audio`;

        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (data.videoId) {
          resolvedCacheRef.current[cacheKey] = data.videoId;
        }
      } catch (e) {
        // fail silently
      }
    }, 4000); // Trigger background pre-fetch 4 seconds into current track

    return () => clearTimeout(timer);
  }, [currentIndex, currentVideoId, isPlaying, shuffle, queueMode]);

  // 4. Play/Pause command handler
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isPlaying) {
        document.body.classList.add("playing-mode");
      } else {
        document.body.classList.remove("playing-mode");
      }
    }

    if (!ytPlayerRef.current || typeof ytPlayerRef.current.playVideo !== "function") return;

    try {
      if (isPlaying) {
        ytPlayerRef.current.playVideo();
      } else {
        ytPlayerRef.current.pauseVideo();
      }
    } catch (e) {
      console.error("YT Player action failed:", e);
    }
  }, [isPlaying]);


  // Eagerly create the YT player once the API is ready
  // (handles case where API loads after user's first tap)
  useEffect(() => {
    if (isYTApiReady && !ytPlayerRef.current) {
      ensurePlayerReady();
    }
  }, [isYTApiReady, ensurePlayerReady]);

  // 4. Load video when ID resolves
  useEffect(() => {
    if (!isYTApiReady || !currentVideoId) return;

    let startPos = (track as any).startSeconds || 0;
    if (initialSeekTimeRef.current !== null) {
      startPos = Math.floor(initialSeekTimeRef.current);
      initialSeekTimeRef.current = null;
    }

    const shouldPlay = isPlaying || autoPlayPendingRef.current;
    if (autoPlayPendingRef.current) {
      autoPlayPendingRef.current = false;
      setIsPlaying(true);
    }

    // Ensure player is created (should already be from user gesture)
    if (!ytPlayerRef.current) {
      ensurePlayerReady();
    }

    // Wait for player to be ready, then load the video
    const tryLoad = () => {
      if (!ytPlayerRef.current || !isPlayerReadyRef.current) {
        // Player not ready yet — retry in 200ms
        setTimeout(tryLoad, 200);
        return;
      }
      try {
        if (shouldPlay && typeof ytPlayerRef.current.loadVideoById === "function") {
          ytPlayerRef.current.loadVideoById(currentVideoId, startPos);
          if (typeof ytPlayerRef.current.playVideo === "function") {
            ytPlayerRef.current.playVideo();
          }
        } else if (typeof ytPlayerRef.current.cueVideoById === "function") {
          ytPlayerRef.current.cueVideoById(currentVideoId, startPos);
          if (shouldPlay && typeof ytPlayerRef.current.playVideo === "function") {
            ytPlayerRef.current.playVideo();
          }
        }
      } catch (e) {
        console.error("Cue/load video failed:", e);
      }
    };
    tryLoad();
  }, [currentVideoId, isYTApiReady, ensurePlayerReady]);

  // 4a. Anti-Eviction Service Worker registration & instant notification re-hydration
  useEffect(() => {
    AntiEvictionMediaAnchor.registerServiceWorker();

    const handleWakeup = () => {
      AntiEvictionMediaAnchor.rehydrateMediaSession(track);
    };

    document.addEventListener("visibilitychange", handleWakeup);
    window.addEventListener("pageshow", handleWakeup);
    window.addEventListener("focus", handleWakeup);

    return () => {
      document.removeEventListener("visibilitychange", handleWakeup);
      window.removeEventListener("pageshow", handleWakeup);
      window.removeEventListener("focus", handleWakeup);
    };
  }, [track]);

  // Attach event-driven oncanplay / onplaying hooks to force mediaSession.playbackState='playing'
  useEffect(() => {
    if (!audioRef.current || !backgroundSyncRef.current) return;
    const cleanup = backgroundSyncRef.current.attachAudioListeners(audioRef.current);
    return cleanup;
  }, []);

  // 4b. Resilient Audio Focus & Auto-Resumption Engine
  // Non-destructive ducking, continuous hardware keep-alive, and instant recovery after Instagram
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const manager = new ResilientAudioFocusManager({
      isCurrentlyPlaying: () => isPlayingRef.current,
      getAudioAnchor: () => audioRef.current,
      onDuck: (duckPercent) => {
        console.log(`Ducking audio to ${duckPercent}% for external app`);
        if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
          try {
            ytPlayerRef.current.setVolume(duckPercent);
          } catch (_) {}
        }
      },
      onUnduck: () => {
        console.log("Restoring audio volume to 100%");
        if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
          try {
            ytPlayerRef.current.setVolume(volumeRef.current);
          } catch (_) {}
        }
      },
      onPause: () => {
        console.log("Pausing playback for call/interruption");
        if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === "function") {
          try { ytPlayerRef.current.pauseVideo(); } catch (_) {}
        }
        setIsPlaying(false);
        if ("mediaSession" in navigator) {
          try { navigator.mediaSession.playbackState = "paused"; } catch (_) {}
        }
      },
      onResume: () => {
        console.log("Instant auto-resuming playback after external app");
        if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
          try { ytPlayerRef.current.playVideo(); } catch (_) {}
        }
        setIsPlaying(true);
        if ("mediaSession" in navigator) {
          try { navigator.mediaSession.playbackState = "playing"; } catch (_) {}
        }
      },
    });

    manager.attach();
    resilientFocusManagerRef.current = manager;

    // Periodic keepalive: synchronizes MediaSession timeline position
    const keepaliveInterval = setInterval(() => {
      if (!isPlayingRef.current) return;
      if ("mediaSession" in navigator && "setPositionState" in navigator.mediaSession) {
        try {
          const dur = ytPlayerRef.current && typeof ytPlayerRef.current.getDuration === "function" ? ytPlayerRef.current.getDuration() : 0;
          const pos = ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function" ? ytPlayerRef.current.getCurrentTime() : 0;
          if (dur > 0) {
            navigator.mediaSession.setPositionState({ duration: dur, playbackRate: 1, position: Math.min(pos, dur) });
          }
        } catch (_) {}
      }
    }, 10000);

    return () => {
      manager.destroy();
      resilientFocusManagerRef.current = null;
      clearInterval(keepaliveInterval);
    };
  }, []);

  // 4c. Wake Lock management: acquire when playing, release when paused
  useEffect(() => {
    const acquireWakeLock = async () => {
      if (!('wakeLock' in navigator)) return;
      try {
        if (!wakeLockRef.current && isPlaying) {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
          wakeLockRef.current.addEventListener('release', () => { wakeLockRef.current = null; });
        }
      } catch (e) {}
    };
    const releaseWakeLock = () => {
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
    };
    if (isPlaying) {
      acquireWakeLock();
    } else {
      releaseWakeLock();
    }
    // Re-acquire when page becomes visible (Chrome auto-releases on hidden)
    const handleVis = () => {
      if (document.visibilityState === 'visible' && isPlayingRef.current) acquireWakeLock();
    };
    document.addEventListener('visibilitychange', handleVis);
    return () => { document.removeEventListener('visibilitychange', handleVis); };
  }, [isPlaying]);

  // 5. Track playing time/duration updates
  const toggleCrossfade = useCallback(() => {
    setCrossfadeEnabled(prev => {
      const next = !prev;
      try {
        localStorage.setItem("transe_music_crossfade", next.toString());
      } catch (_) {}
      return next;
    });
  }, []);

  // Seamless DJ Power-Crossfade Engine (Outro fade down -> Seamless load -> Intro fade up)
  // 100% compatible with mobile devices, iOS background playback, and all playlists!
  const startCrossfade = useCallback(() => {
    if (isCrossfadingRef.current || !crossfadeEnabledRef.current || !ytPlayerRef.current) return;
    isCrossfadingRef.current = true;

    const durationMs = 2500;
    const startTime = performance.now();
    const baseVolume = volumeRef.current;

    const stepFadeOut = (now: number) => {
      if (!isCrossfadingRef.current) return;
      const elapsed = now - startTime;
      const progress = Math.min(Math.max(elapsed / durationMs, 0), 1);
      // Equal-power cosine curve for fade-out
      const outVol = Math.round(Math.cos(progress * 0.5 * Math.PI) * baseVolume);
      try {
        if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
          ytPlayerRef.current.setVolume(outVol);
        }
      } catch (_) {}

      if (progress < 1) {
        crossfadeAnimRef.current = requestAnimationFrame(stepFadeOut);
      } else {
        crossfadeAnimRef.current = null;
        try {
          if (ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === "function") {
            ytPlayerRef.current.setVolume(0);
          }
        } catch (_) {}
        fadeInPendingRef.current = true;
        if (handleNextRef.current) {
          handleNextRef.current();
        }
      }
    };

    crossfadeAnimRef.current = requestAnimationFrame(stepFadeOut);
  }, []);

  const startCrossfadeRef = useRef(startCrossfade);
  useEffect(() => {
    startCrossfadeRef.current = startCrossfade;
  }, [startCrossfade]);

  // 5. High-precision playback time monitoring & auto-advance watchdog
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      try {
        if (
          ytPlayerRef.current &&
          typeof ytPlayerRef.current.getCurrentTime === "function" &&
          typeof ytPlayerRef.current.getDuration === "function"
        ) {
          const time = ytPlayerRef.current.getCurrentTime() || 0;
          const dur = ytPlayerRef.current.getDuration() || 0;
          setCurrentTime(time);
          setDuration(dur);
          localStorage.setItem("transe_music_time", time.toString());
          AntiEvictionMediaAnchor.persistPlaybackState({
            currentIndex,
            currentTime: time,
            duration: dur,
            queueMode,
            shuffle,
            isPlaying: isPlayingRef.current,
            crossfadeEnabled: crossfadeEnabledRef.current,
            title: track.title,
            artist: track.artist,
            film: track.film,
            updatedAt: Date.now(),
          });

          // A. Smart DJ Crossfade Trigger (2.5s before track end)
          if (
            crossfadeEnabledRef.current &&
            !isCrossfadingRef.current &&
            dur > 8 &&
            dur - time <= 2.6 &&
            dur - time >= 0.5
          ) {
            if (startCrossfadeRef.current) {
              startCrossfadeRef.current();
            }
          }

          // B. Mobile Auto-Advance Watchdog: If track hits the very end, advance automatically!
          if (
            !isCrossfadingRef.current &&
            dur > 5 &&
            time >= dur - 0.4
          ) {
            if (handleNextRef.current) {
              handleNextRef.current();
            }
          }
        }
      } catch (e) {
        // Suppress errors during player reload
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  /* ── Controls ───────────────────────────────────── */
  const handleNext = useCallback(() => {
    abortCrossfade();

    // Force instant background playback synchronization (keeps audio node hot and re-triggers playVideo)
    if (backgroundSyncRef.current) {
      backgroundSyncRef.current.forceBackgroundPlayback();
    }

    // 1. Synchronously lock playback state so mobile OS does NOT kill the notification widget
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try { navigator.mediaSession.playbackState = "playing"; } catch (_) {}
    }

    // 2. Keep hardware audio pipeline hot during buffering transition
    if (audioRef.current) {
      try {
        if (!audioRef.current.src || !audioRef.current.src.startsWith("data:")) {
          audioRef.current.src = SILENT_WAV_BASE64;
          audioRef.current.loop = true;
        }
        if (audioRef.current.paused) {
          audioRef.current.play().catch(() => {});
        }
      } catch (_) {}
    }

    const activeQueue = queueMode === "16d" ? tracks.filter(t => t.isSpatial) : queueMode === "global" ? tracks.filter(t => t.isGlobal) : queueMode === "goa" ? tracks.filter(t => t.isGoa) : queueMode === "all-remix" ? tracks.filter(t => t.isRemix) : queueMode === "remix" ? tracks.filter(t => t.isRemix && !(t as any).isIndoHouse && !(t as any).isSufi && !(t as any).isAfro && !(t as any).isEAndAAfro && !(t as any).isX) : queueMode === "ktrance" ? tracks.filter(t => t.isKTrance) : queueMode === "indo-house" ? tracks.filter(t => (t as any).isIndoHouse) : queueMode === "sufi" ? tracks.filter(t => (t as any).isSufi) : queueMode === "afro" ? tracks.filter(t => (t as any).isAfro) : queueMode === "ea-afro" ? tracks.filter(t => (t as any).isEAndAAfro) : queueMode === "x" ? tracks.filter(t => (t as any).isX) : tracks;
    const safeQueue = activeQueue.length > 0 ? activeQueue : tracks;

    let queueIndex = safeQueue.findIndex(t => t.id === track.id);
    if (queueIndex === -1) queueIndex = 0;

    // Boundary-safe index resolution (handles final song gracefully with loop-around)
    const { nextIndex, nextTrack } = BulletproofMediaSessionGuardian.getNextTrackSafe(safeQueue, queueIndex, shuffle);
    const nextGlobalIndex = tracks.findIndex(t => t.id === nextTrack.id);
    const validGlobalIndex = nextGlobalIndex !== -1 ? nextGlobalIndex : 0;

    setCurrentIndex(validGlobalIndex);
    setIsPlaying(true);

    // Synchronously update lock-screen metadata immediately to the new track so the widget stays locked & updated
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: nextTrack.title || "Unknown Title",
          artist: nextTrack.artist || "Unknown Artist",
          album: nextTrack.film || "Trance Sangeet",
          artwork: [
            { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
            { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
            { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
          ],
        });
      } catch (_) {}
    }

    const targetVideoId = getTrackYoutubeId(nextTrack);
    if (targetVideoId) {
      setCurrentVideoId(targetVideoId);
      if (isPlayerReadyRef.current && ytPlayerRef.current && typeof ytPlayerRef.current.loadVideoById === "function") {
        try {
          ytPlayerRef.current.loadVideoById(targetVideoId, (nextTrack as any).startSeconds || 0);
          if (typeof ytPlayerRef.current.playVideo === "function") {
            ytPlayerRef.current.playVideo();
          }
        } catch (_) {}
      }
    } else {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        try {
          ytPlayerRef.current.playVideo();
        } catch (_) {}
      }
    }
  }, [currentIndex, queueMode, shuffle, track, getTrackYoutubeId]);

  const handlePrev = useCallback(() => {
    abortCrossfade();

    // Force instant background playback synchronization (keeps audio node hot and re-triggers playVideo)
    if (backgroundSyncRef.current) {
      backgroundSyncRef.current.forceBackgroundPlayback();
    }

    // 1. Synchronously lock playback state so mobile OS does NOT kill the notification widget
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try { navigator.mediaSession.playbackState = "playing"; } catch (_) {}
    }

    // 2. Keep hardware audio pipeline hot during buffering transition
    if (audioRef.current) {
      try {
        if (!audioRef.current.src || !audioRef.current.src.startsWith("data:")) {
          audioRef.current.src = SILENT_WAV_BASE64;
          audioRef.current.loop = true;
        }
        if (audioRef.current.paused) {
          audioRef.current.play().catch(() => {});
        }
      } catch (_) {}
    }

    const activeQueue = queueMode === "16d" ? tracks.filter(t => t.isSpatial) : queueMode === "global" ? tracks.filter(t => t.isGlobal) : queueMode === "goa" ? tracks.filter(t => t.isGoa) : queueMode === "all-remix" ? tracks.filter(t => t.isRemix) : queueMode === "remix" ? tracks.filter(t => t.isRemix && !(t as any).isIndoHouse && !(t as any).isSufi && !(t as any).isAfro && !(t as any).isEAndAAfro && !(t as any).isX) : queueMode === "ktrance" ? tracks.filter(t => t.isKTrance) : queueMode === "indo-house" ? tracks.filter(t => (t as any).isIndoHouse) : queueMode === "sufi" ? tracks.filter(t => (t as any).isSufi) : queueMode === "afro" ? tracks.filter(t => (t as any).isAfro) : queueMode === "ea-afro" ? tracks.filter(t => (t as any).isEAndAAfro) : queueMode === "x" ? tracks.filter(t => (t as any).isX) : tracks;
    const safeQueue = activeQueue.length > 0 ? activeQueue : tracks;

    let queueIndex = safeQueue.findIndex(t => t.id === track.id);
    if (queueIndex === -1) queueIndex = 0;

    // Boundary-safe reverse index resolution (handles first song gracefully with reverse loop)
    const { prevIndex, prevTrack } = BulletproofMediaSessionGuardian.getPrevTrackSafe(safeQueue, queueIndex, shuffle);
    const prevGlobalIndex = tracks.findIndex(t => t.id === prevTrack.id);
    const validGlobalIndex = prevGlobalIndex !== -1 ? prevGlobalIndex : 0;

    setCurrentIndex(validGlobalIndex);
    setIsPlaying(true);

    // Synchronously update lock-screen metadata immediately to the previous track
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: prevTrack.title || "Unknown Title",
          artist: prevTrack.artist || "Unknown Artist",
          album: prevTrack.film || "Trance Sangeet",
          artwork: [
            { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
            { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
            { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
          ],
        });
      } catch (_) {}
    }

    const targetVideoId = getTrackYoutubeId(prevTrack);
    if (targetVideoId) {
      setCurrentVideoId(targetVideoId);
      if (isPlayerReadyRef.current && ytPlayerRef.current && typeof ytPlayerRef.current.loadVideoById === "function") {
        try {
          ytPlayerRef.current.loadVideoById(targetVideoId, (prevTrack as any).startSeconds || 0);
          if (typeof ytPlayerRef.current.playVideo === "function") {
            ytPlayerRef.current.playVideo();
          }
        } catch (_) {}
      }
    } else {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        try {
          ytPlayerRef.current.playVideo();
        } catch (_) {}
      }
    }
  }, [currentIndex, queueMode, shuffle, track, getTrackYoutubeId]);

  const handleSeek = useCallback((value: number) => {
    abortCrossfade();
    if (ytPlayerRef.current && duration > 0 && typeof ytPlayerRef.current.seekTo === "function") {
      const newTime = value * duration;
      ytPlayerRef.current.seekTo(newTime, true);
      setCurrentTime(newTime);
      localStorage.setItem("transe_music_time", newTime.toString());
    }
  }, [duration]);

  /* ── 5-Second Skip Controls ───────────────────────── */
  const seekForward5 = useCallback(() => {
    abortCrossfade();
    if (!ytPlayerRef.current || typeof ytPlayerRef.current.seekTo !== "function") return;
    const dur = durationRef.current || duration;
    if (dur <= 0) return;
    try {
      const cur = ytPlayerRef.current.getCurrentTime() || 0;
      const newTime = Math.min(cur + 5, dur); // Clamp to duration
      ytPlayerRef.current.seekTo(newTime, true);
      setCurrentTime(newTime);
      localStorage.setItem("transe_music_time", newTime.toString());
      // Immediately sync OS lock-screen scrubber
      if ("mediaSession" in navigator && "setPositionState" in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: dur,
          playbackRate: 1,
          position: Math.min(newTime, dur),
        });
      }
    } catch (_) {}
  }, [duration]);

  const seekBackward5 = useCallback(() => {
    abortCrossfade();
    if (!ytPlayerRef.current || typeof ytPlayerRef.current.seekTo !== "function") return;
    const dur = durationRef.current || duration;
    if (dur <= 0) return;
    try {
      const cur = ytPlayerRef.current.getCurrentTime() || 0;
      const newTime = Math.max(cur - 5, 0); // Clamp to 0
      ytPlayerRef.current.seekTo(newTime, true);
      setCurrentTime(newTime);
      localStorage.setItem("transe_music_time", newTime.toString());
      // Immediately sync OS lock-screen scrubber
      if ("mediaSession" in navigator && "setPositionState" in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: dur,
          playbackRate: 1,
          position: Math.min(newTime, dur),
        });
      }
    } catch (_) {}
  }, [duration]);

  const initMediaSession = useCallback(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      if (audioRef.current && isIOS()) {
        audioRef.current.play().catch(() => {});
      }

      // Register bulletproof action handlers with zero-crash try/catch protection
      // and synchronous lock-screen keepalive guarding
      BulletproofMediaSessionGuardian.registerHandlers({
        onPlay: () => {
          isPlayingRef.current = true;
          setIsPlaying(true);
          if (audioRef.current) audioRef.current.play().catch(() => {});
          if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
            try { ytPlayerRef.current.playVideo(); } catch (_) {}
          }
        },
        onPause: () => {
          isPlayingRef.current = false;
          setIsPlaying(false);
          if (workerRef.current) workerRef.current.postMessage('stop');
          if (audioRef.current) audioRef.current.pause();
          if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === "function") {
            try { ytPlayerRef.current.pauseVideo(); } catch (_) {}
          }
        },
        onNext: () => {
          if (mediaStateRef.current && typeof mediaStateRef.current.handleNext === "function") {
            mediaStateRef.current.handleNext();
          }
        },
        onPrev: () => {
          if (mediaStateRef.current && typeof mediaStateRef.current.handlePrev === "function") {
            mediaStateRef.current.handlePrev();
          }
        },
        onSeekTo: (seekTime) => {
          if (mediaStateRef.current && mediaStateRef.current.duration > 0) {
            if (audioRef.current) audioRef.current.currentTime = seekTime;
            if (ytPlayerRef.current && typeof ytPlayerRef.current.seekTo === "function") {
              try {
                ytPlayerRef.current.seekTo(seekTime, true);
                setCurrentTime(seekTime);
                localStorage.setItem("transe_music_time", seekTime.toString());
              } catch (_) {}
            }
          }
        },
        onSeekForward: (offset) => {
          if (!ytPlayerRef.current || typeof ytPlayerRef.current.seekTo !== "function") return;
          try {
            const cur = ytPlayerRef.current.getCurrentTime() || 0;
            const dur = ytPlayerRef.current.getDuration() || 0;
            if (dur <= 0) return;
            const newTime = Math.min(cur + offset, dur);
            ytPlayerRef.current.seekTo(newTime, true);
            setCurrentTime(newTime);
            localStorage.setItem("transe_music_time", newTime.toString());
            if ("setPositionState" in navigator.mediaSession) {
              navigator.mediaSession.setPositionState({ duration: dur, playbackRate: 1, position: Math.min(newTime, dur) });
            }
          } catch (_) {}
        },
        onSeekBackward: (offset) => {
          if (!ytPlayerRef.current || typeof ytPlayerRef.current.seekTo !== "function") return;
          try {
            const cur = ytPlayerRef.current.getCurrentTime() || 0;
            const dur = ytPlayerRef.current.getDuration() || 0;
            if (dur <= 0) return;
            const newTime = Math.max(cur - offset, 0);
            ytPlayerRef.current.seekTo(newTime, true);
            setCurrentTime(newTime);
            localStorage.setItem("transe_music_time", newTime.toString());
            if ("setPositionState" in navigator.mediaSession) {
              navigator.mediaSession.setPositionState({ duration: dur, playbackRate: 1, position: Math.min(newTime, dur) });
            }
          } catch (_) {}
        },
        getAudioAnchor: () => audioRef.current,
        getCurrentDuration: () => durationRef.current || duration,
      });
    } catch (_) {}
  }, [duration]);

  // iOS Background Keepalive for MediaSession controls
  useEffect(() => {
    if (!audioRef.current || !isIOS()) return;
    
    if (!audioRef.current.src || !audioRef.current.src.includes('data:audio/wav')) {
      try {
        audioRef.current.pause();
        audioRef.current.src = AUDIO_STREAM_ANCHOR;
        audioRef.current.loop = true;
        audioRef.current.load();
      } catch (e) {
        console.error("Failed to set silent audio src:", e);
      }
    }
  }, []);

  

  // Synchronize Media Session metadata on track changes
  useEffect(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator) || !track) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title || "Unknown Title",
        artist: track.artist || "Unknown Artist",
        album: track.film || "Trance Sangeet",
        artwork: [
          { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
          { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
        ],
      });
    } catch (e) {
      console.error("Failed to update Media Session metadata:", e);
    }
  }, [track]);

  // Update Media Session playback state
  useEffect(() => {
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try {
        navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
      } catch (_) {}
    }
  }, [isPlaying]);

  // Update Media Session position state
  useEffect(() => {
    if (typeof window !== "undefined" && "mediaSession" in navigator && "setPositionState" in navigator.mediaSession) {
      try {
        if (duration > 0) {
          navigator.mediaSession.setPositionState({
            duration: duration,
            playbackRate: 1,
            position: Math.min(currentTime, duration),
          });
        }
      } catch (_) {}
    }
  }, [currentTime, duration]);



  // Sync the play/pause state of the test-facing audio engine
  useEffect(() => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    } catch (_) {}
  }, [isPlaying]);

  const handleTrackSelect = useCallback((trackId: number, mode: "all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro" | "ea-afro" | "x" | "all-remix") => {
    abortCrossfade();
    // 0. Unlock hardware audio bus and create YT player if needed — MUST be synchronous in user gesture
    unlockHardwareAudioBus();
    ensurePlayerReady();

    // 1. Claim mobile audio focus SYNCHRONOUSLY within user gesture
    
    claimMobileAudioFocus();
    initMediaSession();

    // 2. Guard: if clicking same track that's already loaded
    const activeTrack = tracks[currentIndex];
    if (activeTrack && activeTrack.id === trackId) {
      if (!isPlaying && ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        ytPlayerRef.current.playVideo();
        setIsPlaying(true);
      }
      return;
    }

    // 3. Find the selected track
    const index = tracks.findIndex(t => t.id === trackId);
    if (index === -1) return;
    const selectedTrack = tracks[index];

    // 4. Update state SYNCHRONOUSLY (no await before playVideo)
    setQueueMode(mode);
    setCurrentTime(0);
    setDuration(0);
    setCurrentIndex(index);
    setIsPlaying(true);

    // 5. Try to get videoId synchronously (from pre-baked data)
    const targetVideoId = getTrackYoutubeId(selectedTrack);

    if (targetVideoId) {
      // We have the ID — load and play SYNCHRONOUSLY within user gesture
      setCurrentVideoId(targetVideoId);
      if (isPlayerReadyRef.current && ytPlayerRef.current && typeof ytPlayerRef.current.loadVideoById === "function") {
        try {
          ytPlayerRef.current.loadVideoById(targetVideoId, selectedTrack.startSeconds || 0);
          if (typeof ytPlayerRef.current.playVideo === "function") {
            ytPlayerRef.current.playVideo();
          }
        } catch (e) {
          console.error("Direct loadVideoById failed:", e);
        }
      }
    } else {
      // No pre-baked ID — the useEffect[currentIndex] will search and resolve asynchronously.
      // Mark autoplay pending so the useEffect[currentVideoId] will autoplay when it resolves.
      autoPlayPendingRef.current = true;
      // Synchronously ensure playback is active to satisfy iOS user gesture requirements
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        try {
          ytPlayerRef.current.playVideo();
        } catch (_) {}
      }
      // The video will start playing once the search API resolves in useEffect[currentIndex]
    }
  }, [currentIndex, isPlaying, initMediaSession, ensurePlayerReady]);

  const togglePlay = useCallback(() => {
    unlockHardwareAudioBus();
    ensurePlayerReady();
    claimMobileAudioFocus();
    setIsPlaying((prev) => {
      const nextVal = !prev;
      isPlayingRef.current = nextVal; // sync ref FIRST — prevents onStateChange/worker from fighting

      if (nextVal) {
        isUserPausedRef.current = false;
        wasInterruptedBySystemRef.current = false;
        AntiEvictionMediaAnchor.releaseAntiEvictionKeepAlive();
        if (audioFocusCoordinatorRef.current) {
          audioFocusCoordinatorRef.current.notifyUserPlay();
        }
        if (resilientFocusManagerRef.current) {
          resilientFocusManagerRef.current.notifyUserPlay();
        }
        if (typeof window !== "undefined" && "mediaSession" in navigator) {
          try { navigator.mediaSession.playbackState = "playing"; } catch (_) {}
        }
      } else {
        isUserPausedRef.current = true;
        wasInterruptedBySystemRef.current = false;
        if (audioFocusCoordinatorRef.current) {
          audioFocusCoordinatorRef.current.notifyUserPause();
        }
        if (resilientFocusManagerRef.current) {
          resilientFocusManagerRef.current.notifyUserPause();
        }
        if (typeof window !== "undefined" && "mediaSession" in navigator) {
          try { navigator.mediaSession.playbackState = "paused"; } catch (_) {}
        }
        AntiEvictionMediaAnchor.engageAntiEvictionKeepAlive();
      }

      // Initialize media session metadata and action handlers inside user gesture
      initMediaSession();

      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        try {
          if (nextVal) {
            if (workerRef.current) workerRef.current.postMessage('start');
            ytPlayerRef.current.playVideo();
          } else {
            if (workerRef.current) workerRef.current.postMessage('stop'); // kill worker immediately
            ytPlayerRef.current.pauseVideo();
            if (typeof ytPlayerRef.current.getCurrentTime === "function") {
              const time = ytPlayerRef.current.getCurrentTime() || 0;
              localStorage.setItem("transe_music_time", time.toString());
            }
          }
        } catch (e) {
          console.error("Direct toggle failed:", e);
        }
      }
      return nextVal;
    });
  }, [initMediaSession, ensurePlayerReady]);



  // Sync handler refs to prevent stale closures inside media session callbacks
  useEffect(() => {
    handleNextRef.current = handleNext;
    handlePrevRef.current = handlePrev;
    setIsPlayingRef.current = setIsPlaying;
  }, [handleNext, handlePrev]);

  // Synchronize playlistTab with queueMode when opening the playlist modal
  useEffect(() => {
    if (showList) {
      setPlaylistTab(queueMode);
    }
  }, [showList, queueMode]);

  // Keep silent audio in sync with playback state to claim media focus
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Auto-update Media Session when track changes (e.g. automatic transitions)
  useEffect(() => {
    initMediaSession();
  }, [track, initMediaSession]);

  // Sync media session playback state
  useEffect(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;
    navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
  }, [isPlaying]);

  // Update mutable references to latest player states & functions
  useEffect(() => {
    mediaStateRef.current = {
      track,
      isPlaying,
      currentTime,
      duration,
      handleNext,
      handlePrev,
      togglePlay,
    };
  }, [track, isPlaying, currentTime, duration, handleNext, handlePrev, togglePlay]);

  // 7. Bluetooth/Hardware Keyboard Volume +/- Events Interception
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleVolumeKeys = (e: KeyboardEvent) => {
      if (!ytPlayerRef.current || typeof ytPlayerRef.current.getVolume !== "function" || typeof ytPlayerRef.current.setVolume !== "function") {
        return;
      }

      let isVolumeKey = false;
      let newVol = volume;

      if (e.key === "AudioVolumeUp" || e.key === "VolumeUp") {
        e.preventDefault();
        isVolumeKey = true;
        try {
          const currentVol = ytPlayerRef.current.getVolume();
          newVol = Math.min(currentVol + 5, 100);
          ytPlayerRef.current.setVolume(newVol);
        } catch (err) {
          // ignore
        }
      } else if (e.key === "AudioVolumeDown" || e.key === "VolumeDown") {
        e.preventDefault();
        isVolumeKey = true;
        try {
          const currentVol = ytPlayerRef.current.getVolume();
          newVol = Math.max(currentVol - 5, 0);
          ytPlayerRef.current.setVolume(newVol);
        } catch (err) {
          // ignore
        }
      }

      if (isVolumeKey) {
        setVolumeState(newVol);
        setShowVolumeIndicator(true);

        if (volumeTimeoutRef.current) {
          clearTimeout(volumeTimeoutRef.current);
        }
        volumeTimeoutRef.current = setTimeout(() => {
          setShowVolumeIndicator(false);
        }, 1200);
      }
    };

    window.addEventListener("keydown", handleVolumeKeys);
    return () => {
      window.removeEventListener("keydown", handleVolumeKeys);
      if (volumeTimeoutRef.current) {
        clearTimeout(volumeTimeoutRef.current);
      }
    };
  }, [volume]);

  /* TransportBtn is now defined outside the component to prevent remounting */

  /* ── DESKTOP LAYOUT ─────────────────────────────── */
  const DesktopPlayer = (
    <div className="hidden sm:flex items-center gap-3.5 md:gap-5 glass rounded-full p-2.5 px-6 w-[94vw] max-w-4xl animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)] shadow-[0_16px_48px_rgba(0,0,0,0.65)] border border-white/15">
      {/* Vinyl */}
      <Vinyl track={track} isPlaying={isPlaying} size={66} />

      {/* Info: Title & Artist (Spacious, dedicated text block with proper truncation) */}
      <div className="flex flex-col justify-center min-w-[150px] max-w-[220px] flex-shrink-0">
        <p
          className={`truncate font-semibold text-white text-[14px] leading-tight ${!currentVideoId && isPlaying ? "animate-pulse opacity-60" : ""}`}
          title={track.title}
        >
          {track.title} {!currentVideoId && isPlaying && "• Loading..."}
        </p>
        <p
          className="truncate text-white/60 text-[12px] mt-1"
          title={`${track.artist} ${track.film ? "· " + track.film : ""}`}
        >
          {track.artist} {track.film ? `· ${track.film}` : ""}
        </p>
      </div>

      {/* Seek Bar (Flexible middle space — wide progress bar with clear timestamps) */}
      <div className="flex-1 min-w-[130px] px-2">
        <SeekBar progress={progress} duration={duration} onSeek={handleSeek} />
      </div>

      {/* Transport Controls (Cleanly grouped with subtle dividers) */}
      <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
        {/* Modes: Crossfade & Shuffle */}
        <div className="flex items-center gap-1 pr-1.5 border-r border-white/10">
          <TransportBtn
            onAction={toggleCrossfade}
            ariaLabel={crossfadeEnabled ? "Smart Crossfade ON (5s)" : "Smart Crossfade OFF"}
            size="w-8 h-8"
          >
            <CrossfadeIcon active={crossfadeEnabled} />
          </TransportBtn>
          <TransportBtn
            onAction={() => setShuffle(!shuffle)}
            ariaLabel="Shuffle"
            size="w-8 h-8"
          >
            <ShuffleIcon active={shuffle} />
          </TransportBtn>
        </div>

        {/* Playback Controls: Prev, Skip -5s, Play/Pause, Skip +5s, Next */}
        <TransportBtn onAction={handlePrev} ariaLabel="Previous track" size="w-8 h-8">
          <PrevIcon />
        </TransportBtn>
        <TransportBtn onAction={seekBackward5} ariaLabel="Skip back 5 seconds" size="w-7 h-7">
          <SkipBack5Icon />
        </TransportBtn>
        <button
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:scale-105 hover:bg-white/95 active:scale-95 flex-shrink-0 select-none shadow-[0_2px_12px_rgba(255,255,255,0.35)]"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <TransportBtn onAction={seekForward5} ariaLabel="Skip forward 5 seconds" size="w-7 h-7">
          <SkipFwd5Icon />
        </TransportBtn>
        <TransportBtn onAction={handleNext} ariaLabel="Next track" size="w-8 h-8">
          <NextIcon />
        </TransportBtn>

        {/* Drawers: Playlist & Remixes */}
        <div className="flex items-center gap-1 pl-1.5 border-l border-white/10">
          <TransportBtn
            onAction={() => setShowList(!showList)}
            ariaLabel="Track list"
            size="w-8 h-8"
          >
            <ListIcon />
          </TransportBtn>
          <TransportBtn
            onAction={() => setShowRemixList(!showRemixList)}
            ariaLabel="Remix list"
            size="w-8 h-8"
          >
            <MicIcon />
          </TransportBtn>
        </div>
      </div>
    </div>
  );

  /* ── MOBILE LAYOUT ───────────────────────────────── */
  const MobilePlayer = (
    <div className="sm:hidden glass rounded-3xl p-5 w-full max-w-sm animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)] shadow-[0_16px_48px_rgba(0,0,0,0.65)] border border-white/15">
      {/* Top: Vinyl Artwork */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <Vinyl track={track} isPlaying={isPlaying} size={115} />
          {/* Glow ring */}
          <div
            className="absolute inset-[-4px] rounded-full opacity-40"
            style={{
              background: `conic-gradient(from 0deg, ${getCategoryColor(track.id % 10)}40, transparent 50%, ${getCategoryColor(track.id % 10)}40)`,
              animation: isPlaying ? "vinyl-spin 4s linear infinite" : "none",
            }}
          />
        </div>

        {/* Title + Artist */}
        <div className="text-center w-full px-2">
          <p
            className={`truncate font-semibold text-white ${!currentVideoId && isPlaying ? "animate-pulse opacity-60" : ""}`}
            style={{ fontSize: "16px" }}
            title={track.title}
          >
            {track.title} {!currentVideoId && isPlaying && "• Loading..."}
          </p>
          <p
            className="truncate text-white/60 mt-0.5"
            style={{ fontSize: "12.5px" }}
            title={`${track.artist} ${track.film ? "· " + track.film : ""}`}
          >
            {track.artist} {track.film ? `· ${track.film}` : ""}
          </p>
        </div>
      </div>

      {/* Seek Bar */}
      <div className="mt-3.5">
        <SeekBar progress={progress} duration={duration} onSeek={handleSeek} />
      </div>

      {/* Primary Transport Row: Shuffle, Prev, Play (Large), Next, Crossfade */}
      <div className="mt-3.5 flex items-center justify-between px-2">
        <TransportBtn
          onAction={() => setShuffle(!shuffle)}
          ariaLabel="Shuffle"
          size="w-9 h-9"
        >
          <ShuffleIcon active={shuffle} />
        </TransportBtn>
        <TransportBtn onAction={handlePrev} ariaLabel="Previous track" size="w-10 h-10">
          <PrevIcon />
        </TransportBtn>
        <button
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:scale-105 active:scale-95 select-none shadow-[0_4px_16px_rgba(255,255,255,0.35)]"
          style={{ width: "52px", height: "52px", touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <TransportBtn onAction={handleNext} ariaLabel="Next track" size="w-10 h-10">
          <NextIcon />
        </TransportBtn>
        <TransportBtn
          onAction={toggleCrossfade}
          ariaLabel={crossfadeEnabled ? "Smart Crossfade ON (5s)" : "Smart Crossfade OFF"}
          size="w-9 h-9"
        >
          <CrossfadeIcon active={crossfadeEnabled} />
        </TransportBtn>
      </div>

      {/* Secondary Quick-Actions Row: Skip -5s, Playlist, Remixes, Skip +5s */}
      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-around px-1">
        <button
          onClick={(e) => { e.stopPropagation(); seekBackward5(); }}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 active:opacity-75 text-[11px] text-white/80 transition-colors"
          aria-label="Skip back 5 seconds"
        >
          <SkipBack5Icon />
          <span>-5s</span>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setShowList(!showList); }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 active:opacity-75 text-[11.5px] text-white/80 transition-colors"
          aria-label="Track list"
        >
          <ListIcon />
          <span>Playlist</span>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setShowRemixList(!showRemixList); }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 active:opacity-75 text-[11.5px] text-white/80 transition-colors"
          aria-label="Remix list"
        >
          <MicIcon />
          <span>Remixes</span>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); seekForward5(); }}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 active:opacity-75 text-[11px] text-white/80 transition-colors"
          aria-label="Skip forward 5 seconds"
        >
          <span>+5s</span>
          <SkipFwd5Icon />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Single, resilient YouTube Player instance for 100% mobile continuous playback */}
      <div 
        id="yt-player" 
        className="yt-background-audio-bypass"
        {...{ allow: "autoplay; encrypted-media; picture-in-picture" } as any}
      />
      <audio ref={audioRef} id="main-audio-engine" style={{ display: 'none' }} preload="auto" crossOrigin="anonymous" loop src={AUDIO_STREAM_ANCHOR} />
      {DesktopPlayer}
      {MobilePlayer}

      {/* Track list overlay */}
      {showList && (
        <TrackList
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          activeTab={playlistTab}
          onTogglePlay={togglePlay}
          onSelect={handleTrackSelect}
          onClose={() => setShowList(false)}
          onTabChange={setPlaylistTab}
        />
      )}
      {showRemixList && (
        <TrackList
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          activeTab={remixTab}
          isRemixOnly={true}
          onTogglePlay={togglePlay}
          onSelect={handleTrackSelect}
          onClose={() => setShowRemixList(false)}
          onTabChange={setRemixTab}
        />
      )}
    </>
  );
}
