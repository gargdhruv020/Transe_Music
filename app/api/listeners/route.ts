import { NextRequest, NextResponse } from "next/server";

interface ActiveUser {
  name: string;
  color: string;
  mood: string;
  timestamp: number;
}

const activeSessions = new Map<string, ActiveUser>();

const names = [
  "SonicRaver", "NeonGlow", "AcidBass", "PsyFlyer", "TranceVibe",
  "BeatDrop", "LaserBeam", "BassHead", "EchoPulse", "StrobeLight",
  "NeonZenith", "AuraVibe", "Supernova", "FluxDrum", "CypherTech",
  "HyperDrop", "LaserVortex", "EclipsePsy", "SpectrumBeats", "HelixClub"
];

const moods = ["🕺", "🎧", "🔥", "😎", "👽", "⚡", "🥳", "🔊", "🔮", "💃", "🌀", "✨"];

function generateUser(sessionId: string) {
  // Generate deterministic name, color, and mood index based on the session ID
  const hash = sessionId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const name = names[hash % names.length] + " #" + (100 + (hash % 900));
  const colors = [
    "#ff007f", // Neon pink
    "#00f0ff", // Neon cyan
    "#9d4edd", // Neon purple
    "#39ff14", // Neon green
    "#ff073a", // Neon red
    "#ffe700", // Neon yellow
  ];
  const color = colors[hash % colors.length];
  const mood = moods[hash % moods.length];
  return { name, color, mood };
}

function cleanupSessions() {
  const now = Date.now();
  for (const [id, session] of activeSessions.entries()) {
    if (now - session.timestamp > 15000) {
      activeSessions.delete(id);
    }
  }
}

export async function GET() {
  cleanupSessions();
  const usersList = Array.from(activeSessions.values()).map((u) => ({
    name: u.name,
    color: u.color,
    mood: u.mood,
  }));
  return NextResponse.json({ count: activeSessions.size, users: usersList });
}

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();
    if (sessionId) {
      const existing = activeSessions.get(sessionId);
      if (existing) {
        existing.timestamp = Date.now();
      } else {
        const { name, color, mood } = generateUser(sessionId);
        activeSessions.set(sessionId, { name, color, mood, timestamp: Date.now() });
      }
    }
    cleanupSessions();
    const usersList = Array.from(activeSessions.values()).map((u) => ({
      name: u.name,
      color: u.color,
      mood: u.mood,
    }));
    return NextResponse.json({ count: activeSessions.size, users: usersList });
  } catch (error) {
    cleanupSessions();
    const usersList = Array.from(activeSessions.values()).map((u) => ({
      name: u.name,
      color: u.color,
      mood: u.mood,
    }));
    return NextResponse.json({ count: activeSessions.size, users: usersList });
  }
}
