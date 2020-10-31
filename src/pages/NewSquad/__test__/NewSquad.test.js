import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewSquad from '..';

jest.mock('contexts/Squad', () => ({
  useSquad: () => [
    [
      {
        id: 's1',
        name: 'Test Squad D',
        description: 'This is a test B',
        formationNumbers: '3-2-2-3',
        formation: [],
        type: 'Real',
        tags: ['tag1', 'tag2'],
        webSite: 'https://test.com',
      },
    ],
  ],
}));

afterEach(cleanup);

describe('<NewSquad />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<NewSquad location={{ search: '' }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  render(<NewSquad location={{ search: '?squadId=s1' }} />);
  // todo: verify on every field

  it('should change name input correctly', () => {
    const { getByTestId } = render(<NewSquad location={{ search: '' }} />);

    const nameInput = getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Testing' } });

    expect(nameInput).toHaveValue('Testing');
  });

  it('should change website input correctly', () => {
    const { getByTestId } = render(<NewSquad location={{ search: '' }} />);

    const websiteInput = getByTestId('website-input');
    fireEvent.change(websiteInput, { target: { value: 'Testing' } });

    expect(websiteInput).toHaveValue('Testing');
  });

  it('fires description textarea event correctly', () => {
    const { getByTestId, rerender } = render(
      <NewSquad location={{ search: '' }} />
    );

    const description = getByTestId('description');
    fireEvent.change(description, { target: { value: 'This is a test.' } });

    rerender(<NewSquad location={{ search: '' }} />);

    expect(description).toHaveValue('This is a test.');
  });

  it('fires radio button event correctly', () => {
    const { getByTestId } = render(<NewSquad location={{ search: '' }} />);

    const radioButton = getByTestId('button-real');
    fireEvent.click(radioButton);

    const value = getByTestId('radio-real');

    expect(value.className).toEqual(
      'rounded-full p-3 border-1 mr-3 relative border-primary-dark'
    );
    expect(value.childElementCount).toEqual(1);
  });

  it('fires select button event and select an option correctly', () => {
    const { getByTestId } = render(<NewSquad location={{ search: '' }} />);

    const selectButton = getByTestId('button');
    fireEvent.click(selectButton);

    const option = getByTestId('option-button-3231');
    fireEvent.click(option);

    const formation = getByTestId('formation');
    const row1 = getByTestId('formation-row-1');
    const row2 = getByTestId('formation-row-2');
    const row3 = getByTestId('formation-row-3');
    const row4 = getByTestId('formation-row-4');
    const row5 = getByTestId('formation-row-5');

    expect(formation.childElementCount).toEqual(5);
    expect(row1.childElementCount).toEqual(3);
    expect(row2.childElementCount).toEqual(2);
    expect(row3.childElementCount).toEqual(3);
    expect(row4.childElementCount).toEqual(1);
    expect(row5.childElementCount).toEqual(1);
  });

  it('fires search input event correctly', () => {
    const { getByTestId, rerender } = render(
      <NewSquad location={{ search: '' }} />
    );

    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'This is a test.' } });

    rerender(<NewSquad location={{ search: '' }} />);

    expect(searchInput).toHaveValue('This is a test.');
  });

  it('should not render players list on search input change event', async () => {
    const { getByTestId } = render(<NewSquad location={{ search: '' }} />);

    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Mes' } });

    const playersList = getByTestId('players-list');
    await expect(playersList.childElementCount).toEqual(0);
  });

  it('should matches snapshot', () => {
    expect(
      renderer.create(<NewSquad location={{ search: '' }} />).toJSON()
    ).toMatchSnapshot();
  });
});
