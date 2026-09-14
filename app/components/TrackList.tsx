"use client";

import { useState, useRef, useEffect, useMemo, memo, useCallback } from "react";
import { tracks, type Track } from "@/app/data/tracks";
import { getLikedTrackIds, toggleLikedTrack, subscribeToLikedTracks } from "@/app/utils/likedTracksStore";

export type PlaylistTabType = 
  | "all" 
  | "16d" 
  | "global" 
  | "goa" 
  | "remix" 
  | "ktrance" 
  | "indo-house" 
  | "sufi" 
  | "afro" 
  | "x" 
  | "all-remix" 
  | "hustle" 
  | "liked"
  | "club";

/* ── Close Icon ───────────────────────────────────── */
function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Heart Icon (Like Button) ─────────────────────── */
function HeartIcon({ filled, size = 16 }: { filled?: boolean; size?: number }) {
  if (filled) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-[heart-pop_0.2s_ease-out]"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/30 group-hover:text-rose-400 group-hover:scale-110 transition-all duration-200"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/* ── Equalizer Animation (playing indicator) ──────── */
function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-3.5">
      {[0, 0.2, 0.4].map((delay, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[var(--color-accent)]"
          style={{
            animation: `eq-bar 0.8s ease-in-out ${delay}s infinite alternate`,
            height: "40%",
          }}
        />
      ))}
    </div>
  );
}

