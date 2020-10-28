import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '..';

afterEach(cleanup);

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders Header classes correctly', () => {
  const { getByTestId } = render(<Header />);

  expect(getByTestId('header')).toHaveClass(
    'flex px-8 py-2 items-center justify-between bg-gradient-to-r from-primary-dark to-secondary-dark text-white'
  );
});

it('matches snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
