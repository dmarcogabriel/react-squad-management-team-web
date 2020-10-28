import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '..';

afterEach(cleanup);

it('renders Footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('renders Footer classes correctly', () => {
  const { getByTestId } = render(<Footer />);

  expect(getByTestId('footer')).toHaveClass(
    'bg-footer py-3 flex justify-center'
  );
});

it('renders Footer text correctly', () => {
  const { getByTestId } = render(<Footer />);

  expect(getByTestId('footer-text')).toHaveTextContent(
    '2020 - All rights reserved'
  );
});

it('matches snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
