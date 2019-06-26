import React, { Component } from 'react';

// ----------------------------------------------------------------------------------
import { AppRegistry, Image, ActivityIndicator } from 'react-native';
// ----------------------------------------------------------------------------------
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
// ----------------------------------------------------------------------------------

import Home from './screen/Home';
import Pharmacie from './screen/Pharmacie';
import Ambulance from './screen/Ambulance';
import Medicin from './screen/Medicin';
import Carte from './screen/Carte';

//--------------------------------------------------------
const RootStack = createStackNavigator(
  {
    Home: Home,
    Pharmacie: Pharmacie,
    Ambulance: Ambulance,
    Medicin: Medicin,
    Carte: Carte,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/images/Dashboard/home/home.png')}
              style={{ width: 30, height: 26, tintColor: tintColor }}
            />
          ),
        },
      },
      Pharmacie: {
        screen: Pharmacie,
        navigationOptions: {
          tabBarLabel: 'Pharmacie',
          header: 'hello',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/images/Dashboard/pharmacy/pharmacy.png')}
              style={{ width: 26, height: 23, tintColor: tintColor }}
            />
          ),
        },
      },
      Ambulance: {
        screen: Ambulance,
        navigationOptions: {
          tabBarLabel: 'Ambulance',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/images//Dashboard/ambulance/ambulance.png')}
              style={{ width: 26, height: 23, tintColor: tintColor }}
            />
          ),
        },
      },
      Medicin: {
        screen: Medicin,
        navigationOptions: {
          tabBarLabel: 'Medicin',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/images/Dashboard/doctor/doctor.png')}
              style={{ width: 28, height: 23, tintColor: tintColor }}
            />
          ),
        },
      },
      Carte: {
        screen: Carte,
        navigationOptions: {
          tabBarLabel: 'Carte',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/images/map/map.png')}
              style={{ width: 26, height: 23, tintColor: tintColor }}
            />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      },
    }
  )
);
// ---------------------------------------------------------------
