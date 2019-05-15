import React, {Component} from 'react';
import {arrayOf, shape} from 'prop-types';
import {Place} from '../place/place';
import leaflet from 'leaflet';

export class CityMap extends Component {
  componentDidMount() {
    try {
      this._attachLeafletMap();
    } catch (err) {
      // Не даём упасть, если лифлет не подключился
      // console.log(err.stack.toString());
    }
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }

  _attachLeafletMap() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin1.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.props.places.forEach(({location}) => {
      leaflet.
        marker(location, {icon}).
        addTo(map);
    });
  }
}

CityMap.propTypes = {
  places: arrayOf(shape(Place.propTypes))
};
