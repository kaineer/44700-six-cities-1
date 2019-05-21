import React from 'react';
import {arrayOf, shape, number, func} from 'prop-types';

import {Place} from '../place/place';

export const PlaceList = ({places, activeItem, setActiveItem}) => (
  <div className="cities__places-list places__list tabs__content">
    {places.map((place, i) => (
      <Place
        {...place}
        active={i === activeItem}
        key={i}
        onClick={() => setActiveItem(i)}
      />
    ))}
  </div>
);

import {placeType} from '../../prop-types';

PlaceList.propTypes = {
  places: arrayOf(shape(placeType)),
  activeItem: number.isRequired,
  setActiveItem: func.isRequired,
};
