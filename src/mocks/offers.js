// src/mocks/offers.js

export const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    rating: 93,
    isPremium: true,
    picture: `img/apartment-01.jpg`,
    type: `Apartment`,
    location: [52.3909553943508, 4.85309666406198],
    city: `Amsterdam`,
  },
  {
    title: `Wood and stone place`,
    price: 60,
    rating: 20,
    isPremium: false,
    picture: `img/apartment-02.jpg`,
    type: `Place`,
    location: [52.369553943508, 4.85309666406198],
    city: `Amsterdam`,
  },
  {
    title: `Strange and abandoned grove`,
    price: 70,
    rating: 30,
    isPremium: false,
    picture: `img/apartment-03.jpg`,
    type: `Environment`,
    location: [52.3909553943508, 4.929309666406198],
    city: `Amsterdam`,
  },
  {
    title: `Winter stronghold, just for you`,
    price: 300,
    rating: 99,
    isPremium: true,
    picture: `img/apartment-01.jpg`,
    type: `Castle`,
    location: [52.3809553943508, 4.939309666406198],
    city: `Amsterdam`,
  },
  {
    title: `Ruhr room`,
    isPremium: false,
    price: 100,
    rating: 60,
    bookmarked: false,
    type: `Apartment`,
    picture: `img/apartment-02.jpg`,
    coords: [50.9308, 6.9598],
    city: `Cologne`,
  },
  {
    title: `BVB room`,
    isPremium: false,
    price: 80,
    rating: 95,
    bookmarked: false,
    type: `Private room`,
    picture: `img/room.jpg`,
    coords: [51.2140, 6.8019],
    city: `Dusseldorf`,
  },
  {
    title: `German room`,
    isPremium: true,
    price: 200,
    rating: 90,
    bookmarked: false,
    type: `Private room`,
    picture: `img/room.jpg`,
    coords: [53.5466, 10.0075],
    city: `Hamburg`,
  }
];

export const cities = [
  {
    name: `Amsterdam`,
    location: [52.38333, 4.9],
  },
  {
    name: `Cologne`,
    location: [50.9130, 6.9540],
  },
  {
    name: `Dusseldorf`,
    location: [51.1961, 6.7813],
  },
  {
    name: `Hamburg`,
    location:  [51.1961, 6.7813],
  }
];
