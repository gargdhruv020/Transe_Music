"use client";

import { useState, useRef, useEffect, useMemo, memo } from "react";
import { tracks, type Track } from "@/app/data/tracks";

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
  onSelect,
}: {
  track: Track;
  isActive: boolean;
  activeTab: "all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro";
  onSelect: (trackId: number, mode: "all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro") => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Clicked Track Title:", track.title, "ID:", track.id);
        console.log("Clicked Event Target:", e.target, "CurrentTarget:", e.currentTarget);
        onSelect(track.id, activeTab);
      }}
      data-active={isActive ? "true" : "false"}
      className={`track-row playlist-track-item w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left relative cursor-pointer select-none pointer-events-auto ${
        isActive ? "active" : ""
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
  activeTab?: "all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro";
  onTogglePlay: () => void;
  onSelect: (trackId: number, mode: "all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro") => void;
  onClose: () => void;
  onTabChange?: (tab: "all" | "16d" | "global" | "goa" | "remix" | "ktrance" | "indo-house" | "sufi" | "afro") => void;
  isRemixOnly?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  // Scroll active track into view on mount or tab change
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Use requestAnimationFrame to ensure the DOM is painted first
    requestAnimationFrame(() => {
      const activeElement = container.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    });
  }, [activeTab]);

  // Memoize filtered tracks to avoid re-filtering on every render
  const filteredTracks = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return tracks.filter((t) => {
      if (isRemixOnly) {
        if (!t.isRemix) return false;
        if (activeTab === "indo-house" && !(t as any).isIndoHouse) return false;
        if (activeTab === "sufi" && !(t as any).isSufi) return false;
        if (activeTab === "afro" && !(t as any).isAfro) return false;
      } else {
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
  }, [searchQuery, activeTab, isRemixOnly]);

  // Memoize counts
  const spatialCount = useMemo(() => tracks.filter(t => t.isSpatial).length, []);
  const globalCount = useMemo(() => tracks.filter(t => t.isGlobal).length, []);
  const goaCount = useMemo(() => tracks.filter(t => t.isGoa).length, []);
  const remixCount = useMemo(() => tracks.filter(t => t.isRemix).length, []);
  const ktranceCount = useMemo(() => tracks.filter(t => t.isKTrance).length, []);

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
              onClick={() => onTabChange?.("remix")}
              className={`flex-shrink-0 snap-start px-4 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeTab === "remix"
                  ? "bg-white/10 border-white/20 text-white shadow-md"
                  : "bg-transparent border-transparent text-[#9ca3af] hover:text-white"
              }`}
            >
              All Remixes
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
              placeholder="Search tracks, artists, films..."
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
            return (
              <TrackRow
                key={t.id}
                track={t}
                isActive={isActive}
                activeTab={activeTab}
                onSelect={onSelect}
              />
            );
          })}

          {filteredTracks.length === 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
}
