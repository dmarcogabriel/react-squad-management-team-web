import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import cn from 'classnames';
import { usePlayers } from '../../../contexts/Players';
import Content from './Content';

const TopAndLessPlayers = () => {
  const [mostPickedPlayer, setMostPickedPlayer] = useState(null);
  const [lessPickedPlayer, setLessPickedPlayer] = useState(null);
  const [mostPickedPercentage, setMostPickedPercentage] = useState(0);
  const [lessPickedPercentage, setLessPickedPercentage] = useState(0);

  const [players] = usePlayers();

  useEffect(() => {
    if (players && players.length) {
      const groupedPlayers = lodash.groupBy(players, 'player_id');

      const groupedPlayersList = Object.keys(groupedPlayers).map(
        (k) => groupedPlayers[k]
      );

      const playerMostPickedOccurrency = groupedPlayersList.reduce((b, c) =>
        b.length > c.length ? b : c
      );
      const playerLessPickedOccurrency = groupedPlayersList.reduce((b, c) =>
        b.length > c.length ? c : b
      );

      setMostPickedPercentage(
        groupedPlayersList.length / playerMostPickedOccurrency.length
      );

      setLessPickedPercentage(
        groupedPlayersList.length / playerLessPickedOccurrency.length
      );

      setMostPickedPlayer(playerMostPickedOccurrency[0]);
      setLessPickedPlayer(playerLessPickedOccurrency[0]);
    }
  }, []);

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row shadow-lg rounded-lg',
        'bg-gradient-to-t from-secondary-dark to-secondary-light',
        'text-white mb-5'
      )}
    >
      <Content
        dataTestid="most-picked"
        className={cn(
          'border-b-2 md:border-r-2',
          'md:border-b-0 border-opacity-25 border-white'
        )}
        playerName={mostPickedPlayer && mostPickedPlayer.display_name}
        percentage={`${mostPickedPercentage.toFixed()}%`}
        title="Most picked player"
      />

      <Content
        dataTestid="less-picked"
        playerName={lessPickedPlayer && lessPickedPlayer.display_name}
        percentage={`${lessPickedPercentage.toFixed()}%`}
        title="Less picked player"
      />
    </div>
  );
};

export default TopAndLessPlayers;
