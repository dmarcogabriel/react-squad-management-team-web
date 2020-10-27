import React from 'react';
import Card from '../../common/Card';

const TopFive = () => {
  return (
    <Card title="Top 5">
      <div className="flex flex-col md:flex-row mx-2">
        <div className="w-full mb-5 md:mr-8">
          <h2 className="text-base mb-3">Highest avg age</h2>

          <div className="bg-background rounded-lg p-1">
            {Array.from(Array(5)).map((_, i) => (
              <div
                key={String(i)}
                className="flex items-center justify-between px-4 py-2 my-1 bg-white rounded-lg"
              >
                <p className="text-sm">Arsenal FC</p>
                <p className="font-bold text-sm">31.2</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-base mb-3">Lowest avg age</h2>

          <div className="bg-background rounded-lg p-1">
            {Array.from(Array(5)).map((_, i) => (
              <div
                key={String(i)}
                className="flex items-center justify-between px-4 py-2 my-1 bg-white rounded-lg"
              >
                <p className="text-sm">Arsenal FC</p>
                <p className="font-bold text-sm">31.2</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopFive;
