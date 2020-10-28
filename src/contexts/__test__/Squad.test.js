import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { SquadProvider, useSquad } from '../Squad';

const mockSquad = {
  id: '1',
  name: 'mock',
  description: 'Some description',
  webSite: 'https://test.com',
  type: 'Test',
  formation: [],
  tags: ['test', 'test2'],
  ageAvg: 23,
};

describe('Player context', () => {
  it('should add one player to players list', () => {
    const wrapper = ({ children }) => <SquadProvider>{children}</SquadProvider>;

    const { result } = renderHook(() => useSquad(), { wrapper });

    const [, setSquads] = result.current;

    act(() => {
      setSquads([mockSquad]);
    });

    const [squads] = result.current;

    expect(squads).toEqual([mockSquad]);
  });
});
