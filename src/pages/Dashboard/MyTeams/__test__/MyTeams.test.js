import React from 'react';
import { shallow } from 'enzyme';
import MyTeams from '..';

describe('Testing MyTeams component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MyTeams />);

    expect(wrapper).not.toBeEmptyRender();
  });

  it('renders classes correctly', () => {
    const wrapper = shallow(<MyTeams className="test-class" />);

    expect(wrapper).toHaveClassName('test-class');
  });

  it('match snapshot', () => {
    const wrapper = shallow(<MyTeams />);

    expect(wrapper).toMatchSnapshot();
  });
});
