import React, {Component} from 'react';
import {connect} from 'react-redux';
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
    const {city, places} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin1.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city.location,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city.location, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    places.forEach(({location}) => {
      leaflet.
        marker(location, {icon}).
        addTo(map);
    });
  }
}

import {cityType} from '../../prop-types';

CityMap.propTypes = {
  places: arrayOf(shape(Place.propTypes)),
  city: cityType.isRequired,
};

const mapStateToProps = ({city, places}, ownProps) => Object.assign({}, ownProps, {
  city, places
});

export default connect(mapStateToProps)(CityMap);
