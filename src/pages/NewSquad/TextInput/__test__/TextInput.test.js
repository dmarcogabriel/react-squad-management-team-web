import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TextInput from '..';

describe('<TextInput />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextInput />, div);
  });

  it('render label correctly', () => {
    const { getByTestId } = render(<TextInput label="Test" />);

    const label = getByTestId('label');

    expect(label).toHaveTextContent('Test');
  });

  it('render lable error highlight correctly', () => {
    const { getByTestId } = render(<TextInput label="Test" error />);

    const label = getByTestId('label');

    expect(label.className).toEqual('font-bold text-base text-primary-dark');
  });

  it('render input border error highlight correctly', () => {
    const { getByTestId } = render(<TextInput error />);

    const input = getByTestId('input');

    expect(input.className).toEqual(
      'border-2 w-full rounded p-1 focus:border-gray-500 border-primary-dark focus:border-primary-dark'
    );
  });

  it('execute onChange event', () => {
    const mock = {
      onChange: () => ({ target: { value: 'Testing' } }),
    };
    const spy = jest.spyOn(mock, 'onChange');
    const result = mock.onChange();

    const { getByTestId } = render(<TextInput onChange={spy} />);

    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'Testing' } });

    expect(spy).toHaveBeenCalled();
    expect(result.target.value).toEqual('Testing');
  });

  it('match snapshot', () => {
    expect(renderer.create(<TextInput />).toJSON()).toMatchSnapshot();
  });
});
