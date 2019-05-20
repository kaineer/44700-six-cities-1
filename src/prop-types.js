// src/prop-types.js

import {string, number, shape, arrayOf} from 'prop-types';

export const cityType = shape({
  name: string.isRequired,
  location: arrayOf(number).isRequired
});
