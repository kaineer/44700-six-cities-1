import React from 'react';
import {connect} from 'react-redux';

import {func, arrayOf} from 'prop-types';

export const CityList = ({cities, city, onCityChosen}) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {
        cities.map(({name}) => (
          <li className="locations__item" key={`city-${name}`}>
            <a className={`locations__item-link tabs__item ${city.name === name ? `tabs__item--active` : ``}`} href="#" onClick={(e) => {
              e.preventDefault();
              onCityChosen(name);
            }}>
              <span>{name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  </section>
);

import {cityType} from '../../prop-types';

CityList.propTypes = {
  cities: arrayOf(cityType).isRequired,
  city: cityType.isRequired,
  onCityChosen: func.isRequired
};

const mapStateToProps = ({city}, ownProps) => Object.assign({}, ownProps, {city});

export default connect(mapStateToProps)(CityList);
