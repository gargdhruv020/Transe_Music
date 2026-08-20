import { NextResponse } from 'next/server';
import ytdl from '@distube/ytdl-core';

// This must run in Node.js runtime, not Edge, because ytdl-core uses Node built-ins
export const runtime = 'nodejs';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: videoId } = await params;
    if (!videoId) return NextResponse.json({ error: "No ID provided" }, { status: 400 });

    const info = await ytdl.getInfo(videoId);
    
    // Choose the best audio format
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio', filter: 'audioonly' });

    if (!format || !format.url) {
      return NextResponse.json({ error: "No audio format found" }, { status: 404 });
    }

    return NextResponse.json({ url: format.url, title: info.videoDetails.title });
  } catch (error: any) {
    console.error("Stream API Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
