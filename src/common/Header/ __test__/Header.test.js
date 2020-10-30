import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '..';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('renders classes correctly', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toHaveClass(
      'flex px-8 py-2 items-center justify-between bg-gradient-to-r from-primary-dark to-secondary-dark text-white'
    );
  });

  it('matches snapshot', () => {
    expect(renderer.create(<Header />).toJSON()).toMatchSnapshot();
  });
});
