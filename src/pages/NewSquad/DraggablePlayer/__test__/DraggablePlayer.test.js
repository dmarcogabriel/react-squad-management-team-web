import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import renderer from 'react-test-renderer';
import DraggablePlayer from '..';

const mockPlayer = {
  player_id: 'm1',
  fullname: 'Mock Player',
  age: 24,
  nationality: 'Mockland',
};

const Component = (props) => (
  <DndProvider backend={HTML5Backend}>
    <DraggablePlayer {...props} />
  </DndProvider>
);

describe('<DraggablePlayer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Component player={mockPlayer} />, div);
  });

  it('match snapshot', () => {
    expect(
      renderer.create(<Component player={mockPlayer} />).toJSON()
    ).toMatchSnapshot();
  });
});
