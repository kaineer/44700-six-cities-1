import React from 'react';
import {PlaceList} from './place-list';
import {create} from 'react-test-renderer';

import {offers} from '../../mocks/offers';

describe(`PlaceList`, () => {
  it(`should render correctly`, () => {
    const amsterdamPlaces = offers.filter((offer) => offer.city === `Amsterdam`);
    const tree = create(
        <PlaceList
          places={amsterdamPlaces}
          activeItem={-1}
          setActiveItem={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
