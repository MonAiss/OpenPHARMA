import React from 'react';
import { Alert, Image, Text, View, Linking } from 'react-native';
import {  Card ,ButtonAppeler1, ButtonAppeler2 } from './common';


//---------------------------------------------------------------------------------------------

const Ambulance_listDetail = ({ambulance}) => {
    const {id, title, city, address, tel, gsm} = ambulance;
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
          <ButtonAppeler1
            onPress={() => !tel == "" ? Linking.openURL(tel)
            : Alert.alert('Sorry Phone Number Not Attached','click Back button to go back',
                    [
                      {text: 'Back', onPress: () => console.log('Back button Pressed')},
                    ],
                    {cancelable: true},)}>  
          </ButtonAppeler1>

          <ButtonAppeler2 
            onPress={() => !gsm == "" ? Linking.openURL(tel)
            : Alert.alert('Sorry Phone Number Not Attached','click Back button to go back',
                    [
                      {text: 'Back', onPress: () => console.log('Back button Pressed')},
                    ],
                    {cancelable: true},)}>  
          </ButtonAppeler2>
                
            
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
        color: '#CA5D86'
    },
    cityTextStyle: {
        fontSize: 11,
        color: '#CA5D86'
    },
    addTextStyle: {
        fontSize: 11,
        color: '#CA5D86'
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

export default Ambulance_listDetail;