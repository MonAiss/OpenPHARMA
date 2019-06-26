import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  NetInfo
} from 'react-native';

import axios from 'axios';
// ---------------------------------------------------------------------------------------
import MapView from 'react-native-maps';
//----------------------------------------------------------------------------------------
export default class Carte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      isLoading: true,
      connection_Status : "",
    };
  }


    componentDidMount() {
 
    NetInfo.isConnected.addEventListener(
        'connectionChange',
        this._handleConnectivityChange
 
    );
   
    NetInfo.isConnected.fetch().done((isConnected) => {
 
      if(isConnected == true)
      {
        setTimeout(() => {
            axios
            .get('https://api.jsonbin.io/b/5d118117f467d60d75a81689')
            .then(response => this.setState({markers: response.data, connection_Status : "Online"}))
        }, 1000, this.setState({isLoading: false}));
      }
      else
      {
        this.setState({connection_Status : "Offline", isLoading: false,})
      }
 
    });
  }
    componentWillUnmount() {
 
    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this._handleConnectivityChange
 
    );
 
  }
_handleConnectivityChange = (isConnected) => {
 
    if(isConnected == true)
      {
          axios
            .get('https://api.jsonbin.io/b/5d118117f467d60d75a81689')
            .then(response => this.setState({markers: response.data, connection_Status : "Online"}));
        this.setState({connection_Status : "Online"})
      }
      else
      {
        this.setState({connection_Status : "Offline"})
      }
  };

  render() {
    const coordinate = this.props.navigation.getParam('coordinate', 'default');
    const tel = this.props.navigation.getParam('tel', 'default');
    const title = this.props.navigation.getParam('title', 'default');
    const all = this.props.navigation.getParam('all', true);

     if(this.state.isLoading){
       return(
         <View style={{flex: 1, padding: 20}}>
           <ActivityIndicator/>
         </View>
       )
     }
    
    return(
      <View style={{flex: 1}}>
      {this.state.connection_Status == "Offline" &&
        all == true ?(
        <View style={styles.cnxErrorContainer}>
              <Text style={styles.cnxErrorMsg}>please connect to the internet</Text>
        </View>
        ):(
        
      {...(coordinate !== 'default' && all == false ?
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
        region={{
          latitude: 30.3945463,
          longitude: -9.5748103,
          latitudeDelta: 0.1622,
          longitudeDelta: 0.1021,
        }}>
        
          <MapView.Marker coordinate={coordinate} title={title} >
            <MapView.Callout  style={styles.calloutStyle} onPress={() => Linking.openURL(tel)}>
            
              <TouchableOpacity style={styles.touchStyle}>
              <View><Text style={styles.markerTitleStyle}>{title}</Text></View>
              <View style={{paddingTop: 5}}><Image
                          source={require('../assets/images/call/call_black.png')}
                          style={{ width: 20, height: 20, alignSelf: 'center'}}/>
                          <Text style={{fontSize: 14, fontWeight: '600', color: '#13EC5D'}}>
                        Appeler
                    </Text>
              </View>
              </TouchableOpacity>
  
            </MapView.Callout>
          </MapView.Marker>
        
       
    </MapView>
    : 
    <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
        region={{
          latitude: 30.3945463,
          longitude: -9.5748103,
          latitudeDelta: 0.1622,
          longitudeDelta: 0.1021,
        }}>
        {this.state.markers.map(marker => (
          <MapView.Marker coordinate={marker.coordinate} title={marker.title} >
            <MapView.Callout  style={styles.calloutStyle} onPress={() => Linking.openURL(marker.tel)}>
            
              <TouchableOpacity style={styles.touchStyle}>
              <View><Text style={styles.markerTitleStyle}>{marker.title}</Text></View>
              <View style={{paddingTop: 5}}><Image
                          source={require('../assets/images/call/call_black.png')}
                          style={{ width: 20, height: 20, alignSelf: 'center'}}/>
                          <Text style={{fontSize: 14, fontWeight: '600', color: '#13EC5D'}}>
                        Appeler
                    </Text>
              </View>
              </TouchableOpacity>
  
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
      )})}
    </View>
    )
  }
}
//----------------------------------------------------------------------------------------------
const styles = {
  calloutStyle: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
//    justfyContent: 'center',
//    alignItems: 'space-between',
  },
  touchStyle: {
    justfyContent: 'center',
    alignItems: 'center',
  },
  markerTitleStyle: {
  },
    cnxErrorContainer:{
        backgroundColor:"orange",
        alignSelf:"center",
        width: "60%",
        height:22,
        borderRadius: 20,
        marginTop: 30
    },
    cnxErrorMsg:{
        color: "white",
        alignSelf: "center"
    }
};
