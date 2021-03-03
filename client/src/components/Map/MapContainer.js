import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './MapContainer.css';

const mapStyles = {
  width: '100%',
  height: '400px'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div className="map_container">
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={
            {
              lat: 51.064224,
              lng: 17.017063
            }
          }>
          <Marker
            onClick={this.onMarkerClick}
            name={'Paw-Luk Energy'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDgTDE3UDZHLNa_Q9KrrKii-eMpsPVvokM'
})(MapContainer);