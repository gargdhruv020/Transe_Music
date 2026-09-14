import { NextRequest, NextResponse } from "next/server";
import { getOrCreateUserId, USER_COOKIE_NAME } from "@/app/utils/userSession";
import { tracks } from "@/app/data/tracks";

export const runtime = "nodejs";

// In-memory isolated storage fallback for serverless instances / local development
// Key: userId -> Set<trackId>
const memoryUserLikes = new Map<string, Set<number>>();

/**
 * Helper to fetch likes for a specific user ID
 */
async function getUserLikes(userId: string): Promise<Set<number>> {
  // Check if Vercel KV is available
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      const members = await kv.smembers(`user_likes:${userId}`);
      if (Array.isArray(members)) {
        return new Set(members.map(Number).filter((n) => !isNaN(n)));
      }
    } catch (e) {
      console.warn("Vercel KV fetch error, falling back to memory:", e);
    }
  }

  if (!memoryUserLikes.has(userId)) {
    memoryUserLikes.set(userId, new Set());
  }
  return memoryUserLikes.get(userId)!;
}

/**
 * Helper to set or toggle like for a user
 */
async function setUserLike(
  userId: string,
  trackId: number,
  action?: "like" | "unlike" | "toggle"
): Promise<{ isLiked: boolean; userSet: Set<number> }> {
  const userSet = await getUserLikes(userId);
  let isLiked: boolean;

  if (action === "like") {
    userSet.add(trackId);
    isLiked = true;
  } else if (action === "unlike") {
    userSet.delete(trackId);
    isLiked = false;
  } else {
    // Default: toggle
    if (userSet.has(trackId)) {
      userSet.delete(trackId);
      isLiked = false;
    } else {
      userSet.add(trackId);
      isLiked = true;
    }
  }

  // Persist to Vercel KV if configured
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      if (isLiked) {
        await kv.sadd(`user_likes:${userId}`, trackId);
      } else {
        await kv.srem(`user_likes:${userId}`, trackId);
      }
    } catch (e) {
      console.warn("Vercel KV persist error:", e);
    }
  }

  memoryUserLikes.set(userId, userSet);
  return { isLiked, userSet };
}

/**
 * GET /api/likes
 * Fetches the isolated list of liked songs for the current authenticated user.
 */
export async function GET(request: NextRequest) {
  try {
    const { userId, isNew } = getOrCreateUserId(request);
    const userLikes = await getUserLikes(userId);
    const likedIds = Array.from(userLikes);

    const includeTracks = request.nextUrl.searchParams.get("includeTracks") === "true";
    let likedTracks: any[] = [];
    if (includeTracks) {
      const trackMap = new Map(tracks.map((t) => [t.id, t]));
      likedTracks = likedIds.map((id) => trackMap.get(id)).filter(Boolean);
    }

    const response = NextResponse.json(
      {
        success: true,
        userId,
        count: likedIds.length,
        likedIds,
        ...(includeTracks ? { tracks: likedTracks } : {}),
      },
      { status: 200 }
    );

    // If new user session was created, attach secure cookie
    if (isNew) {
      response.cookies.set({
        name: USER_COOKIE_NAME,
        value: userId,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }

    return response;
  } catch (error: any) {
    console.error("GET /api/likes error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch user likes" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/likes
 * Toggles or updates a like for the current authenticated user.
 * Body: { trackId: number, action?: "like" | "unlike" | "toggle" }
 */
export async function POST(request: NextRequest) {
  try {
    const { userId, isNew } = getOrCreateUserId(request);
    const body = await request.json();
    const trackId = parseInt(body.trackId, 10);

    if (isNaN(trackId) || trackId <= 0) {
      return NextResponse.json(
        { success: false, error: "Valid numeric 'trackId' is required." },
        { status: 400 }
      );
    }

    const action = body.action as "like" | "unlike" | "toggle" | undefined;
    const { isLiked, userSet } = await setUserLike(userId, trackId, action);
    const likedIds = Array.from(userSet);

    const response = NextResponse.json(
      {
        success: true,
        userId,
        trackId,
        isLiked,
        count: likedIds.length,
        likedIds,
      },
      { status: 200 }
    );

    if (isNew) {
      response.cookies.set({
        name: USER_COOKIE_NAME,
        value: userId,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }

    return response;
  } catch (error: any) {
    console.error("POST /api/likes error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update like status" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/likes
 * Removes a like for the current user.
 */
export async function DELETE(request: NextRequest) {
  try {
    const { userId } = getOrCreateUserId(request);
    const searchParams = request.nextUrl.searchParams;
    let trackId = parseInt(searchParams.get("trackId") || "0", 10);

    if (!trackId) {
      try {
        const body = await request.json();
        trackId = parseInt(body.trackId, 10);
      } catch (_) {}
    }

    if (isNaN(trackId) || trackId <= 0) {
      return NextResponse.json(
        { success: false, error: "Valid numeric 'trackId' is required." },
        { status: 400 }
      );
    }

    const { userSet } = await setUserLike(userId, trackId, "unlike");
    return NextResponse.json({
      success: true,
      userId,
      trackId,
      isLiked: false,
      count: userSet.size,
      likedIds: Array.from(userSet),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete like" },
      { status: 500 }
    );
  }
}
