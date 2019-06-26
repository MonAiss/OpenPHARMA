import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// ---------------------------------------------------------------------------------------
import { ButtonGroup, Divider } from 'react-native-elements';
// --------------------------------------------------------------------------

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };
componentDidMount() {
        SplashScreen.hide();
    }

  render() {
    const {
      buttonIconStyle,
      buttonTouchStyle,
      buttonStyle,
      headerStyle,
      bodyStyle,
      textStyle
    } = styles;

    return (
      <View style={bodyStyle}>
        <View style={{ flex: 3 }}>
          <View style={[buttonStyle, { backgroundColor: '#03AA8D' }]}>
            <TouchableOpacity
              style={buttonTouchStyle}
              onPress={() => this.props.navigation.navigate('Pharmacie')}>
              <Image
                source={require('../assets/images/Dashboard/pharmacy/pharmacy.png')}
                style={buttonIconStyle}
              />
              <Text style={textStyle}> TROUVER UNE PHARMACIE </Text>
            </TouchableOpacity>
          </View>

          <View style={[buttonStyle, { backgroundColor: '#CC5D87' }]}>
            <TouchableOpacity
              style={buttonTouchStyle}
              onPress={() => this.props.navigation.navigate('Ambulance')}>
              <Image
                source={require('../assets/images/Dashboard/ambulance/ambulance.png')}
                style={buttonIconStyle}
              />
              <Text style={textStyle}> TROUVER UNE AMBULANCE </Text>
            </TouchableOpacity>
          </View>

          <View style={[buttonStyle, { backgroundColor: '#017795' }]}>
            <TouchableOpacity
              style={buttonTouchStyle}
              onPress={() => this.props.navigation.navigate('Medicin')}>
    
              <Image
                source={require('../assets/images/Dashboard/doctor/doctor.png')}
                style={buttonIconStyle}
              />
              <Text style={textStyle}> TROUVER UN MEDECIN </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 2, borderRadius: 4 }}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate('Carte', {all: true})}>
            <Image
              source={require('../assets/images/Dashboard/garde/garde.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
// ----------------------------------------------------------------------------------------------
const styles = {
  bodyStyle: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 20
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonTouchStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonIconStyle: {
    width: 34,
    height: 30,
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontSize:20
  }
};
// -------------------------------------------------------------------------------------


