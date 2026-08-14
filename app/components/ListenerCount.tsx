"use client";

import { useState, useEffect } from "react";

export default function ListenerCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Generate a unique session ID for this browser tab
    const sessionId = Math.random().toString(36).substring(2, 11);

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

  return (
    <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
      {/* Pulsing live dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="tabular-nums" suppressHydrationWarning>
        {count} {count === 1 ? "person" : "people"} in ambience
      </span>
    </div>
  );
}
