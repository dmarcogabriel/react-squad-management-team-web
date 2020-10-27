import React, { createContext, useContext, useState } from 'react';

const Context = createContext([]);

export const useSquad = () => useContext(Context);

export const SquadProvider = ({ children }) => {
  const squadState = useState([]);

  return <Context.Provider value={squadState}>{children}</Context.Provider>;
};
