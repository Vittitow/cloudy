import { QuoteRequest } from '@libs/quote-api';

export async function getQuotes(request: QuoteRequest) {
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
    credentials: 'include'
  };
  
  const response = await fetch(`${process.env.BASE_URL}/api/quotes`, options);

  return await response.json();
}
