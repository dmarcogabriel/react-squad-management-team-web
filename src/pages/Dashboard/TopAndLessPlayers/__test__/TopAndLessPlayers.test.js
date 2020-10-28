import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TopAndLessPlayers from '..';

describe('TopAndLessPlayers tests', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopAndLessPlayers />, div);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<TopAndLessPlayers />);

    expect(wrapper).toMatchSnapshot();
  });
});
