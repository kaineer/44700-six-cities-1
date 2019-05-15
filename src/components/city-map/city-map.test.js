import React from 'react';
import {CityMap} from './city-map';
import {create} from 'react-test-renderer';

import offers from '../../mocks/offers';

describe(`CityMap`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <CityMap
          places={offers}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
