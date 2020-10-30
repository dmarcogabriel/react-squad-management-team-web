import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
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

    const { getByTestId } = render(
      <Component onClick={mockFunction} squad={mockSquadNotSelected} />
    );

    const squadItem = getByTestId('squadItem');
    fireEvent.click(squadItem);

    expect(result).toEqual(mockSquadNotSelected);
  });

  it('execute onDelete event', () => {
    const mock = {
      onDelete: (squadId) => squadId,
      onClick: () => {},
    };
    const spyDelete = jest.spyOn(mock, 'onDelete');
    const spySelect = jest.spyOn(mock, 'onClick');

    const { getByTestId } = render(
      <Component
        onDelete={spyDelete}
        onClick={spySelect}
        squad={mockSquadSelected}
      />
    );

    const squadItemDeleteButton = getByTestId('squadItem-delete');
    fireEvent.click(squadItemDeleteButton);

    expect(spyDelete).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(
      renderer.create(<Component squad={mockSquadSelected} />).toJSON()
    ).toMatchSnapshot();
  });
});
