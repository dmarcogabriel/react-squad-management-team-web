import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '..';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });

  it('renders classes correctly', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toHaveClass(
      'bg-footer py-3 flex justify-center'
    );
  });

  it('renders text correctly', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer-text')).toHaveTextContent(
      '2020 - All rights reserved'
    );
  });

  it('matches snapshot', () => {
    expect(renderer.create(<Footer />).toJSON()).toMatchSnapshot();
  });
});
