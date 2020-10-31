import React from 'react';
import cn from 'classnames';
import Player from '../Player';

const Formation = ({ formation = [], onDropPlayer }) => {
  return (
    <div
      data-testid="formation"
      className={cn(
        'bg-gradient-to-t from-secondary-dark to-secondary-light',
        'rounded-sm p-2 mb-5 justify-center'
      )}
    >
      {formation.map(({ players, rowNumber, id }, i) => (
        <div
          data-testid={`formation-row-${id}`}
          className={`grid grid-cols-3 grid-rows-${rowNumber > 3 ? '2' : '1'}`}
          key={`r${String(i)}`}
        >
          {players.map((player) => (
            <div
              data-testid={`formation-player-${player.position}`}
              key={player.position}
              className="m-2 text-center"
            >
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
