"use client";

import { useState, useEffect, useRef } from "react";

interface User {
  name: string;
  color: string;
  mood: string;
}

export default function ListenerCount() {
  const [count, setCount] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clientSessionId, setClientSessionId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate deterministic client user name locally to label as "(You)"
  const clientUser = clientSessionId ? (() => {
    const hash = clientSessionId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const names = [
      "SonicRaver", "NeonGlow", "AcidBass", "PsyFlyer", "TranceVibe",
      "BeatDrop", "LaserBeam", "BassHead", "EchoPulse", "StrobeLight",
      "NeonZenith", "AuraVibe", "Supernova", "FluxDrum", "CypherTech",
      "HyperDrop", "LaserVortex", "EclipsePsy", "SpectrumBeats", "HelixClub"
    ];
    return names[hash % names.length] + " #" + (100 + (hash % 900));
  })() : null;

  useEffect(() => {
    // Generate a unique session ID for this browser tab
    const sessionId = Math.random().toString(36).substring(2, 11);
    setClientSessionId(sessionId);

    async function pingServer() {
      try {
        const res = await fetch("/api/listeners", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });
        const data = await res.json();
        if (typeof data.count === "number") {
          setCount(data.count);
        }
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        }
      } catch (error) {
        console.error("Failed to ping listeners API:", error);
      }
    }

    // Initial ping on mount
    pingServer();

    // Ping every 8 seconds to keep session alive and retrieve current active count
    const interval = setInterval(pingServer, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative z-40">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[13px] font-medium text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1.5 rounded-full border border-white/[0.05] transition-all cursor-pointer select-none active:scale-[0.98]"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* Pulsing live dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="tabular-nums" suppressHydrationWarning>
          {count} {count === 1 ? "person" : "people"} in ambience
        </span>
        <svg
          className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Glow Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-52 sm:w-56 p-3.5 rounded-2xl glass border border-white/10 shadow-2xl animate-[fade-in_0.2s_ease-out] flex flex-col gap-2.5 max-h-60 overflow-hidden">
          <h4 className="text-[10px] uppercase tracking-widest font-semibold text-white/40 pb-1.5 border-b border-white/5">
            Active in Ambience
          </h4>
          <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2 pr-1">
            {users.length === 0 ? (
              <p className="text-[11px] text-white/30 italic py-2 text-center">No other listeners...</p>
            ) : (
              users.map((u, i) => {
                const isMe = clientUser && u.name === clientUser;
                return (
                  <div key={i} className="flex items-center gap-2 text-left py-0.5">
                    <span className="text-sm select-none">{u.mood}</span>
                    <span
                      style={{ color: u.color }}
                      className="text-xs font-semibold truncate flex-1 tracking-wide"
                    >
                      {u.name} {isMe ? <span className="text-white/40 font-normal">(You)</span> : ""}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
