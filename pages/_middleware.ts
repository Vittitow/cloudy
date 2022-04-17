import type { NextFetchEvent, NextRequest } from 'next/server';
import getLaunches from '../src/lib/launches'

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  if(request.nextUrl.pathname === '/api/launches') {
    const launches = await getLaunches();

    return new Response(JSON.stringify(launches, null, 4), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}