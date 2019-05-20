import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app';

import {reducer, initialState} from './reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer, initialState);

import {cities} from './mocks/offers';

const init = () => {
  ReactDOM.render(
    <Provider {...{store}} ><App {...{cities}} /></Provider>,
    document.querySelector(`#root`)
  );
};

init();
