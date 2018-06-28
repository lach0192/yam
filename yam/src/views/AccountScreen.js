/*
*   FILE:           AccountScreen.js     
*   PROJECT:        YAM
*
*   INFO:           Your Active Map
*   DEVELOPERS:     Eric Lachapelle, Alexandre Gravelle
*
*   VERSION:        0.9.1
*/

import React from 'react';
import { Text, View } from 'react-native';
const styles = require('../styles/styles');

export default class AccountScreen extends React.Component {
    render() {
      return (
        <View style={styles.view}>
          <Text>Account!</Text>
        </View>
      );
    }
}