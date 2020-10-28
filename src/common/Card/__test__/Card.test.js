import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from '..';

afterEach(cleanup);

it('renders Card without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});

it('renders Card classes correctly', () => {
  const { getByTestId } = render(<Card className="my-5" />);

  expect(getByTestId('card')).toHaveClass(
    'bg-white rounded-lg shadow-lg my-10 w-full my-5'
  );
});

it('renders Card title correctly', () => {
  const { getByTestId } = render(<Card title="This is the title" />);

  expect(getByTestId('card-title')).toHaveTextContent('This is the title');
});

it('renders Card children correctly', () => {
  const { getByTestId } = render(
    <Card>
      <h2>This is a children</h2>
    </Card>
  );

  expect(getByTestId('card-children')).toContainHTML(
    '<h2>This is a children</h2>'
  );
});

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Card
        title="This is a test"
        className="my-5"
        RightComponent={() => <span>Right component</span>}
        childrenClassName="my-5"
      >
        Children test
      </Card>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
