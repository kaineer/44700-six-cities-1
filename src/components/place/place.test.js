import React from 'react';
import {Place} from './place';
import {create} from 'react-test-renderer';

describe(`Place`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <Place
          title="Унылая дыра в лебенях"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
