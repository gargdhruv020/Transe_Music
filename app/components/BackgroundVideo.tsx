"use client";

import { useState, useRef, useEffect } from "react";

const BG_VIDEOS = [
  "/bg/tunnel-1.webm",
  "/bg/tunnel-2.webm",
  "/bg/tunnel-3.webm",
];

export default function BackgroundVideo() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];

  const handleEnded = () => {
    const nextIdx = (currentIdx + 1) % BG_VIDEOS.length;
    const nextSlot = activeSlot === 0 ? 1 : 0;

    if (videoRefs[nextSlot].current) {
      videoRefs[nextSlot].current!.src = BG_VIDEOS[nextIdx];
      videoRefs[nextSlot].current!.load();
      videoRefs[nextSlot]
        .current!.play()
        .then(() => {
          setActiveSlot(nextSlot);
          setCurrentIdx(nextIdx);
        })
        .catch(() => {});
    }
  };

  useEffect(() => {
    // Only attempt video playback if viewport is desktop/landscape width
    if (window.innerWidth >= 640 && videoRefs[0].current) {
      videoRefs[0].current.src = BG_VIDEOS[0];
      videoRefs[0].current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none select-none bg-black">
      {/* ── 1. Mobile Portrait Image Background ────────── */}
      {/* Visible only on mobile/portrait (<640px) */}
      <div 
        className="block sm:hidden absolute inset-0 w-full h-full bg-cover bg-center hero-bg"
        style={{ backgroundImage: "url('/bg/scene-tall.png')" }}
      />

      {/* ── 2. Desktop Video Background ────────────────── */}
      {/* Visible only on desktop/landscape (sm: >=640px) */}
      <div className="hidden sm:block absolute inset-0 w-full h-full">
        {/* Subtle dark tint for UI readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        <video
          ref={videoRefs[0]}
          muted
          playsInline
          autoPlay
          onEnded={activeSlot === 0 ? handleEnded : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeSlot === 0 ? "opacity-100" : "opacity-0"
          }`}
        />

        <video
          ref={videoRefs[1]}
          muted
          playsInline
          autoPlay
          onEnded={activeSlot === 1 ? handleEnded : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeSlot === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}