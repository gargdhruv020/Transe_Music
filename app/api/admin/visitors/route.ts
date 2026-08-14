import { NextResponse } from "next/server";
import { headers } from "next/headers";

// Global in-memory fallback cache (lasts as long as the serverless function is warm)
let inMemoryVisitors: any[] = [];
const MAX_LOGS = 100;

// Dynamic imports helper for @vercel/kv (avoids errors if not installed/configured)
async function getKVClient() {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      return kv;
    } catch (e) {
      console.warn("Failed to import @vercel/kv, using in-memory fallback:", e);
    }
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-real-ip") || headersList.get("x-forwarded-for") || "127.0.0.1";
    const city = headersList.get("x-vercel-ip-city") ? decodeURIComponent(headersList.get("x-vercel-ip-city") || "") : "Local / Unknown";
    const region = headersList.get("x-vercel-ip-country-region") || "";
    const country = headersList.get("x-vercel-ip-country") || "Local";
    const userAgent = headersList.get("user-agent") || "Unknown Browser";

    let payload: any = {};
    try {
      payload = await request.json();
    } catch (e) {}

    const newVisitor = {
      ip: ip.split(",")[0].trim(), // Get client IP
      city,
      region,
      country,
      userAgent,
      page: payload.page || "/",
      timestamp: Date.now()
    };

    const kv = await getKVClient();
    if (kv) {
      // Log to Vercel KV (Redis list)
      await kv.lpush("transe_music_visitors", JSON.stringify(newVisitor));
      await kv.ltrim("transe_music_visitors", 0, MAX_LOGS - 1);
    } else {
      // Log to in-memory array
      inMemoryVisitors.unshift(newVisitor);
      if (inMemoryVisitors.length > MAX_LOGS) {
        inMemoryVisitors = inMemoryVisitors.slice(0, MAX_LOGS);
      }
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("Log visitor error:", e.message);
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const passcode = searchParams.get("passcode");

    // Secure owner passcode check
    if (passcode !== "dhruv123") {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const kv = await getKVClient();
    let visitors = [];
    let storageType = "In-Memory Fallback (Temporary)";

    if (kv) {
      const rawList = await kv.lrange("transe_music_visitors", 0, -1);
      visitors = rawList.map((item: any) => (typeof item === "string" ? JSON.parse(item) : item));
      storageType = "Vercel KV Redis (Persistent)";
    } else {
      visitors = inMemoryVisitors;
    }

    return NextResponse.json({
      success: true,
      storageType,
      count: visitors.length,
      visitors
    });
  } catch (e: any) {
    console.error("Fetch visitors error:", e.message);
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
