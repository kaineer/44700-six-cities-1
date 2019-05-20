import React from 'react';
import {Place} from './place';
import {create} from 'react-test-renderer';

import {offers} from '../../mocks/offers';

const [offer] = offers;

describe(`Place`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <Place
          {...offer}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
