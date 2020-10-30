import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TopFive from '..';

jest.mock('contexts/Squad', () => ({
  useSquad: () => [
    [
      {
        id: '1',
        ageAvg: 10,
        name: 'Test Highest',
      },
      {
        id: '2',
        ageAvg: 9,
        name: 'Test Middle',
      },
      {
        id: '3',
        ageAvg: 8,
        name: 'Test Middle',
      },
      {
        id: '4',
        ageAvg: 7,
        name: 'Test Middle',
      },
      {
        id: '5',
        ageAvg: 6,
        name: 'Test Lowest',
      },
    ],
  ],
}));

describe('<TopFive />', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopFive />, div);
  });

  it('renders highest and lowest avg squads', () => {
    const { getByTestId, rerender } = render(<TopFive />);

    rerender(<TopFive />);

    const highestAvg = getByTestId('highest-avgs');
    const lowestAvg = getByTestId('lowest-avgs');

    expect(highestAvg.childElementCount).toBe(5);
    expect(lowestAvg.childElementCount).toBe(5);
  });

  it('render squad "Test Highest" first', () => {
    const { getByTestId, rerender } = render(<TopFive />);

    rerender(<TopFive />);

    const lowest = getByTestId('lowest-5-name');
    const highestSquad = getByTestId('highest-1-name');

    expect(highestSquad).toHaveTextContent('Test Highest');
    expect(lowest).toHaveTextContent('Test Lowest');
  });

  it('render squad "Test Lowest" first and "Test Highest" last', () => {
    const { getByTestId, rerender } = render(<TopFive />);

    rerender(<TopFive />);

    const lowest = getByTestId('lowest-1-name');
    const highest = getByTestId('highest-5-name');

    expect(highest).toHaveTextContent('Test Lowest');
    expect(lowest).toHaveTextContent('Test Highest');
  });

  it('match snapshot', () => {
    expect(renderer.create(<TopFive />).toJSON()).toMatchSnapshot();
  });
});
