import React from "react";
import { getQuotes } from "./recommendation";
import { QuoteResponse } from "src/libs/quote-api";

export const Recommendations: React.FC = () => {
  const [quotes, setQuotes] = React.useState<QuoteResponse[]>();
  const [hasData, setHasData] = React.useState(false);

  if (!hasData) {
    getQuotes({
      cpu_cores: 1,
      memory: 100,
      disk_space: 100,
      network_bandwidth: 1000,
      disk_bandwidth: 100,
    }).then((data: QuoteResponse[]) => {
      setQuotes(data.sort((a, b) => a.cost - b.cost));
      setHasData(true);
    });
  }

  if (!hasData) return <div>Loading...</div>;

  return (
    <>
      <section
        className="py-20 xl:py-24 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-9xl">
              Recommendations
            </span>
            <h3 className="mb-4 text-3xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
              Cloud Provider Recommendations
            </h3>
            <p className="mb-12 text-lg md:text-xl text-coolGray-500 font-medium">
              Cost estimates from the top five cloud providers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            {quotes.map((quote) => (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col pt-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
                  <div className="px-8 pb-8">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h3 className="mr-3 text-lg md:text-xl text-coolGray-800 font-medium">
                        {quote.provider.name}
                      </h3>
                      {quote.cost ===
                        Math.min(...quotes.map((item) => item.cost)) && (
                        <span className="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-9xl">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="mb-6">
                      <span className="relative -top-10 right-1 text-3xl text-coolGray-900 font-bold">
                        $
                      </span>
                      <span className="text-6xl md:text-7xl text-coolGray-900 font-semibold">
                        {quote.cost}
                      </span>
                      <span className="inline-block ml-1 text-coolGray-500 font-semibold">
                        per month
                      </span>
                    </div>
                    <p className="mb-6 text-coolGray-400 font-medium">
                      Capacity up to {quote.capacity}
                    </p>
                    <a
                      className="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href={quote.provider.url}
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <ul className="self-start px-8 pt-8">
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <span>✔️ CPU Cores: {quote.cpu_cores}</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <span>✔️ Memory: {quote.memory} GB</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <span>✔️ Disk Space: {quote.disk_space} TB</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <span>
                        ✔️ Network Bandwidth: {quote.network_bandwidth} Gbps
                      </span>
                    </li>
                    <li className="flex items-center text-coolGray-500 font-medium">
                      <span>
                        ✔️ Disk Bandwidth: {quote.disk_bandwidth} Mbps
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
