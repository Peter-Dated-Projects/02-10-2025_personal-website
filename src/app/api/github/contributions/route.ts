import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Ultrasword";
const CACHE_SECONDS = 3600;

export async function GET() {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      { next: { revalidate: CACHE_SECONDS } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions" },
        { status: 503 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 503 }
    );
  }
}
