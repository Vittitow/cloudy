import { QuoteRequest } from "src/lib/quote-api";

export async function getQuotes(request: QuoteRequest) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  };

  const response = await fetch('/api/quotes', options);

  return await response.json();
}
