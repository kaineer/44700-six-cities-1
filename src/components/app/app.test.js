import React from 'react';
import {App} from './app';
import {create} from 'react-test-renderer';

describe(`App`, () => {
  const places = [
    {title: 'Первое место'},
    {title: 'Второе место'}
  ];

  it(`should render correctly`, () => {
    const tree = create(
        <App
          places={places}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
