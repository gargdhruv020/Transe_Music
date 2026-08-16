import React, { useEffect, useRef, useState, useCallback } from 'react';
import { tracks as playlist, type Track } from "@/app/data/tracks";

const SILENT_AUDIO_URI = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export default function Player() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(playlist[0] || null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playerRef = useRef<any>(null);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayerReadyRef = useRef<boolean>(false);

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
    } catch (_) {}
  }, []);

  const syncMediaSessionState = useCallback((track: Track, playing: boolean) => {
    if (!('mediaSession' in navigator) || !track) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'Track',
      artist: track.artist || 'Artist',
      album: track.film || 'Music Stream',
      artwork: [
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    });

    navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
  }, []);

  const handleTogglePlay = useCallback(async () => {
    if (!playerRef.current || !isPlayerReadyRef.current) return;
    await claimAudioFocus();

    if (isPlaying) {
      playerRef.current.pauseVideo?.();
      setIsPlaying(false);
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'paused';
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
  }, [isPlaying, currentTrack, claimAudioFocus, syncMediaSessionState]);

  const handleSelectTrack = useCallback(async (track: Track) => {
    if (!track) return;

    if (currentTrack?.id === track.id) {
      if (!isPlaying) {
        handleTogglePlay();
      }
      return;
    }

    await claimAudioFocus();
    setCurrentTrack(track);
    setIsPlaying(true);
    syncMediaSessionState(track, true);

    const targetVideoId = track.youtubeId || (track as any).videoId;

    if (targetVideoId && playerRef.current && isPlayerReadyRef.current) {
      playerRef.current.unMute?.();
      playerRef.current.setVolume?.(100);
      playerRef.current.loadVideoById({
        videoId: targetVideoId,
        startSeconds: 0,
      });
      playerRef.current.playVideo?.();
    }
  }, [currentTrack, isPlaying, handleTogglePlay, claimAudioFocus, syncMediaSessionState]);

  const handleSkipNext = useCallback(() => {
    if (!playlist.length) return;
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    handleSelectTrack(playlist[nextIndex]);
  }, [currentTrack, handleSelectTrack]);

  const handleSkipPrevious = useCallback(() => {
    if (!playlist.length) return;
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack?.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    handleSelectTrack(playlist[prevIndex]);
  }, [currentTrack, handleSelectTrack]);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.setActionHandler('play', () => handleTogglePlay());
    navigator.mediaSession.setActionHandler('pause', () => handleTogglePlay());
    navigator.mediaSession.setActionHandler('nexttrack', () => handleSkipNext());
    navigator.mediaSession.setActionHandler('previoustrack', () => handleSkipPrevious());

    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
    };
  }, [handleTogglePlay, handleSkipNext, handleSkipPrevious]);

  useEffect(() => {
    const initPlayer = () => {
      if ((window as any).YT && (window as any).YT.Player) {
        new (window as any).YT.Player('youtube-player', {
          height: '4',
          width: '4',
          videoId: currentTrack?.youtubeId || '',
          playerVars: {
            autoplay: 1,
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
            },
            onStateChange: (event: any) => {
              if (event.data === 0) {
                handleSkipNext();
              }
              if (event.data === 1) {
                setIsPlaying(true);
                if (currentTrack) syncMediaSessionState(currentTrack, true);
              }
              if (event.data === 2) {
                setIsPlaying(false);
                if (currentTrack) syncMediaSessionState(currentTrack, false);
              }
            },
          },
        });
      }
    };

    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }
  }, []);

  return (
    <div className="player-container">
      <div
        id="youtube-player"
        className="yt-background-audio-bypass"
        {...{ allow: "autoplay; encrypted-media; picture-in-picture; clipboard-write" } as any}
      />
      <div className="flex items-center gap-4 p-4 bg-zinc-900 text-white rounded-xl">
        <div className="flex-1 truncate">
          <p className="font-semibold text-sm truncate">{currentTrack?.title || 'No Track Selected'}</p>
          <p className="text-xs text-zinc-400 truncate">{currentTrack?.artist || 'Unknown Artist'}</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={handleSkipPrevious} className="p-2 hover:bg-zinc-800 rounded-full">⏮</button>
          <button type="button" onClick={handleTogglePlay} className="p-3 bg-white text-black rounded-full font-bold">
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button type="button" onClick={handleSkipNext} className="p-2 hover:bg-zinc-800 rounded-full">⏭</button>
        </div>
      </div>
    </div>
  );
}
