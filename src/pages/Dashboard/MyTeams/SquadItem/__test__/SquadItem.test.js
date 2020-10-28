import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import SquadItem from '..';

afterEach(cleanup);

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

it('renders SquadItem without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Component squad={mockSquadNotSelected} />, div);
});

it('renders SquadItem not selected classes correctly', () => {
  const { getByTestId } = render(<Component squad={mockSquadNotSelected} />);

  expect(getByTestId('squadItem')).toHaveClass(
    'relative border-b-2 border-gray-200 rounded p-2 flex w-full'
  );
});

it('renders SquadItem selected classes correctly', () => {
  const { getByTestId } = render(<Component squad={mockSquadSelected} />);

  expect(getByTestId('squadItem')).toHaveClass(
    'relative border-b-2 border-gray-200 rounded p-2 flex w-full text-primary-dark bg-primary-light'
  );
});

it('renders SquadItem select squad event', () => {
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

it('renders SquadItem onDelete event', () => {
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

// todo: arrumar esses testes
// it('renders component hidding action buttons', () => {
//   const wrapper = shallow(<Component squad={mockSquadNotSelected} />).dive();

//   const actionButtons = wrapper.find({ 'data-testid': 'actionButtons' });

//   expect(actionButtons).toHaveStyle('display', 'none');
// });

// it('renders component showing action buttons', () => {
//   const wrapper = shallow(<Component squad={mockSquadSelected} />);

//   const actionButtons = wrapper.find({ 'data-testid': 'actionButtons' });

//   expect(actionButtons).not.toHaveClassName('hidden');
// });

it('matches snapshot', () => {
  const wrapper = shallow(<SquadItem squad={mockSquadSelected} />);

  expect(wrapper).toMatchSnapshot();
});
