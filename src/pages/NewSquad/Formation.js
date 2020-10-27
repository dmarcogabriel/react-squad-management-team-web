import React, { useState, useEffect } from 'react';
import Player from './Player';

const Formation = ({ formation = [], onDropPlayer = () => {} }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(formation);
  }, [formation]);

  return (
    <div className="bg-gradient-to-t from-secondary-dark to-secondary-light rounded-sm p-2 mb-5 justify-center">
      {rows.map(({ players, rowNumber, id }, i) => (
        <div
          className={`grid grid-cols-3 grid-rows-${rowNumber > 3 ? '2' : '1'}`}
          key={`r${String(i)}`}
        >
          {players.map((player) => (
            <div key={player.position} className="m-2 text-center">
              <Player
                player={player}
                onDropPlayer={(playerId) =>
                  onDropPlayer(playerId, id, player.position)
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Formation;
