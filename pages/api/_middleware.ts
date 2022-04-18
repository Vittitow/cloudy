import type { NextRequest } from "next/server";
import getQuotes from "@libs/quote-api";

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/api/status") {
    return new Response("Hello World!");
  }

  if (request.nextUrl.pathname === "/api/quotes") {
    const {
      nextUrl: { search },
    } = request;

    const params: any = Object.fromEntries(
      new URLSearchParams(search).entries()
    );

    const quotes = await getQuotes(params);

    return new Response(JSON.stringify(quotes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
