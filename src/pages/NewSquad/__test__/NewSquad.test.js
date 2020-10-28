import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import axios from 'axios';
import NewSquad from '..';

jest.mock('axios');

describe('<NewSquad />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewSquad location={{ search: '' }} />, div);
  });

  it('call api when search input is changed', () => {
    // const getSpy = jest.spyOn(axios, 'get');
    // const wrapper = shallow(<NewSquad location={{ search: '' }} />);
    // const args = { target: { search: 'test' } };
    // wrapper
    //   .instance()
    //   .searchPlayers(args)
    //   .then(() => {
    //     expect(wrapper.state('search')).toEqual('test');
    //     // expect(wrapper.state('validFields')).toBeTruthy();
    //   });
  });

  // it('match snapshot', () => {
  //   expect(shallow(<NewSquad location={{ search: '' }} />)).toMatchSnapshot();
  // });
});
