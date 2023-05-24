import React, { Component } from 'react';
import { render } from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import './style.css';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  layerToAddUrl = "";

  render() {
    return (
      <MapContainer
        center={[44.5, -0.2]}
        zoom={8}
        scrollWheelZoom={false}
        style={{ widht: '100vw', height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}

render(<App />, document.getElementById('root'));
