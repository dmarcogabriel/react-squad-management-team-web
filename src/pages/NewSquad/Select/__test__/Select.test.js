import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import userEvent from '@testing-library/user-event';
import Select from '..';

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

describe('<Select />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select />, div);
  });

  it('renders value correctly', () => {
    const { getByTestId } = render(<Select value="Test Value" />);

    const value = getByTestId('value');

    expect(value).toHaveTextContent('Test Value');
  });

  it('renders options correctly', () => {
    const { getByTestId } = render(<Select options={mockOptions} />);

    const button = getByTestId('button');
    userEvent.click(button);

    expect(getByTestId('option-m1')).toBeInTheDocument();
  });

  it('executes option button click', () => {
    let result;
    const onChange = (e) => {
      result = e;
    };

    const { getByTestId } = render(
      <Select onChange={onChange} options={mockOptions} />
    );

    const button = getByTestId('button');
    userEvent.click(button);

    const optionButton = getByTestId('option-button-m1');
    userEvent.click(optionButton);

    expect(result).toEqual(mockOptions[0]);
  });

  it('renders selected option classes correctly', () => {
    const { getByTestId } = render(<Select options={mockOptions} />);

    const button = getByTestId('button');
    userEvent.click(button);

    expect(getByTestId('option-button-m2').className).toEqual(
      'option flex justify-center w-full py-3 font-base cursor-pointer bg-primary-dark text-white'
    );
  });

  it('renders not selected option classes correctly', () => {
    const { getByTestId } = render(<Select options={mockOptions} />);

    const button = getByTestId('button');
    userEvent.click(button);

    expect(getByTestId('option-button-m1').className).toEqual(
      'option flex justify-center w-full py-3 font-base cursor-pointer bg-white text-black'
    );
  });

  it('renders arrow icon correctly', () => {
    const { getByTestId } = render(<Select options={mockOptions} />);

    const button = getByTestId('button');
    userEvent.click(button);

    expect(getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('match snapshot', () => {
    expect(shallow(<Select options={mockOptions} />)).toMatchSnapshot();
  });
});
