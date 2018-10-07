import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { compose, withProps } from 'recompose';
import MarkerBlue from '../static/icons/marker-blue-64.png';
import MarkerRed from '../static/icons/marker-red.png';
import MarkerYellow from '../static/icons/marker-yellow.png';
import MarkerGreen from '../static/icons/marker-green.png';
import MarkerPurple from '../static/icons/marker-purple.png';

const Heatmap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAulodcRp7D6_M_5qsQm32hppHb20VRFdk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `720px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <React.Fragment>
        <Marker
          icon={{
            url: MarkerBlue
          }}
          position={{ lat: -34.397, lng: 150.644 }}
        >
          <InfoWindow>
            <div style={{ color: 'black' }}>Infowindow texte</div>
          </InfoWindow>
        </Marker>
        <Marker
          icon={{
            url: MarkerGreen
          }}
          position={{ lat: -34.387, lng: 150.644 }}
        />
        <Marker
          icon={{
            url: MarkerPurple
          }}
          position={{ lat: -34.377, lng: 150.644 }}
        />
        <Marker
          icon={{
            url: MarkerYellow
          }}
          position={{ lat: -34.397, lng: 150.634 }}
        />
        <Marker
          icon={{
            url: MarkerRed
          }}
          position={{ lat: -34.397, lng: 150.624 }}
        />
      </React.Fragment>
    )}
  </GoogleMap>
));

export default Heatmap;
