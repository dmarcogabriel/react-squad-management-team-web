import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tags from '..';

const mockTags = ['test', 'test2', 'test3'];

describe('<Tags />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tags />, div);
  });

  it('execut field button click event', () => {
    const { getByTestId } = render(<Tags />);

    const button = getByTestId('button-field');
    userEvent.click(button);

    const textarea = getByTestId('textarea');

    expect(textarea).toHaveFocus();
  });

  it('execut tag button click event', () => {
    let result;
    const onChange = (e) => {
      result = e;
    };
    const expectedValue = mockTags.filter((tag) => tag !== 'test2');

    const { getByTestId } = render(
      <Tags defaultTags={mockTags} onChange={onChange} />
    );

    const button = getByTestId('tag-button-test2');
    userEvent.click(button);

    expect(result).toEqual(expectedValue);
  });

  it('execute textarea change event', () => {
    const { getByTestId } = render(<Tags />);

    const textarea = getByTestId('textarea');
    const value = getByTestId('value');

    fireEvent.change(textarea, { target: { value: 'Testing' } });

    expect(value).toHaveTextContent('Testing');
  });

  it('execute textarea create tag', () => {
    const { getByTestId, rerender } = render(<Tags />);

    const textarea = getByTestId('textarea');

    fireEvent.change(textarea, { target: { value: 'Testing;' } });

    rerender(<Tags />);

    const createdTag = getByTestId('tag-button-Testing');

    expect(createdTag).toBeInTheDocument();
  });

  it('match snapshot', () => {
    expect(shallow(<Tags />)).toMatchSnapshot();
  });
});
