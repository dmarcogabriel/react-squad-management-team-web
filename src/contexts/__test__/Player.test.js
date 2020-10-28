import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { PlayersProvider, usePlayers } from '../Players';

describe('Player context', () => {
  it('should add one player to players list', () => {
    const wrapper = ({ children }) => (
      <PlayersProvider>{children}</PlayersProvider>
    );

    const { result } = renderHook(() => usePlayers(), { wrapper });

    const [, setPlayers] = result.current;

    act(() => {
      setPlayers([
        {
          id: 'm1',
          player: null,
        },
      ]);
    });

    expect(result.current[0].length).toBe(1);
  });

  it('should add three players to players list', () => {
    const wrapper = ({ children }) => (
      <PlayersProvider>{children}</PlayersProvider>
    );

    const { result } = renderHook(() => usePlayers(), { wrapper });

    const [, setPlayers] = result.current;

    act(() => {
      setPlayers([
        {
          id: 'm1',
          player: null,
        },
        {
          id: 'm2',
          player: null,
        },
        {
          id: 'm3',
          player: null,
        },
      ]);
    });

    expect(result.current[0].length).toBe(3);
  });
});
