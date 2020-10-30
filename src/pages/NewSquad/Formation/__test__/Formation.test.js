import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Formation from '..';

const Component = (props) => (
  <DndProvider backend={HTML5Backend}>
    <Formation {...props} />
  </DndProvider>
);

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

const mockFormation3223 = [
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
        position: 'pl6',
        player: null,
      },
      {
        position: 'pl7',
        player: null,
      },
    ],
  },
  {
    id: 'c4',
    colNumber: 2,
    players: [
      {
        position: 'pl8',
        player: null,
      },
      {
        position: 'pl9',
        player: null,
      },
      {
        position: 'pl10',
        player: null,
      },
    ],
  },
];

describe('<Formation />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });

  it('renders formation 3-2-2-3 correctly', () => {
    const { getByTestId } = render(<Component formation={mockFormation3223} />);

    const row = getByTestId('formation');
    const row1 = getByTestId('formation-row-c1');
    const row2 = getByTestId('formation-row-c2');
    const row3 = getByTestId('formation-row-c3');
    const row4 = getByTestId('formation-row-c4');

    expect(row.childElementCount).toEqual(4);

    expect(row1.childElementCount).toEqual(3);
    expect(row2.childElementCount).toEqual(2);
    expect(row3.childElementCount).toEqual(2);
    expect(row4.childElementCount).toEqual(3);
  });

  it('renders formation 3-5-2 correctly', () => {
    const { getByTestId } = render(<Component formation={mockFormation352} />);

    const row = getByTestId('formation');
    const row1 = getByTestId('formation-row-c1');
    const row2 = getByTestId('formation-row-c2');
    const row3 = getByTestId('formation-row-c3');

    expect(row.childElementCount).toEqual(3);

    expect(row1.childElementCount).toEqual(3);
    expect(row2.childElementCount).toEqual(5);
    expect(row3.childElementCount).toEqual(2);
  });

  // it('executes drop event correctly', () => {
  //   const mockCallback = jest.fn((playerId, id, playerPosition) => ({
  //     playerId,
  //     id,
  //     playerPosition,
  //   }));
  //   const mockPlayer = {
  //     player_id: 'm1',
  //     fullname: 'Mock Player',
  //     age: 24,
  //     nationality: 'Mockland',
  //   };

  //   const { getByTestId } = render(
  //     <Component formation={mockFormation3223} onDropPlayer={mockCallback} />
  //   );

  //   const player = getByTestId('formation-player-pl1');

  //   fireEvent.drop(player, {
  //     dataTransfer: {
  //       files: [<DraggablePlayer player={mockPlayer} />, { type: 'player' }],
  //     },
  //   });
  // });

  it('matches snapshot', () => {
    expect(
      renderer.create(<Component formation={mockFormation352} />).toJSON()
    ).toMatchSnapshot();
  });
});
