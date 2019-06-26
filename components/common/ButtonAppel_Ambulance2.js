import React from 'react';

import {Text, Image,TouchableOpacity} from 'react-native';

//--------------------------------------------------------------------------------------------

const ButtonAppeler2 = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
    
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image
              source={require('../../assets/images/call/call.png')}
              style={{ width: 20, height: 20}}
            />
        <Text style={textStyle}>
          APPELER 2
        </Text>
    </TouchableOpacity>
  );  
};

//--------------------------------------------------------------------------------------------
const styles = {
    textStyle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '300',
        margin: 5,
    },
    buttonStyle:{
        backgroundColor: '#1A90DA',
        borderRadius: 22,
        width: "47%",
        height: 30,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 2,
    }
}

//--------------------------------------------------------------------------------------------
export {ButtonAppeler2};