import React from 'react';
import {CityList} from './city-list';
import {create} from 'react-test-renderer';

const cities = [
  {name: `Green`, location: [0, 0]},
  {name: `Yellow`, location: [0, 0]},
  {name: `Red`, location: [0, 0]},
];

const city = {
  name: `Green`, location: [0, 0]
};


describe(`<CityList />`, () => {
  it(`should render correctly`, () => {
    const onCityChosen = jest.fn();
    const tree = create(
        <CityList
          {...{city, cities, onCityChosen}}
          activeItem={0}
          setActiveItem={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
