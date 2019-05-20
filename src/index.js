import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './components/app/app';

import {cities, offers} from './mocks/offers';

const init = () => {
  ReactDOM.render(
    <App cities={cities} places={offers} />,
    document.querySelector(`#root`)
  );
};

init();
