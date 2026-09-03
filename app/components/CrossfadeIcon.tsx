"use client";

import React from "react";

export default function CrossfadeIcon({ active }: { active: boolean }) {
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
      className={active ? "text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" : "text-white/40"}
    >
      <title>{active ? "Smart Crossfade (5s): ON" : "Smart Crossfade (5s): OFF"}</title>
      {/* Wave fading down */}
      <path d="M2 7c4 0 4 8 8 8s4-8 8-8" strokeDasharray="2.5 2" />
      {/* Wave fading up */}
      <path d="M2 17c4 0 4-8 8-8s4 8 8 8" />
    </svg>
  );
}
