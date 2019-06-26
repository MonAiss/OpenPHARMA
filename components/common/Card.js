import React from 'react';
import {View} from 'react-native';

//--------------------------------------------------------------------------------------------
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

//--------------------------------------------------------------------------------------------
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
}
//--------------------------------------------------------------------------------------------
export {Card};