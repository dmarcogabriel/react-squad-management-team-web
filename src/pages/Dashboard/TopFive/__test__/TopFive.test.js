import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TopFive from '..';

describe('TopFive component tests', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopFive />, div);
  });

  it('match snapshot', () => {
    expect(shallow(<TopFive />)).toMatchSnapshot();
  });
});
