import React from "react";
import { getQuotes } from "./recommendation";
import { QuoteResponse } from "src/lib/quote-api";

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
      setQuotes(data);
      setHasData(true);
    });
  }

  if (!hasData) return <div>Loading...</div>;

  return (
    <div>
      <div>Cloud Provider Recommendations</div>
      <div>
        {quotes.map((val) => (
          <div key={`key-${val.provider.name}`}>
            <div>
              <h3>{val.provider.url}</h3>
              <div>
                <div>
                  <h4>Cost:</h4>
                  <span>{val.cost}</span>
                </div>
                <div>
                  <h4>Capacity:</h4>
                  <span>{val.capacity}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
