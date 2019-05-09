import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import {App} from '../src/components/app/app';
import {Place} from '../src/components/place/place';
import {PlaceList} from '../src/components/place-list/place-list';

import places from '../src/mocks/offers';

storiesOf('App', module).add('mock render', () => (
  <App places={places} />
));

const placeStories = storiesOf('Place', module);

places.forEach((place, i) => {
  placeStories.add(`Place #${i + 1}`, () => (
    <Place {...place} onClick={linkTo(`Place #${i + 1}`)} />
  ))
});

storiesOf('PlaceList').add('mock render', () => (
  <PlaceList {...{places}} />
));

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