/* ── Memoized Track Row ─────────────────────────────── */
const TrackRow = memo(function TrackRow({
  track,
  isActive,
  activeTab,
  isLiked,
  onSelect,
  onToggleLike,
}: {
  track: Track;
  isActive: boolean;
  activeTab: PlaylistTabType;
  isLiked: boolean;
  onSelect: (trackId: number, mode: PlaylistTabType) => void;
  onToggleLike: (trackId: number, e: React.MouseEvent) => void;
}) {
  const rowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Only scroll if this is the active track
    if (isActive && rowRef.current) {
      setTimeout(() => {
        rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  }, [isActive]);

  return (
    <button
      ref={rowRef}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect(track.id, activeTab);
      }}
      data-active={isActive ? "true" : "false"}
      className={`track-row playlist-track-item w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left relative cursor-pointer select-none pointer-events-auto transition-colors ${
        isActive ? "active" : "hover:bg-white/5"
      }`}
    >
      {/* Track number or equalizer */}
      <span className="w-6 text-center text-[11px] tabular-nums text-white/30 flex-shrink-0 flex items-center justify-center">
        {isActive ? <Equalizer /> : null}
      </span>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <p
            className={`truncate text-[13px] font-medium ${
              isActive ? "text-[var(--color-accent)]" : "text-white/90"
            }`}
          >
            {track.title}
          </p>
          {track.isSpatial && (
            <span className="flex-shrink-0 text-[8px] tracking-wider font-extrabold px-1.5 py-0.5 rounded-md bg-[oklch(0.68_0.16_250)] text-white">
              16D
            </span>
          )}
        </div>
        <p className="truncate text-[11px] text-white/40">
          {track.artist} · {track.film}
        </p>
      </div>

      {/* Right-aligned badges & Like button */}
      <div className="flex items-center gap-1.5 ml-auto flex-shrink-0">
        {track.hustleSeason && (
          <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 tracking-wide">
            {track.hustleSeason}
          </span>
        )}

        {/* Like Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleLike(track.id, e);
          }}
          aria-label={isLiked ? "Unlike song" : "Like song"}
          className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 active:scale-90 transition-all p-1 flex-shrink-0"
        >
          <HeartIcon filled={isLiked} size={16} />
        </button>
      </div>
    </button>
  );
});

export default function TrackList({
  currentIndex,
  isPlaying,
  activeTab = "all",
  onTogglePlay,
  onSelect,
  onClose,
  onTabChange,
  isRemixOnly = false,
}: {
  currentIndex: number;
  isPlaying: boolean;
  activeTab?: PlaylistTabType;
  onTogglePlay: () => void;
  onSelect: (trackId: number, mode: PlaylistTabType) => void;
  onClose: () => void;
  onTabChange?: (tab: PlaylistTabType) => void;
  isRemixOnly?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedIds, setLikedIds] = useState<Set<number>>(() => getLikedTrackIds());
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Subscribe to liked tracks store
  useEffect(() => {
    setLikedIds(getLikedTrackIds());
    const unsubscribe = subscribeToLikedTracks((updated) => {
      setLikedIds(updated);
    });
    return unsubscribe;
  }, []);

  const handleToggleLike = useCallback((trackId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleLikedTrack(trackId);
  }, []);

  // Lock body scroll while the playlist modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (overlayRef.current && e.target === overlayRef.current) {
        onClose();
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // Scroll active track into view on mount, tab change, or track change
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        const activeElement = container.querySelector('[data-active="true"]');
        if (activeElement) {
          activeElement.scrollIntoView({ block: "center", behavior: "smooth" });
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab, currentIndex]);

  // Memoize filtered tracks to avoid re-filtering on every render
  const filteredTracks = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const result = tracks.filter((t) => {
      if (activeTab === "liked") {
        if (!likedIds.has(t.id)) return false;
      } else if (isRemixOnly) {
        if (!t.isRemix) return false;
        if (activeTab === "club" && !(t as any).isClub) return false;
        if (activeTab === "remix" && ((t as any).isIndoHouse || (t as any).isSufi || (t as any).isAfro || (t as any).isX || (t as any).isHustle || (t as any).isClub)) return false;
        if (activeTab === "indo-house" && !(t as any).isIndoHouse) return false;
        if (activeTab === "sufi" && !(t as any).isSufi) return false;
        if (activeTab === "afro" && !(t as any).isAfro) return false;
        if (activeTab === "x" && !(t as any).isX) return false;
        if (activeTab === "hustle" && !(t as any).isHustle) return false;
      } else {
        if (activeTab === "club" && !(t as any).isClub) return false;
        if (activeTab === "16d" && !t.isSpatial) return false;
        if (activeTab === "global" && !t.isGlobal) return false;
        if (activeTab === "goa" && !t.isGoa) return false;
        if (activeTab === "remix" && !t.isRemix) return false;
        if (activeTab === "ktrance" && !t.isKTrance) return false;
      }
      return (
        q === "" ||
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        t.film.toLowerCase().includes(q)
      );
    });
    let finalResult = result;
    if (activeTab === "hustle") {
      finalResult = [...result].sort((a, b) => ((a as any).hustleNum || 0) - ((b as any).hustleNum || 0));
    }

    // Defense-in-depth distinct enforcement: guarantee 100% unique items rendered in UI
    const seenSlugs = new Set<string>();
    const distinctResult: Track[] = [];
    for (const t of finalResult) {
      const slug = t.title.toLowerCase().trim().replace(/[\(\)\[\]\{\}]/g, "").replace(/\s+/g, " ");
      if (!seenSlugs.has(slug)) {
        seenSlugs.add(slug);
        distinctResult.push(t);
      }
    }
    return distinctResult;
  }, [searchQuery, activeTab, isRemixOnly, likedIds]);

  const handleHeaderPlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const activeTrack = tracks[currentIndex];
    const isCurrentTrackInTab = activeTrack && filteredTracks.some((t) => t.id === activeTrack.id);

    if (isCurrentTrackInTab) {
      onTogglePlay();
    } else {
      if (filteredTracks.length > 0) {
        onSelect(filteredTracks[0].id, activeTab);
      }
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 animate-[fade-in_0.2s_ease-out]"
      style={{ overscrollBehavior: "contain" }}
    >
      <div className="glass playlist-modal-content w-full max-w-lg max-h-[80dvh] sm:max-h-[70dvh] rounded-t-3xl sm:rounded-3xl flex flex-col relative animate-[slide-up_0.3s_cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-lg font-semibold text-white">{isRemixOnly ? "Remix List" : "Playlist"}</h2>
            </div>
            <button
              onClick={handleHeaderPlayClick}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-[1px]">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              )}
            </button>
          </div>
          <button
            onClick={onClose}
            aria-label="Close playlist"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Tabs */}
        {isRemixOnly ? (
          <div className="flex px-5 pt-1 pb-3 gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide max-w-full snap-x snap-mandatory select-none items-center flex-shrink-0">
            <button
              onClick={() => onTabChange?.("all-remix")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeTab === "all-remix"
                  ? "bg-white/10 border-white/20 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => onTabChange?.("liked")}
              className={`flex-shrink-0 snap-start px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "liked"
                  ? "bg-rose-500/20 border-rose-500/40 text-white shadow-[0_0_12px_rgba(244,63,94,0.3)]"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <HeartIcon filled={activeTab === "liked" || likedIds.size > 0} size={13} />
              <span>Liked</span>
              {likedIds.size > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-rose-500/30 text-rose-300 font-bold">
                  {likedIds.size}
                </span>
              )}
            </button>
            <button
              onClick={() => onTabChange?.("club")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "club"
                  ? "bg-gradient-to-r from-amber-500/20 to-pink-500/20 border-pink-500/40 text-white shadow-[0_0_12px_rgba(236,72,153,0.25)]"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
              Club
            </button>
            <button
              onClick={() => onTabChange?.("remix")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "remix"
                  ? "bg-[oklch(0.65_0.20_300)]/15 border-[oklch(0.65_0.20_300)]/30 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] flex-shrink-0" />
              Remix
            </button>
            <button
              onClick={() => onTabChange?.("indo-house")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "indo-house"
                  ? "bg-[oklch(0.70_0.22_340)]/15 border-[oklch(0.70_0.22_340)]/30 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] flex-shrink-0" />
              Indo-House
            </button>
            <button
              onClick={() => onTabChange?.("sufi")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "sufi"
                  ? "bg-[oklch(0.68_0.16_250)]/15 border-[oklch(0.68_0.16_250)]/30 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
              Sufi
            </button>
            <button
              onClick={() => onTabChange?.("afro")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "afro"
                  ? "bg-[oklch(0.72_0.16_45)]/15 border-[oklch(0.72_0.16_45)]/30 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e76f51] flex-shrink-0" />
              Afro
            </button>
            <button
              onClick={() => onTabChange?.("x")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "x"
                  ? "bg-[#6d28d9]/15 border-[#6d28d9]/30 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] flex-shrink-0" />
              X
            </button>
            <button
              onClick={() => onTabChange?.("hustle")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activeTab === "hustle"
                  ? "bg-amber-500/15 border-amber-500/30 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              Hustle
            </button>
          </div>
        ) : (
        <div className="flex px-5 pt-1 pb-3 gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide max-w-full snap-x snap-mandatory select-none items-center flex-shrink-0">
          <button
            onClick={() => onTabChange?.("all")}
            className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 ${
              activeTab === "all"
                ? "bg-white/10 border-white/20 text-white shadow-md"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => onTabChange?.("liked")}
            className={`flex-shrink-0 snap-start px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "liked"
                ? "bg-rose-500/20 border-rose-500/40 text-white shadow-[0_0_12px_rgba(244,63,94,0.3)]"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            <HeartIcon filled={activeTab === "liked" || likedIds.size > 0} size={13} />
            <span>Liked</span>
            {likedIds.size > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-rose-500/30 text-rose-300 font-bold">
                {likedIds.size}
              </span>
            )}
          </button>
          <button
            onClick={() => onTabChange?.("club")}
            className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "club"
                ? "bg-gradient-to-r from-amber-500/20 to-pink-500/20 border-pink-500/40 text-white shadow-[0_0_12px_rgba(236,72,153,0.25)]"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
            Club
          </button>
          <button
            onClick={() => onTabChange?.("16d")}
            className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "16d"
                ? "bg-[oklch(0.68_0.16_250)]/15 border-[oklch(0.68_0.16_250)]/30 text-white shadow-md"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
            16D
          </button>
          <button
            onClick={() => onTabChange?.("global")}
            className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "global"
                ? "bg-[oklch(0.72_0.20_190)]/15 border-[oklch(0.72_0.20_190)]/30 text-white shadow-md"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] flex-shrink-0" />
            Global
          </button>
          <button
            onClick={() => onTabChange?.("goa")}
            className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "goa"
                ? "bg-[oklch(0.72_0.16_45)]/15 border-[oklch(0.72_0.16_45)]/30 text-white shadow-md"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e76f51] flex-shrink-0" />
            Goa
          </button>

          <button
            onClick={() => onTabChange?.("ktrance")}
            className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === "ktrance"
                ? "bg-[oklch(0.60_0.25_285)]/15 border-[oklch(0.60_0.25_285)]/30 text-white shadow-md"
                : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8338ec] flex-shrink-0" />
            K//TRANCE
          </button>
        </div>
        )}

        {/* Search */}
        <div className="px-5 pt-1 pb-4 flex-shrink-0">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder={activeTab === "liked" ? "Search liked tracks, artists, films..." : "Search tracks, artists, films..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 pl-9 pr-4 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/20 focus:bg-white/[0.07] transition-colors"
            />
          </div>
        </div>

        {/* Track Rows */}
        <div
          ref={scrollRef}
          className="playlist-track-list flex-1 min-h-0 flex flex-col overflow-y-auto relative z-10 custom-scrollbar px-2 pb-5"
        >
          {filteredTracks.map((t) => {
            const activeTrack = tracks[currentIndex];
            const isActive = activeTrack ? t.id === activeTrack.id : false;
            const isLiked = likedIds.has(t.id);
            return (
              <TrackRow
                key={t.id}
                track={t}
                isActive={isActive}
                activeTab={activeTab}
                isLiked={isLiked}
                onSelect={onSelect}
                onToggleLike={handleToggleLike}
              />
            );
          })}

          {filteredTracks.length === 0 && (
            activeTab === "liked" ? (
              <div className="flex flex-col items-center justify-center py-14 text-center px-6 animate-[fade-in_0.3s_ease-out]">
                <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-3.5 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <p className="text-[14.5px] font-semibold text-white/90">No liked songs yet</p>
                <p className="text-[12px] text-white/40 mt-1 max-w-xs leading-relaxed">
                  Tap the heart icon on any remix or song to add it to your Liked collection!
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-white/30">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mb-3"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <p className="text-sm">No tracks found</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
