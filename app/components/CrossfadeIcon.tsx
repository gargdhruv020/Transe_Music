"use client";

import React from "react";

export default function CrossfadeIcon({
  active,
  duration = 4,
}: {
  active: boolean;
  duration?: number;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          active
            ? "text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
            : "text-white/40"
        }
      >
        <title>{active ? `Smart Crossfade (${duration}s): ON` : `Smart Crossfade (${duration}s): OFF`}</title>
        {/* Wave fading down */}
        <path d="M2 7c4 0 4 8 8 8s4-8 8-8" strokeDasharray="2.5 2" />
        {/* Wave fading up */}
        <path d="M2 17c4 0 4-8 8-8s4 8 8 8" />
      </svg>
      {active && (
        <span className="absolute -bottom-1 -right-1 text-[7.5px] font-extrabold text-[var(--color-accent)] leading-none select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {duration}s
        </span>
      )}
    </div>
  );
}

