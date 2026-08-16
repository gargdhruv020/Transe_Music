"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { tracks as playlist, type Track } from "@/app/data/tracks";

const SILENT_AUDIO_URI =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export default function Player() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(
    playlist[0] || null
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);

  const playerRef = useRef<any>(null);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayerReadyRef = useRef(false);

  /* ---------------------------------------------------------
     AUDIO FOCUS
  --------------------------------------------------------- */

  const claimAudioFocus = useCallback(async () => {
    if (!backgroundAudioRef.current) {
      const audio = new Audio(SILENT_AUDIO_URI);
      audio.loop = true;
      backgroundAudioRef.current = audio;
    }

    try {
      if (backgroundAudioRef.current.paused) {
        await backgroundAudioRef.current.play();
      }
    } catch (_) { }
  }, []);

  /* ---------------------------------------------------------
     MEDIA SESSION
  --------------------------------------------------------- */

  const syncMediaSessionState = useCallback(
    (track: Track, playing: boolean) => {
      if (!("mediaSession" in navigator) || !track) return;

      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title || "Track",
        artist: track.artist || "Artist",
        album: track.film || "Music Stream",
        artwork: [
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      });

      navigator.mediaSession.playbackState = playing
        ? "playing"
        : "paused";
    },
    []
  );

  /* ---------------------------------------------------------
     PLAY / PAUSE
  --------------------------------------------------------- */

  const handleTogglePlay = useCallback(async () => {
    if (!playerRef.current || !isPlayerReadyRef.current) return;

    await claimAudioFocus();

    if (isPlaying) {
      playerRef.current.pauseVideo?.();
      setIsPlaying(false);

      if ("mediaSession" in navigator) {
        navigator.mediaSession.playbackState = "paused";
      }
    } else {
      playerRef.current.unMute?.();
      playerRef.current.setVolume?.(100);
      playerRef.current.playVideo?.();

      setIsPlaying(true);

      if (currentTrack) {
        syncMediaSessionState(currentTrack, true);
      }
    }
  }, [
    isPlaying,
    currentTrack,
    claimAudioFocus,
    syncMediaSessionState,
  ]);

  /* ---------------------------------------------------------
     SELECT TRACK
  --------------------------------------------------------- */

  const handleSelectTrack = useCallback(
    async (track: Track) => {
      if (!track) return;

      if (currentTrack?.id === track.id) {
        if (!isPlaying) {
          await handleTogglePlay();
        }
        return;
      }

      await claimAudioFocus();

      setCurrentTrack(track);
      setCurrentTime(0);
      setDuration(0);
      setIsPlaying(true);

      syncMediaSessionState(track, true);

      const targetVideoId =
        track.youtubeId || (track as any).videoId;

      if (
        targetVideoId &&
        playerRef.current &&
        isPlayerReadyRef.current
      ) {
        playerRef.current.unMute?.();
        playerRef.current.setVolume?.(100);

        playerRef.current.loadVideoById({
          videoId: targetVideoId,
          startSeconds: 0,
        });

        playerRef.current.playVideo?.();
      }
    },
    [
      currentTrack,
      isPlaying,
      handleTogglePlay,
      claimAudioFocus,
      syncMediaSessionState,
    ]
  );

  /* ---------------------------------------------------------
     NEXT
  --------------------------------------------------------- */

  const handleSkipNext = useCallback(() => {
    if (!playlist.length) return;

    if (isShuffle) {
      let randomIndex = Math.floor(Math.random() * playlist.length);

      if (playlist.length > 1) {
        while (
          playlist[randomIndex].id === currentTrack?.id
        ) {
          randomIndex = Math.floor(
            Math.random() * playlist.length
          );
        }
      }

      handleSelectTrack(playlist[randomIndex]);
      return;
    }

    const currentIndex = playlist.findIndex(
      (t) => t.id === currentTrack?.id
    );

    const nextIndex =
      (currentIndex + 1) % playlist.length;

    handleSelectTrack(playlist[nextIndex]);
  }, [
    currentTrack,
    handleSelectTrack,
    isShuffle,
  ]);

  /* ---------------------------------------------------------
     PREVIOUS
  --------------------------------------------------------- */

  const handleSkipPrevious = useCallback(() => {
    if (!playlist.length) return;

    const currentIndex = playlist.findIndex(
      (t) => t.id === currentTrack?.id
    );

    const prevIndex =
      (currentIndex - 1 + playlist.length) %
      playlist.length;

    handleSelectTrack(playlist[prevIndex]);
  }, [currentTrack, handleSelectTrack]);

  /* ---------------------------------------------------------
     MEDIA SESSION CONTROLS
  --------------------------------------------------------- */

  useEffect(() => {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.setActionHandler(
      "play",
      () => handleTogglePlay()
    );

    navigator.mediaSession.setActionHandler(
      "pause",
      () => handleTogglePlay()
    );

    navigator.mediaSession.setActionHandler(
      "nexttrack",
      () => handleSkipNext()
    );

    navigator.mediaSession.setActionHandler(
      "previoustrack",
      () => handleSkipPrevious()
    );

    return () => {
      navigator.mediaSession.setActionHandler("play", null);
      navigator.mediaSession.setActionHandler("pause", null);
      navigator.mediaSession.setActionHandler(
        "nexttrack",
        null
      );
      navigator.mediaSession.setActionHandler(
        "previoustrack",
        null
      );
    };
  }, [
    handleTogglePlay,
    handleSkipNext,
    handleSkipPrevious,
  ]);

  /* ---------------------------------------------------------
     YOUTUBE PLAYER
  --------------------------------------------------------- */

  useEffect(() => {
    const initPlayer = () => {
      if (
        (window as any).YT &&
        (window as any).YT.Player
      ) {
        new (window as any).YT.Player(
          "youtube-player",
          {
            height: "4",
            width: "4",

            videoId:
              currentTrack?.youtubeId || "",

            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              playsinline: 1,
              origin: window.location.origin,
            },

            events: {
              onReady: (event: any) => {
                playerRef.current = event.target;
                isPlayerReadyRef.current = true;

                event.target.unMute();
                event.target.setVolume(100);

                const initialDuration =
                  event.target.getDuration?.() || 0;

                if (initialDuration) {
                  setDuration(initialDuration);
                }
              },

              onStateChange: (event: any) => {
                // ENDED
                if (event.data === 0) {
                  handleSkipNext();
                }

                // PLAYING
                if (event.data === 1) {
                  setIsPlaying(true);

                  const trackDuration =
                    event.target.getDuration?.() || 0;

                  if (trackDuration) {
                    setDuration(trackDuration);
                  }

                  if (currentTrack) {
                    syncMediaSessionState(
                      currentTrack,
                      true
                    );
                  }
                }

                // PAUSED
                if (event.data === 2) {
                  setIsPlaying(false);

                  if (currentTrack) {
                    syncMediaSessionState(
                      currentTrack,
                      false
                    );
                  }
                }
              },
            },
          }
        );
      }
    };

    if (!(window as any).YT) {
      const tag = document.createElement("script");

      tag.src =
        "https://www.youtube.com/iframe_api";

      document.body.appendChild(tag);

      (window as any).onYouTubeIframeAPIReady =
        initPlayer;
    } else {
      initPlayer();
    }
  }, []);

  /* ---------------------------------------------------------
     PROGRESS TRACKING
  --------------------------------------------------------- */

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (
        playerRef.current &&
        isPlayerReadyRef.current
      ) {
        try {
          const time =
            playerRef.current.getCurrentTime?.() || 0;

          const total =
            playerRef.current.getDuration?.() || 0;

          setCurrentTime(time);

          if (total > 0) {
            setDuration(total);
          }
        } catch (_) { }
      }
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* ---------------------------------------------------------
     SEEK
  --------------------------------------------------------- */

  const handleSeek = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    setCurrentTime(value);

    if (
      playerRef.current &&
      isPlayerReadyRef.current
    ) {
      playerRef.current.seekTo?.(value, true);
    }
  };

  /* ---------------------------------------------------------
     TIME FORMAT
  --------------------------------------------------------- */

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  /* ---------------------------------------------------------
     ARTWORK
  --------------------------------------------------------- */

  const artwork =
    (currentTrack as any)?.thumbnail ||
    (currentTrack as any)?.image ||
    (currentTrack as any)?.cover ||
    (currentTrack as any)?.artwork ||
    "/icon-512.png";

  const progress =
    duration > 0
      ? Math.min((currentTime / duration) * 100, 100)
      : 0;

  /* ---------------------------------------------------------
     UI
  --------------------------------------------------------- */

  return (
    <div className="music-player-wrapper">

      {/* Hidden YouTube player used only for audio playback */}
      <div
        id="youtube-player"
        className="yt-background-audio-bypass"
        {...({
          allow:
            "autoplay; encrypted-media; picture-in-picture; clipboard-write",
        } as any)}
      />

      <div className="music-player">

        {/* Album artwork */}
        <div className="music-player-artwork">
          <img
            src={
              (currentTrack as any)?.thumbnail ||
              (currentTrack as any)?.image ||
              (currentTrack as any)?.cover ||
              "/icon-512.png"
            }
            alt={currentTrack?.title || "Album artwork"}
          />
        </div>

        {/* Track information + progress */}
        <div className="music-player-main">

          <div className="music-player-info">
            <p className="music-player-title">
              {currentTrack?.title || "No Track Selected"}
            </p>

            <p className="music-player-artist">
              {currentTrack?.artist || "Unknown Artist"}
              {currentTrack?.film
                ? ` • ${currentTrack.film}`
                : ""}
            </p>
          </div>

          <div className="music-player-progress">
            <span className="music-player-time">
              0:00
            </span>

            <div className="music-progress-line">
              <div className="music-progress-fill" />
            </div>

            <span className="music-player-time">
              —
            </span>
          </div>

        </div>

        {/* Player controls */}
        <div className="music-player-controls">

          {/* Shuffle */}
          <button
            type="button"
            className="player-icon-button"
            aria-label="Shuffle"
            title="Shuffle"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7h3c4 0 5 10 10 10h5" />
              <path d="m18 14 3 3-3 3" />
              <path d="M3 17h3c1.7 0 2.7-1.1 3.7-2.7" />
              <path d="M14 9.5C15 8 16 7 18 7h3" />
              <path d="m18 4 3 3-3 3" />
            </svg>
          </button>

          {/* Previous */}
          <button
            type="button"
            className="player-icon-button"
            onClick={handleSkipPrevious}
            aria-label="Previous track"
            title="Previous"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
            >
              <path d="M6 5h2v14H6z" />
              <path d="m19 6-8 6 8 6z" />
            </svg>
          </button>

          {/* Play / Pause */}
          <button
            type="button"
            className="player-play-button"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="currentColor"
              >
                <path d="M6 4h4v16H6z" />
                <path d="M14 4h4v16h-4z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="29"
                height="29"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next */}
          <button
            type="button"
            className="player-icon-button"
            onClick={handleSkipNext}
            aria-label="Next track"
            title="Next"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
            >
              <path d="M16 5h2v14h-2z" />
              <path d="m5 6 8 6-8 6z" />
            </svg>
          </button>

          {/* Playlist */}
          <button
            type="button"
            className="player-icon-button"
            aria-label="Playlist"
            title="Playlist"
          >
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 6h10" />
              <path d="M4 12h10" />
              <path d="M4 18h7" />
              <path d="M18 6v12" />
              <path d="m15 9 3-3 3 3" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
} 