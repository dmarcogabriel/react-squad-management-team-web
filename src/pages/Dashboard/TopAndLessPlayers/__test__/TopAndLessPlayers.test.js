import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TopAndLessPlayers from '..';

jest.mock('contexts/Players', () => ({
  usePlayers: () => [
    [
      {
        player_id: '1',
        display_name: 'Mock Player',
      },
      {
        player_id: '1',
        display_name: 'Mock Player',
      },
      {
        player_id: '1',
        display_name: 'Mock Player',
      },
      {
        player_id: '2',
        display_name: 'Mock Player',
      },
    ],
  ],
}));

describe('<TopAndLessPlayers />', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopAndLessPlayers />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders most and less picked players', () => {
    const { getByTestId } = render(<TopAndLessPlayers />);

    const mostPickedPlayer = getByTestId('most-picked');
    const lessPickedPlayer = getByTestId('less-picked');

    expect(mostPickedPlayer).toBeInTheDocument();
    expect(lessPickedPlayer).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    expect(renderer.create(<TopAndLessPlayers />).toJSON()).toMatchSnapshot();
  });
});
