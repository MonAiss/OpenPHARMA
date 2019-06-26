import React from 'react';
import { Alert, Image, Text, View, Linking } from 'react-native';
import {  Card ,ButtonAppeler, ButtonCarte} from './common';

//---------------------------------------------------------------------------------------------
const Pharmacie_listDetail = ({pharmacy, navigation}) => {
    const {title, city, address, tel, gsm, coordinate} = pharmacy;
    const {
        headerContentStyle,
        headerTextStyle,
        cityTextStyle,
        addTextStyle,
        infoContainerStyle,
        buttonsContainerStyle
        } = styles

    return (
    <Card>
        
        <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
        </View>
        
        <View style={infoContainerStyle}>
            <Text style={cityTextStyle}>{city}</Text>
            <Text style={addTextStyle}>{address}</Text>
        </View>
        <View style={buttonsContainerStyle}>
          <ButtonAppeler 
            onPress={() => !tel == "" ? Linking.openURL(tel)
            : Alert.alert(
  'Sorry Phone Number Not Attached',
  'click Back button to go back',
  [
    {text: 'Back', onPress: () => console.log('Back button Pressed')},
  ],
  {cancelable: true},
)}>  
          </ButtonAppeler>

          <ButtonCarte onPress={() => navigation.navigate('Carte', {coordinate: coordinate, tel: tel, title: title, all: false})} />
            
        </View>
    </Card>
    );
};

//---------------------------------------------------------------------------------------------
const styles={
    headerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#03AA8D'
    },
    cityTextStyle: {
        fontSize: 11,
        color: 'black'
    },
    addTextStyle: {
        fontSize: 11,
        color: 'grey'
    },
    infoContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10
    },
     buttonsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "70%",
        marginLeft: '15%'

    }
}

//---------------------------------------------------------------------------------------------
export default Pharmacie_listDetail;