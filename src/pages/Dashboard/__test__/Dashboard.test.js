import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
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
    expect(renderer.create(<Component />).toJSON()).toMatchSnapshot();
  });
});
