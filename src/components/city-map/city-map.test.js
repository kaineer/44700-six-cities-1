import React from 'react';
import CityMap from './city-map';
import {create} from 'react-test-renderer';

import {MockProvider} from '../../mocks/store';

describe(`CityMap`, () => {
  it(`should render correctly`, () => {
    const tree = create(
      <MockProvider>
        <CityMap key="test-map" />
      </MockProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
