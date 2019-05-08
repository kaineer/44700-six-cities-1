import React from 'react';
import {App} from './app';
import {create} from 'react-test-renderer';

import offers from '../../mocks/offers';

describe(`App`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <App
          places={offers}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
