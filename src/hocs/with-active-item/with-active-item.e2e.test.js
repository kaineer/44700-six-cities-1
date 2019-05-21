import React from 'react';
import {shallow} from 'enzyme';

import {withActiveItem} from './with-active-item';

const MockComponent = () => <div />;

const WithActiveItem = withActiveItem(MockComponent);

it(`should change activeItem property`, () => {
  const wrapper = shallow(<WithActiveItem />);

  expect(wrapper.props().activeItem).toEqual(-1);

  wrapper.props().setActiveItem(10);
  expect(wrapper.props().activeItem).toEqual(10);
});

