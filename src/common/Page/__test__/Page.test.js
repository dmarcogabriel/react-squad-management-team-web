import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Page from '..';

afterEach(cleanup);

it('renders Page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
});

it('renders Page classes correctly', () => {
  const { getByTestId } = render(<Page />);

  expect(getByTestId('page')).toHaveClass(
    'flex flex-col md:flex-row bg-background justify-center w-full px-5 md:px-10'
  );
});

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Page>
        <div>
          <h1>This is a header 1 from Page</h1>
        </div>
      </Page>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
