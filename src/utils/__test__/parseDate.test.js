import { parseDate } from '../parseDate';

describe('parseDate util test', () => {
  it('should return ISO date', () => {
    const date = parseDate('30/12/2003');

    expect(date).toEqual('2003-12-30');
  });

  it('should return null', () => {
    const date = parseDate();

    expect(date).toEqual(null);
  });
});
