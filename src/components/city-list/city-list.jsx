import React from 'react';

export const CityList = ({cities}) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {
        cities.map(({name}) => (
          <li className="locations__item" key={`city-${name}`}>
            <a className="location__item-link tabs__item" href="#">
              <span>{name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  </section>
);