import React from 'react';
import { Text, View } from 'react-native';
import { MapView, Marker } from 'expo';
const styles = require('../styles/styles');

export default class MapScreen extends React.Component {

    state = {
        mapRegion: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        markers: [
            {id: 1, lat: 37.78825, lon: -122.4324, title: 'Soccer Game', desc: '7:00pm - Intermediate'},
            {id: 2, lat: 37.77345, lon: -122.4399, title: 'Basketball Game', desc: '4:00pm - Beginner'},
        ]
    };

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
 
    render() {
      return (
        <View style={styles.mapContainer}>
        <MapView
          style={styles.mapView}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        >
        {this.state.markers.map(marker => (
            <MapView.Marker
                key={marker.id}
                coordinate={{
                    latitude: marker.lat,
                    longitude: marker.lon
                }}
                title={marker.title}
                description={marker.desc}
            />
        ))}
        </MapView>
      </View>
      );
    }
}