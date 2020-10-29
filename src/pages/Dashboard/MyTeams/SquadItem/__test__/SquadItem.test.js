import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import SquadItem from '..';

const mockSquadSelected = {
  id: 'm1',
  name: 'mock1',
  description: 'This is the description of the squad.',
  selected: true,
};

const mockSquadNotSelected = {
  id: 'm2',
  name: 'mock2',
  description: 'This is the description of the squad.',
  selected: false,
};

const Component = (props) => (
  <Router>
    <SquadItem {...props} />
  </Router>
);

describe('<SquadItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Component squad={mockSquadNotSelected} />, div);
  });

  it('renders not selected classes correctly', () => {
    const { getByTestId } = render(<Component squad={mockSquadNotSelected} />);

    expect(getByTestId('squadItem')).toHaveClass(
      'relative border-b-2 border-gray-200 rounded p-2 flex w-full'
    );
  });

  it('renders selected classes correctly', () => {
    const { getByTestId } = render(<Component squad={mockSquadSelected} />);

    expect(getByTestId('squadItem')).toHaveClass(
      'relative border-b-2 border-gray-200 rounded p-2 flex w-full text-primary-dark bg-primary-light'
    );
  });

  it('execute select squad event', () => {
    let result;

    const mockFunction = (selectedSquad) => {
      result = selectedSquad;
    };

    const wrapper = shallow(
      <SquadItem onClick={mockFunction} squad={mockSquadNotSelected} />
    );

    wrapper.find({ 'data-testid': 'squadItem' }).simulate('click');
    expect(result).toEqual(mockSquadNotSelected);
  });

  it('execute onDelete event', () => {
    let result;

    const mockFunction = (squadId) => {
      result = squadId;
    };

    const wrapper = shallow(
      <SquadItem onDelete={mockFunction} squad={mockSquadSelected} />
    );

    wrapper.find({ 'data-testid': 'squadItem-delete' }).simulate('click');
    expect(result).toEqual(mockSquadSelected.id);
  });

  it('matches snapshot', () => {
    expect(shallow(<SquadItem squad={mockSquadSelected} />)).toMatchSnapshot();
  });
});
