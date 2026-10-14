import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q');
  const apiKey = process.env.NEXT_PUBLIC_SERPAPI_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'No API key' }, { status: 400 });
  }

  if (!query) {
    return NextResponse.json({ error: 'No query' }, { status: 400 });
  }

  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&location=United+States&hl=en&gl=us&api_key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}