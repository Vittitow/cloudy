import type { NextRequest } from 'next/server';
import getQuotes from '@libs/quote-api';


export default async function middleware(
  request: NextRequest
) {

  if(request.nextUrl.pathname === '/api/status') {
    return new Response('Hello World!');
  }

  if(request.nextUrl.pathname === '/api/quotes' && request.method === 'POST') {
    console.log('/api/quotes');
    const data = await request.json();
    console.log(data);
    const quotes = await getQuotes(data);
    console.log(quotes);

    return new Response(JSON.stringify(quotes), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

}