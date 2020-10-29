import React from 'react';
import ReactDOM from 'react-dom';
import NewSquad from '..';

jest.mock('axios');

describe('<NewSquad />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewSquad location={{ search: '' }} />, div);
  });
});
