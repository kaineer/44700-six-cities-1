// src/components/place/place.jsx

import {string, number, bool, func} from 'prop-types';

import React from 'react';

const renderPremiumLabel = (isPremium) => (
  isPremium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : null
);

export const Place = ({title, price, rating, isPremium, picture, type, onClick = () => null}) => (
  <article className="cities__place-card place-card">
    {renderPremiumLabel(isPremium)}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={() => onClick()}>{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);

Place.propTypes = {
  title: string.isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  isPremium: bool.isRequired,
  type: string.isRequired,
  picture: string.isRequired,
  onClick: func
};
