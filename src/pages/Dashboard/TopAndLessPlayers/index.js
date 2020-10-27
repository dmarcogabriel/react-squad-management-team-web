import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import { usePlayers } from '../../../contexts/Players';
import Content from './Content';

const TopAndLessPlayers = () => {
  const [mostPickedPlayer, setMostPickedPlayer] = useState(null);
  const [lessPickedPlayer, setLessPickedPlayer] = useState(null);

  const [players] = usePlayers();

  useEffect(() => {
    if (players && players.length) {
      const allPlayers = lodash.groupBy(players, 'player_id');

      const a = Object.keys(allPlayers).map((k) => allPlayers[k]);

      const [mostPicked] = a.reduce((b, c) => (b.length > c.length ? b : c));

      const [lessPicked] = a.reduce((b, c) => (b.length > c.length ? c : b));

      setMostPickedPlayer(mostPicked);
      setLessPickedPlayer(lessPicked);
    }
  }, []);

  return (
    <div className="rounded-lg flex flex-col md:flex-row shadow-lg bg-gradient-to-t from-secondary-dark to-secondary-light text-white mb-5">
      <Content
        className="border-b-2 md:border-r-2 md:border-b-0 border-opacity-25 border-white"
        playerName={mostPickedPlayer && mostPickedPlayer.display_name}
        percentage="0%"
        title="Most picked player"
      />

      <Content
        playerName={lessPickedPlayer && lessPickedPlayer.display_name}
        percentage="0%"
        title="Less picked player"
      />
    </div>
  );
};

export default TopAndLessPlayers;
