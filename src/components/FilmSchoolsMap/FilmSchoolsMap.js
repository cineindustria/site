import _ from "lodash";
import fetch from "isomorphic-fetch";

import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import MarkerClusterer from "react-google-maps/lib/addons/MarkerClusterer";
import dataSetSchools from "./dataSetSchools.json";
import mapStyles from "./mapStyles.json";

const FilmSchoolsMap = _.flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
      defaultZoom={2}
      maxZoom={2}
      minZoom={2}
      defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            position={{ lat: marker.position.lat, lng: marker.position.lng }}
            key={marker.key}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
));



export default class MarkerClustererExample extends Component {
  state = {
    markers: [],
  }

  componentDidMount() {
    let markers = []
    _.forEach(dataSetSchools, (item) => {
      _.forEach(item.region, (school) => {
        markers.push({
          position: school.position,
          key: school.name
        })
      })
    })
    this.setState({ markers: markers });
  }

  render() {
    return (
      <FilmSchoolsMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyByxCYpX-iTbEAjYQqwzUN23zyQNXZVsko"
        loadingElement={
          <div style={{ height: `500px`, width: `500px` }}>
            Cargando...
          </div>
        }
        containerElement={
          <div style={{ height: `500px`, width: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%`, width: `100%` }} />
        }
        markers={this.state.markers}
      />
    );
  }
}
