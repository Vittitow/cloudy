export interface QuoteRequest {
  cpu_cores: number;
  memory: number;
  disk_space: number;
  network_bandwidth: number;
  disk_bandwidth: number;
}

export interface QuoteResponse extends QuoteRequest {
  provider: Provider;
  cost: number;
  capacity: number;
}

export interface Provider {
  name: string;
  url: string;
}

const providers: Provider[] = [
  { name: 'Amazon Web Services', url: 'https://aws.amazon.com/' },
  { name: 'Microsoft Azure', url: 'https://azure.microsoft.com/en-us/' },
  { name: 'Oracle Cloud', url: 'https://www.oracle.com/cloud/' },
  { name: 'Google Cloud Platform', url: 'https://cloud.google.com/' },
  { name: 'Alibaba Cloud', url: 'https://www.alibabacloud.com/' },
];

export default async function getQuotes(request: QuoteRequest) {
  const quotes: QuoteResponse[] = [];
  const promises = providers.map((provider) =>
    providerQuote(provider, request).then((data) => quotes.push(data))
  );

  await Promise.all(promises);

  return quotes;
}

async function providerQuote(provider: Provider, request: QuoteRequest) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...request,
      provider: provider,
      cost: 1,
      capacity: 1,
    }),
  };

  const response = await fetch('https://postman-echo.com/post', options);
  const data = await response.json();

  return data.json;
}
