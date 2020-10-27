import React, { createContext, useContext, useState } from 'react';

const Context = createContext([]);

export const usePlayers = () => useContext(Context);

export const PlayersProvider = ({ children }) => {
  const playersState = useState([]);

  return <Context.Provider value={playersState}>{children}</Context.Provider>;
};
