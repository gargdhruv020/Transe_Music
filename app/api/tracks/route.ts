import { NextRequest, NextResponse } from "next/server";
import { tracks, Track } from "@/app/data/tracks";

export const runtime = "nodejs";

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\(\)\[\]\{\}]/g, "")
    .replace(/[\-_/\\:]/g, " ")
    .replace(/\s+/g, "-");
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const tab = searchParams.get("tab") || "all";
    const q = (searchParams.get("q") || "").toLowerCase().trim();
    const limit = parseInt(searchParams.get("limit") || "0", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    let filtered = tracks.filter((t) => {
      if (tab === "club") return !!t.isClub;
      if (tab === "16d") return !!t.isSpatial;
      if (tab === "global") return !!t.isGlobal;
      if (tab === "goa") return !!t.isGoa;
      if (tab === "all-remix") return !!t.isRemix;
      if (tab === "remix") return !!t.isRemix && !t.isIndoHouse && !t.isSufi && !t.isAfro && !t.isEAndAAfro && !t.isX && !t.isHustle && !t.isClub;
      if (tab === "ktrance") return !!t.isKTrance;
      if (tab === "indo-house") return !!t.isIndoHouse;
      if (tab === "sufi") return !!t.isSufi;
      if (tab === "afro") return !!t.isAfro;
      if (tab === "ea-afro") return !!t.isEAndAAfro;
      if (tab === "x") return !!t.isX;
      if (tab === "hustle") return !!t.isHustle;
      return true;
    });

    if (q) {
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.artist.toLowerCase().includes(q) ||
          t.film.toLowerCase().includes(q)
      );
    }

    const seenSlugs = new Set<string>();
    const seenAudio = new Set<string>();
    const distinctTracks: Track[] = [];

    for (const t of filtered) {
      const slug = toSlug(t.title);
      const audioKey = t.youtubeId ? `yt:${t.youtubeId.trim()}` : (t.audioUrl ? `url:${t.audioUrl.trim()}` : `id:${t.id}`);

      if (!seenSlugs.has(slug) && !seenAudio.has(audioKey)) {
        seenSlugs.add(slug);
        seenAudio.add(audioKey);
        distinctTracks.push(t);
      }
    }

    const total = distinctTracks.length;
    let results = distinctTracks;
    if (offset > 0 || limit > 0) {
      const start = Math.max(0, offset);
      const end = limit > 0 ? start + limit : undefined;
      results = distinctTracks.slice(start, end);
    }

    return NextResponse.json(
      {
        success: true,
        total,
        count: results.length,
        offset,
        limit: limit > 0 ? limit : total,
        tracks: results,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: any) {
    console.error("Tracks API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, artist, film, youtubeId, audioUrl } = body;

    if (!title || !artist) {
      return NextResponse.json(
        { success: false, error: "Both 'title' and 'artist' are required fields." },
        { status: 400 }
      );
    }

    const newSlug = toSlug(title);
    const newAudioKey = youtubeId ? `yt:${youtubeId.trim()}` : (audioUrl ? `url:${audioUrl.trim()}` : null);

    const isDuplicateTitle = tracks.some((t) => toSlug(t.title) === newSlug);
    const isDuplicateAudio = newAudioKey && tracks.some((t) => {
      const existingAudio = t.youtubeId ? `yt:${t.youtubeId.trim()}` : (t.audioUrl ? `url:${t.audioUrl.trim()}` : null);
      return existingAudio === newAudioKey;
    });

    if (isDuplicateTitle || isDuplicateAudio) {
      return NextResponse.json(
        {
          success: false,
          error: `Conflict: Song already exists in database with identical ${
            isDuplicateTitle ? "title ('" + title + "')" : "audio source ('" + (youtubeId || audioUrl) + "')"
          }.`,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Track validated successfully and ready for ingestion.",
        slug: newSlug,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process track creation." },
      { status: 500 }
    );
  }
}
