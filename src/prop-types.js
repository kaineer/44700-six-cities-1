// src/prop-types.js

import {bool, string, number, shape, arrayOf} from 'prop-types';

export const cityType = {
  name: string.isRequired,
  location: arrayOf(number).isRequired
};

export const placeType = {
  title: string.isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  isPremium: bool.isRequired,
  type: string.isRequired,
  picture: string.isRequired,
  location: arrayOf(number).isRequired,
};
