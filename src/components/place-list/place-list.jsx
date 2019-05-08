import React from 'react';
import {arrayOf, shape} from 'prop-types';

import {Place} from '../place/place';

export const PlaceList = ({places}) => (
  <div className="cities__places-list places__list tabs__content">
    {places.map((place, id) => (<Place {...place} key={id} />))}
  </div>
);

PlaceList.propTypes = {
  places: arrayOf(shape(Place.propTypes))
};
