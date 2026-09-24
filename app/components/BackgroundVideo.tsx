"use client";

import { useEffect, useState, useRef } from "react";

const VIDEOS = [
  "/bg/tunnel-1.webm",
  "/bg/tunnel-3.webm"
];

export default function BackgroundVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play().catch(() => {});
    }
  }, []);

  const handleTimeUpdate = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const fadeDuration = 1.5; // 1.5 seconds crossfade
    
    // When there is only `fadeDuration` seconds left, start playing the next one
    if (video.duration > 0 && video.duration - video.currentTime <= fadeDuration && nextIndex === null) {
      const nextIdx = (index + 1) % VIDEOS.length;
      setNextIndex(nextIdx);
      if (videoRefs.current[nextIdx]) {
        // Just play it, do not force seek (currentTime = 0) here as it causes heavy GPU stalling
        videoRefs.current[nextIdx]!.play().catch(() => {});
      }
    }
  };

  const handleEnded = (index: number) => {
    // When video ends completely, swap current index and remove next index
    if (nextIndex !== null) {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
    } else {
      // Fallback if timeupdate missed it
      const nextIdx = (index + 1) % VIDEOS.length;
      setCurrentIndex(nextIdx);
      if (videoRefs.current[nextIdx]) {
        videoRefs.current[nextIdx]!.play().catch(() => {});
      }
    }
    // Reset the finished video back to start quietly in the background
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="fixed inset-0 z-[-20] overflow-hidden bg-black">
      {VIDEOS.map((src, index) => {
        const isCurrent = index === currentIndex;
        const isNext = index === nextIndex;
        
        let opacity = 0;
        let zIndex = 0;
        
        if (isCurrent) {
          opacity = 1;
          zIndex = 0;
        } else if (isNext) {
          opacity = 1;
          zIndex = 1;
        }

        return (
          <video
            key={src}
            ref={(el) => {
                if (el) videoRefs.current[index] = el;
            }}
            src={src}
            muted
            playsInline
            preload="auto"
            autoPlay={index === 0}
            onTimeUpdate={() => {
                if (isCurrent) handleTimeUpdate(index);
            }}
            onEnded={() => {
                if (isCurrent) handleEnded(index);
            }}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ 
              opacity, 
              zIndex,
              willChange: 'opacity'
            }}
          />
        );
      })}
    </div>
  );
}
