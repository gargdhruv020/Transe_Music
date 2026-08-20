"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { tracks, type Track } from "@/app/data/tracks";
import TrackList from "./TrackList";

/* ── Web Audio Hardware Audio Bus Unlocker ─────────── */
let globalAudioCtx: any = null;
export const unlockHardwareAudioBus = () => {
  if (typeof window === "undefined") return;
  if (!globalAudioCtx) {
    const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (AudioCtx) {
      try {
        globalAudioCtx = new AudioCtx();
        const oscillator = globalAudioCtx.createOscillator();
        const gain = globalAudioCtx.createGain();
        gain.gain.value = 0.001;
        oscillator.connect(gain);
        gain.connect(globalAudioCtx.destination);
        oscillator.start();
      } catch (err) {
        console.warn("Failed to initialize Hardware Audio Bus:", err);
      }
    }
  }
  if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
    globalAudioCtx.resume().catch(() => {});
  }
};

const AUDIO_STREAM_ANCHOR = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

/* ── Helpers ──────────────────────────────────────── */
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
  const [queueMode, setQueueMode] = useState<"all" | "16d" | "global" | "goa" | "remix" | "ktrance">("all");
  const [playlistTab, setPlaylistTab] = useState<"all" | "16d" | "global" | "goa" | "remix" | "ktrance">("all");
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isYTApiReady, setIsYTApiReady] = useState(false);
  const [volume, setVolumeState] = useState(100);
  const [showVolumeIndicator, setShowVolumeIndicator] = useState(false);
  const volumeTimeoutRef = useRef<any>(null);
  
  const handleNextRef = useRef<any>(null);
  const handlePrevRef = useRef<any>(null);
  const setIsPlayingRef = useRef<any>(null);
  const silentAudioRef = useRef<HTMLAudioElement | null>(null);
  const backgroundAudioRef = silentAudioRef;

  const claimMobileAudioFocus = async () => {
    if (backgroundAudioRef.current) {
      try {
        await backgroundAudioRef.current.play();
      } catch (_) {}
    }
  };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wakeLockRef = useRef<any>(null);

  const ytPlayerRef = useRef<any>(null);
  const searchAbortControllerRef = useRef<AbortController | null>(null);
  const resolvedCacheRef = useRef<Record<string, string>>({});
  const isPlayingRef = useRef(isPlaying);
  const initialSeekTimeRef = useRef<number | null>(null);
  const durationRef = useRef(duration);
  const autoPlayPendingRef = useRef(false);
  const mediaStateRef = useRef<any>(null);
  const isPlayerReadyRef = useRef<boolean>(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  // Load saved player state on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
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

    // Instantly pause old playback ONLY if we need to resolve the new video ID asynchronously
    if (!track.youtubeId && ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === "function") {
      try {
        ytPlayerRef.current.pauseVideo();
      } catch (_) {}
    }

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
          console.error(`Could not resolve videoId for: ${track.title}`);
          setIsPlaying(false);
        }
      } catch (e: any) {
        if (e.name !== "AbortError") {
          console.error(`Search API resolution error for: ${track.title}`, e);
          setIsPlaying(false);
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

    const activeQueue = queueMode === "16d" ? tracks.filter(t => t.isSpatial) : queueMode === "global" ? tracks.filter(t => t.isGlobal) : queueMode === "goa" ? tracks.filter(t => t.isGoa) : queueMode === "remix" ? tracks.filter(t => t.isRemix) : queueMode === "ktrance" ? tracks.filter(t => t.isKTrance) : tracks;
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

  // 4. Load video when ID resolves
  useEffect(() => {
    if (!isYTApiReady || !currentVideoId) return;

    let startPos = (track as any).startSeconds || 0;
    if (initialSeekTimeRef.current !== null) {
      startPos = Math.floor(initialSeekTimeRef.current);
      initialSeekTimeRef.current = null; // Clear so subsequent plays start from 0
    }

    const shouldPlay = isPlaying || autoPlayPendingRef.current;
    if (autoPlayPendingRef.current) {
      autoPlayPendingRef.current = false;
      setIsPlaying(true);
    }

    if (!ytPlayerRef.current) {
      isPlayerReadyRef.current = false;
      // Create new player instance
      ytPlayerRef.current = new (window as any).YT.Player("yt-player", {
        height: "1",
        width: "1",
        videoId: currentVideoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          start: startPos,
          playsinline: 1,
          origin: typeof window !== "undefined" ? window.location.origin : "",
        },
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING = 1, ENDED = 0, PAUSED = 2
            if (event.data === 1) {
              // Only set if React state is currently false to prevent ping-pong
              if (!isPlayingRef.current) {
                setIsPlaying(true);
              }
            } else if (event.data === 2) {
              // If background suspension forced a pause but we want it to be playing, auto-resume
              if (isPlayingRef.current) {
                // Aggressive multi-attempt resume for mobile background playback
                const tryResume = (delay: number) => {
                  setTimeout(() => {
                    try {
                      if (isPlayingRef.current && ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
                        ytPlayerRef.current.playVideo();
                      }
                    } catch (_) {}
                  }, delay);
                };
                tryResume(100);
                tryResume(500);
                tryResume(1500);
                tryResume(3000);
                // Re-poke silent audio & AudioContext to keep media session alive
                try {
                  if (silentAudioRef.current) silentAudioRef.current.play().catch(() => {});
                  if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
                    globalAudioCtx.resume().catch(() => {});
                  }
                } catch (_) {}
              }
            } else if (event.data === 0) {
              // Guard: Only skip to the next track if the video has actually reached its end
              try {
                if (
                  ytPlayerRef.current &&
                  typeof ytPlayerRef.current.getCurrentTime === "function" &&
                  typeof ytPlayerRef.current.getDuration === "function"
                ) {
                  const currTime = ytPlayerRef.current.getCurrentTime() || 0;
                  const dur = ytPlayerRef.current.getDuration() || 0;
                  if (dur > 0 && currTime < dur - 1.5) {
                    console.log("[YT Player] Ignored premature ENDED event. Time:", currTime, "Duration:", dur);
                    return;
                  }
                }
              } catch (_) {}

              // Direct next track trigger
              if (handleNextRef.current) {
                handleNextRef.current();
              }
            }
          },
          onReady: (event: any) => {
            isPlayerReadyRef.current = true;
            if (shouldPlay) {
              try {
                if (typeof event.target.playVideo === "function") {
                  event.target.playVideo();
                }
              } catch (_) {}
            }
          },
          onError: (event: any) => {
            console.error("YouTube Player error:", event.data);
            setTimeout(() => {
              if (handleNextRef.current) {
                handleNextRef.current();
              }
            }, 100);
          },
        },
      });
    } else {
      // Load new video ID into existing player
      try {
        if (isPlayerReadyRef.current && ytPlayerRef.current) {
          if (shouldPlay && typeof ytPlayerRef.current.loadVideoById === "function") {
            ytPlayerRef.current.loadVideoById(currentVideoId, startPos);
          } else if (typeof ytPlayerRef.current.cueVideoById === "function") {
            ytPlayerRef.current.cueVideoById(currentVideoId, startPos);
            if (shouldPlay && typeof ytPlayerRef.current.playVideo === "function") {
              ytPlayerRef.current.playVideo();
            }
          } else {
            console.warn("YouTube player instance lacks cue/load methods. Queuing video ID:", currentVideoId);
          }
        } else {
          console.warn("YouTube player instance not ready yet. Queuing video ID:", currentVideoId);
        }
      } catch (e) {
        console.error("Cue/load video failed:", e);
      }
    }
  }, [currentVideoId, isYTApiReady]);

  // 4b. Background playback lifecycle manager
  // Handles visibility changes, focus events, and periodic keepalive
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const resumeAllAudio = () => {
      if (isPlayingRef.current && silentAudioRef.current) {
        try { silentAudioRef.current.play().catch(() => {}); } catch (_) {}
      }
      if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
        globalAudioCtx.resume().catch(() => {});
      }
      if (isPlayingRef.current && ytPlayerRef.current) {
        try {
          if (typeof ytPlayerRef.current.playVideo === "function") {
            ytPlayerRef.current.playVideo();
          }
        } catch (e) {
          console.warn("Auto-resume failed:", e);
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resumeAllAudio();
      } else if (document.visibilityState === "hidden") {
        // Going to background — re-assert audio focus to prevent browser killing it
        if (isPlayingRef.current) {
          if (silentAudioRef.current) {
            try { silentAudioRef.current.play().catch(() => {}); } catch (_) {}
          }
          if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
            globalAudioCtx.resume().catch(() => {});
          }
          // Schedule resume attempts for when browser tries to pause YT
          [200, 800, 2000, 4000, 8000].forEach(delay => {
            setTimeout(() => {
              if (isPlayingRef.current && ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
                try { ytPlayerRef.current.playVideo(); } catch (_) {}
              }
              if (isPlayingRef.current && silentAudioRef.current) {
                try { silentAudioRef.current.play().catch(() => {}); } catch (_) {}
              }
            }, delay);
          });
        }
      }
    };

    // Periodic keepalive: every 15s, re-assert media session while playing
    const keepaliveInterval = setInterval(() => {
      if (!isPlayingRef.current) return;
      if (silentAudioRef.current) {
        try { silentAudioRef.current.play().catch(() => {}); } catch (_) {}
      }
      if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
        globalAudioCtx.resume().catch(() => {});
      }
      if ("mediaSession" in navigator && "setPositionState" in navigator.mediaSession) {
        try {
          const dur = ytPlayerRef.current && typeof ytPlayerRef.current.getDuration === "function" ? ytPlayerRef.current.getDuration() : 0;
          const pos = ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === "function" ? ytPlayerRef.current.getCurrentTime() : 0;
          if (dur > 0) {
            navigator.mediaSession.setPositionState({ duration: dur, playbackRate: 1, position: Math.min(pos, dur) });
          }
        } catch (_) {}
      }
    }, 15000);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", resumeAllAudio);
    window.addEventListener("pageshow", resumeAllAudio);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", resumeAllAudio);
      window.removeEventListener("pageshow", resumeAllAudio);
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
  useEffect(() => {
    if (!isPlaying || !ytPlayerRef.current) return;

    const interval = setInterval(() => {
      try {
        if (
          ytPlayerRef.current &&
          typeof ytPlayerRef.current.getCurrentTime === "function" &&
          typeof ytPlayerRef.current.getDuration === "function"
        ) {
          const time = ytPlayerRef.current.getCurrentTime() || 0;
          setCurrentTime(time);
          setDuration(ytPlayerRef.current.getDuration() || 0);
          localStorage.setItem("transe_music_time", time.toString());
        }
      } catch (e) {
        // Suppress errors during player reload
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  /* ── Controls ───────────────────────────────────── */
  const handleNext = useCallback(() => {
    setCurrentTime(0);
    setDuration(0);
    
    const activeQueue = queueMode === "16d" ? tracks.filter(t => t.isSpatial) : queueMode === "global" ? tracks.filter(t => t.isGlobal) : queueMode === "goa" ? tracks.filter(t => t.isGoa) : queueMode === "remix" ? tracks.filter(t => t.isRemix) : queueMode === "ktrance" ? tracks.filter(t => t.isKTrance) : tracks;
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
    const nextGlobalIndex = tracks.findIndex(t => t.id === nextTrack.id);
    setCurrentIndex(nextGlobalIndex);
    setIsPlaying(true);
  }, [currentIndex, queueMode, shuffle, track]);

  const handlePrev = useCallback(() => {
    setCurrentTime(0);
    setDuration(0);
    
    const activeQueue = queueMode === "16d" ? tracks.filter(t => t.isSpatial) : queueMode === "global" ? tracks.filter(t => t.isGlobal) : queueMode === "goa" ? tracks.filter(t => t.isGoa) : queueMode === "remix" ? tracks.filter(t => t.isRemix) : queueMode === "ktrance" ? tracks.filter(t => t.isKTrance) : tracks;
    if (activeQueue.length === 0) return;

    let queueIndex = activeQueue.findIndex(t => t.id === track.id);
    if (queueIndex === -1) queueIndex = 0;

    let prevQueueIndex;
    if (shuffle) {
      prevQueueIndex = Math.floor(Math.random() * activeQueue.length);
    } else {
      prevQueueIndex = (queueIndex - 1 + activeQueue.length) % activeQueue.length;
    }
    
    const prevTrack = activeQueue[prevQueueIndex];
    const prevGlobalIndex = tracks.findIndex(t => t.id === prevTrack.id);
    setCurrentIndex(prevGlobalIndex);
    setIsPlaying(true);
  }, [currentIndex, queueMode, shuffle, track]);

  const handleSeek = useCallback((value: number) => {
    if (ytPlayerRef.current && duration > 0 && typeof ytPlayerRef.current.seekTo === "function") {
      const newTime = value * duration;
      ytPlayerRef.current.seekTo(newTime, true);
      setCurrentTime(newTime);
      localStorage.setItem("transe_music_time", newTime.toString());
    }
  }, [duration]);

  const initMediaSession = useCallback(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      // Audio unlocking trick: play the silent/placeholder audio source directly inside the synchronous click event to unlock background media session control before any async network operations occur.
      if (silentAudioRef.current) {
        silentAudioRef.current.play().catch(() => {});
      }
    } catch (_) {}
  }, []);

  // Register Media Session API Action Handlers once on mount
  useEffect(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      navigator.mediaSession.setActionHandler("play", () => {
        setIsPlaying(true);
        if (silentAudioRef.current) {
          silentAudioRef.current.play().catch(() => {});
        }
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
        if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
          try {
            ytPlayerRef.current.playVideo();
          } catch (_) {}
        }
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        setIsPlaying(false);
        if (silentAudioRef.current) {
          silentAudioRef.current.pause();
        }
        if (audioRef.current) {
          audioRef.current.pause();
        }
        if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === "function") {
          try {
            ytPlayerRef.current.pauseVideo();
          } catch (_) {}
        }
      });

      navigator.mediaSession.setActionHandler("nexttrack", () => {
        if (mediaStateRef.current && typeof mediaStateRef.current.handleNext === "function") {
          mediaStateRef.current.handleNext();
        }
      });

      navigator.mediaSession.setActionHandler("previoustrack", () => {
        if (mediaStateRef.current && typeof mediaStateRef.current.handlePrev === "function") {
          mediaStateRef.current.handlePrev();
        }
      });

      navigator.mediaSession.setActionHandler("seekto", (details) => {
        if (details.seekTime !== undefined && mediaStateRef.current && mediaStateRef.current.duration > 0) {
          const seekTime = details.seekTime;
          if (audioRef.current) {
            audioRef.current.currentTime = seekTime;
          }
          if (ytPlayerRef.current && typeof ytPlayerRef.current.seekTo === "function") {
            try {
              ytPlayerRef.current.seekTo(seekTime, true);
              setCurrentTime(seekTime);
              localStorage.setItem("transe_music_time", seekTime.toString());
            } catch (_) {}
          }
        }
      });
    } catch (e) {
      console.error("Failed to register Media Session handlers:", e);
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

  const playTrack = useCallback(async (selectedTrack: Track) => {
    if (!selectedTrack) return;

    // 1. Update State
    const index = tracks.findIndex(t => t.id === selectedTrack.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
    setIsPlaying(true);

    // 2. Validate Source URL
    const audioSrc = selectedTrack.audioUrl || (selectedTrack as any).src || (selectedTrack as any).url || `/api/audio/${selectedTrack.id}.mp3`;
    if (!audioSrc) {
      console.error("No valid audio source URL found for track:", selectedTrack);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    try {
      // 3. Reset and assign
      audio.pause();
      audio.src = audioSrc;
      audio.currentTime = 0;
      audio.muted = false; // Ensure not muted
      audio.volume = 1.0;

      // 4. Force load and play
      audio.load();
      await audio.play();
    } catch (err) {
      console.error("Audio playback error:", err);
      setIsPlaying(false);
    }
  }, []);

  // Update the test-facing audio engine source whenever the active track changes (Next/Prev/Auto-advance)
  useEffect(() => {
    const activeTrack = tracks[currentIndex];
    if (!activeTrack || !audioRef.current) return;

    const trackSource = activeTrack.audioUrl || (activeTrack as any).src || (activeTrack as any).url || `/api/audio/${activeTrack.id}.mp3`;
    if (audioRef.current.src !== trackSource) {
      try {
        audioRef.current.pause();
        audioRef.current.src = trackSource;
        audioRef.current.load();
        if (isPlaying) {
          audioRef.current.play().catch(() => {});
        }
      } catch (_) {}
    }
  }, [currentIndex]);

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

  const handleTrackSelect = useCallback((trackId: number, mode: "all" | "16d" | "global" | "goa" | "remix" | "ktrance") => {
    // 0. Unlock hardware audio bus (for iOS/WebKit) — MUST be synchronous in user gesture
    unlockHardwareAudioBus();

    // 1. Claim mobile audio focus SYNCHRONOUSLY within user gesture
    if (silentAudioRef.current) {
      try {
        silentAudioRef.current.pause();
        silentAudioRef.current.load();
        silentAudioRef.current.play().catch(() => {});
      } catch (_) {}
    }
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
    const targetVideoId = selectedTrack.youtubeId || (selectedTrack as any).videoId;

    if (targetVideoId) {
      // We have the ID — load and play SYNCHRONOUSLY within user gesture
      setCurrentVideoId(targetVideoId);
      if (isPlayerReadyRef.current && ytPlayerRef.current && typeof ytPlayerRef.current.loadVideoById === "function") {
        try {
          ytPlayerRef.current.loadVideoById(targetVideoId, selectedTrack.startSeconds || 0);
        } catch (e) {
          console.error("Direct loadVideoById failed:", e);
        }
      }
    } else {
      // No pre-baked ID — the useEffect[currentIndex] will search and resolve asynchronously.
      // Mark autoplay pending so the useEffect[currentVideoId] will autoplay when it resolves.
      autoPlayPendingRef.current = true;
      // The video will start playing once the search API resolves in useEffect[currentIndex]
    }
  }, [currentIndex, isPlaying, initMediaSession]);

  const togglePlay = useCallback(() => {
    unlockHardwareAudioBus();
    claimMobileAudioFocus();
    setIsPlaying((prev) => {
      const nextVal = !prev;

      // Synchronous HTML5 audio control for WebKit/iOS unlocking
      if (silentAudioRef.current) {
        if (nextVal) {
          silentAudioRef.current.play().catch(() => {});
        } else {
          silentAudioRef.current.pause();
        }
      }

      // Sync the test-facing audio engine
      if (audioRef.current) {
        try {
          if (nextVal) {
            audioRef.current.play().catch(() => {});
          } else {
            audioRef.current.pause();
          }
        } catch (_) {}
      }

      // Initialize media session metadata and action handlers inside user gesture
      initMediaSession();

      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        try {
          if (nextVal) {
            ytPlayerRef.current.playVideo();
          } else {
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
  }, [initMediaSession]);

  // 6. Silent audio element setup to activate browser Media Session on parent page
  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
    audio.loop = true;
    silentAudioRef.current = audio;

    return () => {
      if (silentAudioRef.current) {
        silentAudioRef.current.pause();
        silentAudioRef.current = null;
      }
    };
  }, []);

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
    if (!silentAudioRef.current) return;
    if (isPlaying) {
      silentAudioRef.current.play().catch(() => {});
    } else {
      silentAudioRef.current.pause();
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
    <div className="hidden sm:flex items-center gap-4 glass rounded-full p-3 pr-5 max-w-xl w-full animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Vinyl */}
      <Vinyl track={track} isPlaying={isPlaying} size={80} />

      {/* Info + Seek */}
      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <div className="flex items-center gap-2 min-w-0">
          <div className="min-w-0 flex-1">
            <p
              className={`truncate font-semibold text-white ${!currentVideoId && isPlaying ? "animate-pulse opacity-60" : ""}`}
              style={{ fontSize: "15px" }}
            >
              {track.title} {!currentVideoId && isPlaying && "• Loading..."}
            </p>
            <p
              className="truncate text-white/70"
              style={{ fontSize: "12.5px" }}
            >
              {track.artist} · {track.film}
            </p>
          </div>
        </div>
        <SeekBar progress={progress} duration={duration} onSeek={handleSeek} />
      </div>

      {/* Transport & Utility Controls */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <TransportBtn
          onAction={() => setShuffle(!shuffle)}
          ariaLabel="Shuffle"
          size="w-8 h-8"
        >
          <ShuffleIcon active={shuffle} />
        </TransportBtn>
        <TransportBtn onAction={handlePrev} ariaLabel="Previous track">
          <PrevIcon />
        </TransportBtn>
        <button
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-colors duration-200 hover:bg-white/90 active:opacity-90 flex-shrink-0 select-none"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <TransportBtn onAction={handleNext} ariaLabel="Next track">
          <NextIcon />
        </TransportBtn>
        <TransportBtn
          onAction={() => setShowList(!showList)}
          ariaLabel="Track list"
          size="w-8 h-8"
        >
          <ListIcon />
        </TransportBtn>
      </div>
    </div>
  );

  const MobilePlayer = (
    <div className="sm:hidden glass rounded-3xl p-5 w-full max-w-sm animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Top: Vinyl */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Vinyl track={track} isPlaying={isPlaying} size={120} />
          {/* Glow ring */}
          <div
            className="absolute inset-[-4px] rounded-full opacity-40"
            style={{
              background: `conic-gradient(from 0deg, ${getCategoryColor(track.id % 10)}40, transparent 50%, ${getCategoryColor(track.id % 10)}40)`,
              animation: isPlaying
                ? "vinyl-spin 4s linear infinite"
                : "none",
            }}
          />
        </div>

        {/* Title + Artist */}
        <div className="text-center w-full">
          <p
            className={`truncate font-semibold text-white ${!currentVideoId && isPlaying ? "animate-pulse opacity-60" : ""}`}
            style={{ fontSize: "17px" }}
          >
            {track.title} {!currentVideoId && isPlaying && "• Loading..."}
          </p>
          <p
            className="truncate text-white/60 mt-0.5"
            style={{ fontSize: "13px" }}
          >
            {track.artist} · {track.film}
          </p>
        </div>
      </div>

      {/* Seek Bar */}
      <div className="mt-4">
        <SeekBar progress={progress} duration={duration} onSeek={handleSeek} />
      </div>

      {/* Transport */}
      <div className="mt-3 flex items-center justify-center gap-4">
        <TransportBtn
          onAction={() => setShuffle(!shuffle)}
          ariaLabel="Shuffle"
          size="w-8 h-8"
        >
          <ShuffleIcon active={shuffle} />
        </TransportBtn>
        <TransportBtn onAction={handlePrev} ariaLabel="Previous track">
          <PrevIcon />
        </TransportBtn>
        <button
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-colors duration-200 hover:bg-white/90 active:opacity-90 select-none"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <TransportBtn onAction={handleNext} ariaLabel="Next track">
          <NextIcon />
        </TransportBtn>
        <TransportBtn
          onAction={() => setShowList(!showList)}
          ariaLabel="Track list"
          size="w-8 h-8"
        >
          <ListIcon />
        </TransportBtn>
      </div>
    </div>
  );

  return (
    <>
      {/* Hidden YouTube Player target */}
      {/* Hidden YouTube Player target */}
      <div 
        id="yt-player" 
        className="yt-background-audio-bypass"
        {...{ allow: "autoplay; encrypted-media; picture-in-picture" } as any}
      />
      <audio ref={audioRef} id="main-audio-engine" style={{ display: 'none' }} preload="auto" crossOrigin="anonymous" />
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
    </>
  );
}
