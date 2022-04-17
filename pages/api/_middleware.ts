import type { NextRequest } from 'next/server';
import getQuotes from 'src/lib/quote-api';


export default async function middleware(
  request: NextRequest
) {

  if(request.nextUrl.pathname === '/api/quotes' && request.method === 'POST') {
    const data = await request.json();
    const quotes = await getQuotes(data);

    return new Response(JSON.stringify(quotes, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
}