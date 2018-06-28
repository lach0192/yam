import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

import MapScreen from './src/views/MapScreen';
import ListScreen from './src/views/ListScreen';
import AccountScreen from './src/views/AccountScreen';

export default createBottomTabNavigator({
  Map: MapScreen,
  List: ListScreen,
  Account: AccountScreen
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Map') {
        iconName = `ios-pin${focused ? '' : '-outline'}`;
      } 
      else if (routeName === 'List') {
        iconName = `ios-list${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Account') {
        iconName = `ios-person${focused ? '' : '-outline'}`;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});