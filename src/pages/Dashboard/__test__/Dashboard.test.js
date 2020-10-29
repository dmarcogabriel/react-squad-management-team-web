import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '..';

const Component = () => (
  <Router>
    <Dashboard />
  </Router>
);

describe('<Dashboard />', () => {
  afterEach(cleanup);

  it('renders Card without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });

  it('match snapshot', () => {
    expect(shallow(<Component />)).toMatchSnapshot();
  });
});
