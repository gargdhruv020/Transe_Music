"use client";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function VortexiaHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full my-8 select-none pointer-events-none">
      {/* Soft radial purple back-light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] sm:w-[600px] sm:h-[150px] bg-fuchsia-600/30 blur-[60px] rounded-[100%]" />

      <h1
        className={`${orbitron.className} relative text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[16px] text-transparent z-10 animate-[pulse_4s_ease-in-out_infinite]`}
        style={{
          WebkitTextStroke: "2px #d946ef",
          textShadow: `
            0 0 10px rgba(192, 38, 211, 0.5),
            0 0 20px rgba(192, 38, 211, 0.5),
            0 0 40px rgba(168, 85, 247, 0.6),
            0 0 80px rgba(168, 85, 247, 0.4)
          `,
        }}
      >
        Vortexia
      </h1>

      {/* Optional sub-branding or grid overlay effect */}
      <div 
        className="absolute inset-0 z-20 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(rgba(217, 70, 239, 0.4) 1px, transparent 1px)",
          backgroundSize: "4px 4px"
        }}
      />
    </div>
  );
}
