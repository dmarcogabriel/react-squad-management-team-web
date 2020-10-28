import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Player from '..';

const mockNullPlayer = {};
const mockPlayer = {
  player: {
    display_name: 'Mock Name',
  },
};

const Component = (props) => (
  <DndProvider backend={HTML5Backend}>
    <Player {...props} />
  </DndProvider>
);

describe('<Player />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component player={mockNullPlayer} />, div);
  });

  it('render classes correctly when player is not null', () => {
    const { getByTestId } = render(<Component player={mockPlayer} />);

    const dropZone = getByTestId('drop-player');

    expect(dropZone.className).toEqual(
      'relative rounded-full border-dashed p-8 bg-white inline-block text-white bg-opacity-100 text-primary-dark'
    );
  });

  it('match snapshot', () => {
    expect(shallow(<Component player={mockNullPlayer} />)).toMatchSnapshot();
  });
});
