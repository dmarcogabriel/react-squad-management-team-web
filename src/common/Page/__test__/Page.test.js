import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Page from '..';

describe('<Page />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page />, div);
  });

  it('renders classes correctly', () => {
    const { getByTestId } = render(<Page />);

    expect(getByTestId('page')).toHaveClass(
      'flex flex-col md:flex-row bg-background justify-center w-full px-5 md:px-10'
    );
  });

  it('matches snapshot', () => {
    expect(
      shallow(
        <Page>
          <div>
            <h1>This is a header 1 from Page</h1>
          </div>
        </Page>
      )
    ).toMatchSnapshot();
  });
});
