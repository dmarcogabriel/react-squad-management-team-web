import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewSquad from '..';

jest.mock('axios');

describe('<NewSquad />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewSquad location={{ search: '' }} />, div);
  });

  it('should matches snapshot', () => {
    expect(
      renderer.create(<NewSquad location={{ search: '' }} />).toJSON()
    ).toMatchSnapshot();
  });
});
