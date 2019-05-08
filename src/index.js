import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './components/app/app';

import offers from './mocks/offers';

const init = () => {
  ReactDOM.render(
      <App places={offers} />,
      document.querySelector(`#root`)
  );
};

init();
