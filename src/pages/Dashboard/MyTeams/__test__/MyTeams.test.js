import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MyTeams from '..';

jest.mock('contexts/Squad', () => {
  let squads = [
    {
      id: 's1',
      name: 'Test Squad D',
      description: 'This is a test B',
    },
    {
      id: 's2',
      name: 'Test Squad C',
      description: 'This is a test A',
    },
    {
      id: 's3',
      name: 'Test Squad A',
      description: 'This is a test D',
    },
    {
      id: 's4',
      name: 'Test Squad B',
      description: 'This is a test C',
    },
  ];

  const setSquads = (newSquads) => {
    squads = newSquads;
  };

  return {
    useSquad: () => [squads, setSquads],
  };
});

const Component = (props) => (
  <Router>
    <MyTeams {...props} />
  </Router>
);

describe('<MyTeams />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders classes correctly', () => {
    const { getByTestId } = render(<Component className="test-class" />);

    expect(getByTestId('container').className).toEqual(
      'bg-white rounded-lg shadow-lg my-10 w-full test-class'
    );
  });

  it('renders squad list correctly', () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('squad-list').childElementCount).toEqual(4);
  });

  it('execute order by name function correctly', () => {
    const { getByTestId } = render(<Component />);

    fireEvent.click(getByTestId('order-by-name'));

    expect(getByTestId('squad-0')).toHaveTextContent('Test Squad A');
    expect(getByTestId('squad-3')).toHaveTextContent('Test Squad D');
  });

  it('execute order by description function correctly', () => {
    const { getByTestId } = render(<Component />);

    fireEvent.click(getByTestId('order-by-description'));

    expect(getByTestId('squad-0')).toHaveTextContent('Test Squad C');
    expect(getByTestId('squad-3')).toHaveTextContent('Test Squad A');
  });

  it('executes onClick function', () => {
    const { getByTestId } = render(<Component />);

    const selectButton = getByTestId('squad-select-0');
    fireEvent.click(selectButton);

    expect(selectButton.className).toEqual(
      'relative border-b-2 border-gray-200 rounded p-2 flex w-full text-primary-dark bg-primary-light'
    );
  });

  // todo: test onDelete function

  it('match snapshot', () => {
    expect(renderer.create(<Component />).toJSON()).toMatchSnapshot();
  });
});
