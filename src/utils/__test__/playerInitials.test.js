import { showPlayerInitials } from '../playersInitials';

describe('playerInitials util tests', () => {
  it('should return initial letters from a giving name', () => {
    const result = showPlayerInitials('John Doe');

    expect(result).toEqual('JD');
  });
});
