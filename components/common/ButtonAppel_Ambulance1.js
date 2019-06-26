import React from 'react';

import {Text, Image, TouchableOpacity} from 'react-native';

//--------------------------------------------------------------------------------------------

const ButtonAppeler1 = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
    
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        
        <Image
              source={require('../../assets/images/call/call.png')}
              style={{ width: 20, height: 20}}
            />
        <Text style={textStyle}>
          APPELER 1
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
        backgroundColor: '#13EC5D',
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
export {ButtonAppeler1};