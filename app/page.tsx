import Clock from "@/app/components/Clock";
import ListenerCount from "@/app/components/ListenerCount";
import Player from "@/app/components/Player";
import CaptionRotator from "@/app/components/CaptionRotator";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* ── 1. Fixed Background ─────────────────────── */}
      <div className="hero-bg" />
      {/* Gradient overlay */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black/65 via-black/20 to-black/95" />

      {/* Dynamic Laser Color Overlay */}
      <div className="fixed inset-0 -z-20 hero-laser-overlay mix-blend-color opacity-[0.22] pointer-events-none" />

      {/* ── 2. Fixed Grain Overlay ──────────────────── */}
      <div className="grain-overlay" />

      {/* ── 3. Fixed Top Row ────────────────────────── */}
      <header className="safe-all fixed top-0 left-0 right-0 z-30 flex items-start justify-between">
        {/* Clock — top left */}
        <div className="safe-left safe-top">
          <Clock />
        </div>

        {/* Listener count — top centre */}
        <div className="safe-top">
          <ListenerCount />
        </div>

        {/* Empty space for right-side balance */}
        <div className="safe-right safe-top w-12" />
      </header>

      {/* ── Spacer (pushes player to bottom) ─────── */}
      <div className="flex-1" />

      {/* ── Centered branding ───────────────────────── */}
      <div className="flex flex-col items-center gap-3 mb-auto mt-[4vh] sm:mt-[6vh] animate-[fade-in_1s_ease-out] select-none pointer-events-none">
        <h1 className="club-title text-6xl sm:text-9xl font-bold text-center" data-text="ट्रांस संगीत">
          ट्रांस संगीत
        </h1>
      </div>

      {/* ── Spacer ──────────────────────────────────── */}
      <div className="flex-1" />

      {/* ── 4. Player (bottom-anchored) ─────────────── */}
      <div className="safe-bottom safe-x w-full flex flex-col items-center pb-20 sm:pb-28 z-20 gap-2">
        <CaptionRotator />
        <Player />
      </div>

      {/* Watermark — bottom right */}
      <div className="fixed bottom-3 right-5 z-30 select-none pointer-events-none text-white/45 text-[11px] font-medium tracking-wide flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.68_0.16_250)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[oklch(0.68_0.16_250)]"></span>
        </span>
        By: Dhruv Garg
      </div>
    </main>
  );
}
