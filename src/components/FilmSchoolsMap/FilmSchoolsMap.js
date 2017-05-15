import _ from "lodash";

import {
  default as React,
  Component,
  PropTypes,
} from "react";

//import FaSpinner from "react-icons/lib/fa/spinner";

import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import mapStyles from "./mapStyles.json";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
const FilmSchoolsMap = _.flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 5.5841675, lng: -0.1657877 }}
    onClick={props.onMapClick}
    defaultOptions={{ styles: mapStyles }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class AsyncGettingStartedExample extends Component {

  static propTypes = {
    toast: PropTypes.func.isRequired,
  };

  state = {
    markers: [{
      position: {
        lat: 5.5841675,
        lng: -0.1657877,
      },
      key: `National Film And Television Institute, Ghana`,
      defaultAnimation: 2,
    }],
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  render() {
    return (
      <FilmSchoolsMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyByxCYpX-iTbEAjYQqwzUN23zyQNXZVsko"
        loadingElement={
          <div style={{ height: `500px`, width: `500px` }}>

          </div>
        }
        containerElement={
          <div style={{ height: `500px`, width: `500px` }} />
        }
        mapElement={
          <div style={{ height: `500px`, width: `500px` }} />
        }
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
      />
    );
  }
}
