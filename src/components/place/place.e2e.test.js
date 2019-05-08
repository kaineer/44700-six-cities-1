import React from 'react';
import {shallow} from 'enzyme';

import {Place} from './place';

import offers from '../../mocks/offers';

const [offer] = offers;

describe(`Place e2e`, () => {
  let clickHandler;
  let place;
  let title;

  beforeEach(() => {
    clickHandler = jest.fn();
    place = shallow(
        <Place
          {...offer}
          onClick={clickHandler}
        />
    );
    title = place.find(`.place-card__name a`);
  });

  it(`should have a title`, () => {
    expect(title).toHaveLength(1);
  });

  describe(`before click`, () => {
    it(`should not call clickHandler`, () => {
      expect(clickHandler).toHaveBeenCalledTimes(0);
    });
  });

  describe(`after click`, () => {
    beforeEach(() => {
      title.simulate(`click`);
    });

    it(`should call clickHandler once`, () => {
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
