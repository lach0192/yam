import React from 'react';
import { Text, View } from 'react-native';
const styles = require('../styles/styles');

export default class ListScreen extends React.Component {
    render() {
      return (
        <View style={styles.view}>
          <Text>List!</Text>
        </View>
      );
    }
}