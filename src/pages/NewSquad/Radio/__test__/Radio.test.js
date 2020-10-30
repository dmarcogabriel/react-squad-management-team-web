import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import userEv from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Radio from '..';

const mockOptions = [
  {
    id: 'm1',
    label: 'Mock Label',
    selected: false,
  },
  {
    id: 'm2',
    label: 'Mock Label',
    selected: true,
  },
];

describe('<Radio />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Radio options={mockOptions} />, div);
  });

  it('render selected option correctly', () => {
    const { getByTestId } = render(<Radio options={mockOptions} />);

    const radioContainer = getByTestId('radio-m2');

    expect(radioContainer.className).toEqual(
      'rounded-full p-3 border-1 mr-3 relative border-primary-dark'
    );
  });

  it('render not selected option correctly', () => {
    const { getByTestId } = render(<Radio options={mockOptions} />);

    const radioContainer = getByTestId('radio-m1');

    expect(radioContainer.className).toEqual(
      'rounded-full p-3 border-1 mr-3 relative border-gray-500'
    );
  });

  it('render selected option value correctly', () => {
    const { getByTestId } = render(<Radio options={mockOptions} />);

    const radioContainer = getByTestId('value');

    expect(radioContainer.className).toEqual(
      'bg-primary-dark w-5 h-5 absolute m-auto top-0 bottom-0 right-0 left-0 rounded-full'
    );
  });

  it('render selected value label correctly', () => {
    const { getByTestId } = render(<Radio options={mockOptions} />);

    const radioContainer = getByTestId('label-m2');

    expect(radioContainer.className).toEqual(
      'inline text-sm text-primary-dark'
    );
  });

  it('execute click event', () => {
    let result;

    const onChange = (ev) => {
      result = ev;
    };

    const { getByTestId } = render(
      <Radio options={mockOptions} onChange={onChange} />
    );

    const button = getByTestId('button-m1');

    userEv.click(button);

    expect(result).toEqual(mockOptions[0]);
  });

  it('match snapshot', () => {
    expect(renderer.create(<Radio />).toJSON()).toMatchSnapshot();
  });
});
