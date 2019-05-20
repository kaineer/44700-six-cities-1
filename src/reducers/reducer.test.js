// src/reducers/reducer.test.js

import {reducer, ActionTypes} from './reducer';

const {CHOOSE_CITY, FETCH_OFFERS} = ActionTypes;

describe(`CHOOSE_CITY action`, () => {
  it(`should set city property`, () => {
    const newState = reducer({}, {type: CHOOSE_CITY, payload: `ANYTHING`});
    expect(newState).toEqual({city: `ANYTHING`});
  });
});

describe(`FETCH_OFFERS action`, () => {
  it(`should set offers property`, () => {
    const newState = reducer({}, {type: FETCH_OFFERS, payload: `ANYTHING`});
    expect(newState).toEqual({places: `ANYTHING`});
  });
});
