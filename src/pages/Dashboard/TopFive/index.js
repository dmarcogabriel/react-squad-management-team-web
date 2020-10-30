import React, { useEffect, useState } from 'react';
import Card from '../../../common/Card';
import { useSquad } from '../../../contexts/Squad';

const TopFive = () => {
  const [highestAvgAge, setHighestAvgAge] = useState([]);
  const [lowestAvgAge, setLowestAvgAge] = useState([]);

  const [squads] = useSquad();

  const getPlayersAverage = () => {
    const lowestAvg = squads
      .sort((sq1, sq2) => sq1.ageAvg - sq2.ageAvg)
      .slice(0, 5);

    const highestAvg = squads
      .sort((sq1, sq2) => sq1.ageAvg - sq2.ageAvg)
      .reverse()
      .slice(0, 5);

    setHighestAvgAge(highestAvg);
    setLowestAvgAge(lowestAvg);
  };

  useEffect(() => {
    getPlayersAverage();
  }, []);

  return (
    <Card title="Top 5">
      <div className="flex flex-col md:flex-row mx-2">
        <div className="w-full mb-5 md:mr-8">
          <h2 className="text-base mb-3">Highest avg age</h2>

          <div
            data-testid="highest-avgs"
            className="bg-background rounded-lg p-1"
          >
            {highestAvgAge.map((squad) => (
              <div
                key={squad.id}
                className="flex items-center justify-between px-4 py-2 my-1 bg-white rounded-lg"
              >
                <p data-testid={`highest-${squad.id}-name`} className="text-sm">
                  {squad.name}
                </p>
                <p className="font-bold text-sm">{squad.ageAvg.toFixed(1)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-base mb-3">Lowest avg age</h2>

          <div
            data-testid="lowest-avgs"
            className="bg-background rounded-lg p-1"
          >
            {lowestAvgAge.map((squad) => (
              <div
                key={squad.id}
                className="flex items-center justify-between px-4 py-2 my-1 bg-white rounded-lg"
              >
                <p data-testid={`lowest-${squad.id}-name`} className="text-sm">
                  {squad.name}
                </p>
                <p className="font-bold text-sm">{squad.ageAvg.toFixed(1)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopFive;
