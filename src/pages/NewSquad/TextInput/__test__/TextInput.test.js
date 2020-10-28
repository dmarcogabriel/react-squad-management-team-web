import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import userEv from '@testing-library/user-event';
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
    let result;
    const onChange = (e) => {
      result = e;
    };

    const { getByTestId } = render(<TextInput onChange={onChange} />);

    userEv.type(getByTestId('input'), 'Testing');

    expect(result).toEqual('Testing');
  });

  it('match snapshot', () => {
    expect(shallow(<TextInput />)).toMatchSnapshot();
  });
});
