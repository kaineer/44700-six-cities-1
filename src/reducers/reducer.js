// src/reducers/reducer.js

import {offers, cities} from '../mocks/offers';

const filterOffersByCityName = (cityName) => offers.filter((offer) => offer.city === cityName);
const findCityByName = (cityName) => cities.find((city) => city.name === cityName);

export const initialState = {
  city: cities[0],
  places: filterOffersByCityName(cities[0].name)
};

export const ActionTypes = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  FETCH_OFFERS: `FETCH_OFFERS`,
};

const handlers = {
  [ActionTypes.CHOOSE_CITY]: (state, {payload}) => Object.assign({}, state, {
    city: payload
  }),
  [ActionTypes.FETCH_OFFERS]: (state, {payload}) => Object.assign({}, state, {
    places: payload
  })
};

export const ActionCreators = {
  chooseCity: (cityName) => {
    const city = findCityByName(cityName);
    return {type: ActionTypes.CHOOSE_CITY, payload: city};
  },
  fetchPlaces: (cityName) => {
    const places = filterOffersByCityName(cityName);
    return {type: ActionTypes.FETCH_OFFERS, payload: places};
  }
};

export const reducer = (state = initialState, action) => {
  const fn = handlers[action.type];

  if (fn) {
    return fn(state, action);
  }

  return state;
};
