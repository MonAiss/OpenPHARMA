import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

//--------------------------------------------------------------------------------------------
const ButtonCarte = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
    
  return (
    <TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
        <Image
              source={require('../../assets/images/map/map.png')}
              style={{ width: 23, height: 20 }}
            />
        <Text style={textStyle}> Voir La Carte</Text>
    </TouchableOpacity>
  );  
};

//--------------------------------------------------------------------------------------------
const styles = {
    textStyle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '100',
    },
    buttonStyle:{
        backgroundColor: '#3B7ED0',
        borderRadius: 22,
        width: "50%",
        height: 30,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 2,
    }
}

//--------------------------------------------------------------------------------------------
export {ButtonCarte};