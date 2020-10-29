import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Formation from '..';

const mockFormation352 = [
  {
    id: 'c1',
    colNumber: 3,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl2',
        player: null,
      },
      {
        position: 'pl3',
        player: null,
      },
    ],
  },
  {
    id: 'c2',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl12',
        player: null,
      },
      {
        position: 'pl3',
        player: null,
      },
      {
        position: 'pl4',
        player: null,
      },
      {
        position: 'pl5',
        player: null,
      },
    ],
  },
  {
    id: 'c3',
    colNumber: 2,
    players: [
      {
        position: 'pl1',
        player: null,
      },
      {
        position: 'pl12',
        player: null,
      },
    ],
  },
];

describe('<Formation />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Formation />, div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<Formation formation={mockFormation352} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
