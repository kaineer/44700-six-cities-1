import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {Place} from './place';

describe(`Place e2e`, () => {
  let clickHandler;
  let place;
  let title;

  beforeEach(() => {
    clickHandler = jest.fn();
    place = shallow(
        <Place
          title={``}
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
