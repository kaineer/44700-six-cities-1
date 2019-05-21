import React from 'react';
import {connect} from 'react-redux';

import {number, func, arrayOf, shape} from 'prop-types';

export const CityList = ({cities, onCityChosen, activeItem, setActiveItem}) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {
        cities.map(({name}, i) => (
          <li className="locations__item" key={`city-${name}`}>
            <a className={`locations__item-link tabs__item ${i === activeItem ? `tabs__item--active` : ``}`} href="#" onClick={(e) => {
              e.preventDefault();
              onCityChosen(name);
              setActiveItem(i);
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
  cities: arrayOf(shape(cityType)),
  city: shape(cityType),
  onCityChosen: func.isRequired,
  activeItem: number.isRequired,
  setActiveItem: func.isRequired,
};

const mapStateToProps = ({city}, ownProps) => Object.assign({}, ownProps, {city});

export default connect(mapStateToProps)(CityList);
