import React from 'react';
import {PlaceList} from './place-list';
import {create} from 'react-test-renderer';

import offers from '../../mocks/offers';

describe(`PlaceList`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <PlaceList
          places={offers}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
