import React from 'react';
import { Alert, Image, Text, View, Linking } from 'react-native';
import {  Card ,ButtonAppeler, ButtonCarte} from './common';


//---------------------------------------------------------------------------------------------
 
const Medicine_listDetail = ({medicine, navigation}) => {
 
    const {title, coordinate, city, address, tel, gsm, speciality_1, speciality_2, speciality_3} = medicine;
    const {
        headerContentStyle,
        headerTextStyle,
        cityTextStyle,
        addTextStyle,
        infoContainerStyle,
        buttonsContainerStyle,
        specialityTextStyle,
        buttonStyle,
        textStyle
        } = styles


    return (
    <Card>
        
        <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
        </View>
        
        <View style={infoContainerStyle}>
            <Text style={specialityTextStyle}>{speciality_1} {speciality_2} {speciality_3}</Text>
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
    {text: 'Back'},
  ],
  {cancelable: true},
)}>  
          </ButtonAppeler>

          <ButtonCarte  onPress={() => navigation.navigate('Carte', {coordinate: coordinate, tel: tel, title: title, all: false})} />
          
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
        fontSize: 20,
        fontWeight: '600',
        color: '#5C999E'
    },
    specialityTextStyle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#5C999E'
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

    },
    textStyle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '100',
    },
    buttonStyle:{
        backgroundColor: '#3B7ED0',
        borderRadius: 22,
        width: "50%",
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 2,
    }
}
//---------------------------------------------------------------------------------------------

export default Medicine_listDetail;