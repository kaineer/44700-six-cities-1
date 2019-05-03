import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './components/app/app';

const places = [
  {
    title: `Beautiful & luxurious apartment at great location`,
  },
  {
    title: `Wood and stone place`,
  },
  {
    title: `Strange and abandoned grove`,
  },
  {
    title: `Winter stronghold, just for you`
  }
];

const init = () => {
  ReactDOM.render(
      <App places={places} />,
      document.querySelector(`#root`)
  );
};

init();
