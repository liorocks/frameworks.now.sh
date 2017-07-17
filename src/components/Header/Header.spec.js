import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Header isMenuOpened={false} onNavToggle={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
