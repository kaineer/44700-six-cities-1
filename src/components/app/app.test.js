import React from 'react';
import App from './app';
import {create} from 'react-test-renderer';

import {cities} from '../../mocks/offers';

import {MockProvider} from '../../mocks/store';

describe(`App`, () => {
  it(`should render correctly`, () => {
    const tree = create(
      <MockProvider>
        <App
          {...{cities}}
        />
      </MockProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
