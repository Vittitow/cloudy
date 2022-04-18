import { QuoteRequest } from "@libs/quote-api";

export async function getQuotes(request: QuoteRequest) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(request),
  };

  const query: string = Object.keys(request)
    .map((key) => key + "=" + request[key])
    .join("&");
    
  const response = await fetch(`/api/quotes?${query}`, options);

  return await response.json();
}
