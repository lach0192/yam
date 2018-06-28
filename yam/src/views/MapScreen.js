/*
*   FILE:           MapScreen.js     
*   PROJECT:        YAM
*
*   INFO:           Your Active Map
*   DEVELOPERS:     Eric Lachapelle, Alexandre Gravelle
*
*   VERSION:        0.9.1
*/

import React from 'react';
import { Text, View } from 'react-native';
import { MapView, Marker } from 'expo';
const styles = require('../styles/styles');

export default class MapScreen extends React.Component {

    state = {
        mapRegion: {
          latitude: 45.32625,
          longitude: -75.7024,
          latitudeDelta: 0.2222,
          longitudeDelta: 0.0421
        },
        markers: [
            // {id: 1, lat: 37.78825, lon: -122.4324, title: 'Soccer Game', desc: '7:00pm - Intermediate'},
            // {id: 2, lat: 37.77345, lon: -122.4399, title: 'Basketball Game', desc: '4:00pm - Beginner'},
        ],
        marker: {}
    };
    
    componentDidMount(){

        var activityUrl = 'https://www.overpass-api.de/api/interpreter?data=' + 
        // query 
        '[out:json][timeout:25];area(3604136816)->.searchArea;(node["leisure"="pitch"]["sport"="soccer"](area.searchArea);way["leisure"="pitch"]["sport"="soccer"](area.searchArea);relation["leisure"="pitch"]["sport"="soccer"](area.searchArea););out;';

        fetch(
            activityUrl,
            {
                method:'GET'
            }
        ).then(results => {

            return results.json();
           
        }).then(data=> {

            console.log(data);
            console.log(data.elements[0].lat);
            console.log(data.elements[0].lon);

            let newMarkers = [];

            for(var i = 0; i < data.elements.length; i++){
                if(!data.elements[i].lat){

                }
                else{
                    let soccerFieldMarker = {
                        id: i,
                        lat: data.elements[i].lat,
                        lon: data.elements[i].lon,
                        title: 'Soccer Field',
                        desc: 'Play Soccer Here!'
                    }
                    newMarkers.push(soccerFieldMarker);
                }   
            }

            this.setState({markers: newMarkers});
        });
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
          onRegionChange={() => this._handleMapRegionChange}>

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