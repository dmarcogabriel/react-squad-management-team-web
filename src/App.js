import React from 'react';
import Routes from './Routes';
import './global.scss';
import { SquadProvider } from './contexts/Squad';
import { PlayersProvider } from './contexts/Players';

const App = () => {
  return (
    <SquadProvider>
      <PlayersProvider>
        <Routes />
      </PlayersProvider>
    </SquadProvider>
  );
};

export default App;
