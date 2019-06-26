import React, { Component } from 'react';

import { View, FlatList, ScrollView,NetInfo, ActivityIndicator, Alert, Text } from 'react-native';

import axios from 'axios';
// ---------------------------------------------------------------------------------------
import { ButtonGroup, Divider } from 'react-native-elements';
// ----------------------------------------------------------------------------------------
import Pharmacie_listDetail from '../components/pharmacie_listDetail';
// ----------------------------------------------------------------------------------------
const data_allPharma = require('../data/pharmacie_data/all_pharmacie.json');
// ----------------------------------------------------------------------------------------

export default class Pharmacie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_allPharma: data_allPharma,
      garde_pharmacy_data: [],
      selectedIndex: 0,
      selectedIndex_2: 0,
      isLoading: true,
      connection_Status : "",
      refreshing: false,
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndex_2 = this.updateIndex_2.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  updateIndex_2(selectedIndex_2) {
    this.setState({ selectedIndex_2 });
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
            .then(response => this.setState({garde_pharmacy_data: response.data, isLoading: false, connection_Status : "Online"}))
        }, 1000, this.setState({isLoading: false}));
      }
      else
      {
        this.setState({connection_Status : "Offline", isLoading: false})
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
          setTimeout(() => {
            axios
            .get('https://api.jsonbin.io/b/5d118117f467d60d75a81689')
            .then(response => this.setState({garde_pharmacy_data: response.data, refreshing: false}))
        }, 1000, this.setState({connection_Status : "Online"}));
      }
      else
      {
        this.setState({connection_Status : "Offline"})
      }
  };

    _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
            axios
            .get('https://api.jsonbin.io/b/5d118117f467d60d75a81689')
            .then(response => this.setState({garde_pharmacy_data: response.data, refreshing: false}))
        }, 1000);
    
  }
    
  render() {
    const buttons = ['Tout', 'Agadir', 'Inezgane', 'Ait Melloul'];
    const buttons_2 = ['Tout', 'En Garde'];

    const { selectedIndex } = this.state;
    const { selectedIndex_2 } = this.state;

    const { navigation } = this.props;

    const agadir = this.state.list_allPharma.filter(agadir => {
                    return agadir.city === 'Agadir'});
    const inezgane = this.state.list_allPharma.filter(inezgane => {
                              return inezgane.city === 'Inezgane'});
    const aitMelloul = this.state.list_allPharma.filter(aitMelloul => {
                        return aitMelloul.city === 'Ait Melloul'});
            
    const agadir_garde = this.state.garde_pharmacy_data.filter(agadir => {
                       return agadir.city === 'Agadir'});
    const inezgane_garde = this.state.garde_pharmacy_data.filter(inezgane => {
                       return inezgane.city === 'Inezgane'});
    const aitMelloul_garde = this.state.garde_pharmacy_data.filter(aitMelloul => {
                        return aitMelloul.city === 'Ait Melloul'});
    

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
      
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center',  paddingTop: 30,paddingBottom: 30, }}>
          <ButtonGroup
            onPress={this.updateIndex_2}
            selectedIndex={selectedIndex_2}
            buttons={buttons_2}
            containerStyle={{ borderRadius:8, width: '47%' }}
            selectedButtonStyle={{backgroundColor: "#03AA8D"}}
            
          />
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ borderRadius:8 }}
            selectedButtonStyle={{backgroundColor: "#03AA8D"}}
            
          />
        </View>
        <View style={{ flex: 5 }}>
          {this.state.selectedIndex_2 == 0
            ? {
                ...(this.state.selectedIndex == 0 ? (
                  <FlatList
                    data={this.state.list_allPharma}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                      <Pharmacie_listDetail
                        pharmacy={item}
                        navigation={navigation}
                      />
                    )}
                  />
                ) : (
                  {
                    ...(this.state.selectedIndex == 1 ? (
                      <FlatList
                        data={agadir}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => (
                          <Pharmacie_listDetail
                            pharmacy={item}
                            navigation={navigation}
                          />
                        )}
                      />
                    ) : (
                      {
                        ...(this.state.selectedIndex == 2 ? (
                          <FlatList
                            data={inezgane}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => (
                              <Pharmacie_listDetail
                                pharmacy={item}
                                navigation={navigation}
                              />
                            )}
                          />
                        ) : (
                          <FlatList
                            data={aitMelloul}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => (
                              <Pharmacie_listDetail
                                pharmacy={item}
                                navigation={navigation}
                              />
                            )}
                          />
                        )),
                      }
                    )),
                  }
                )),
              }
            : ({...(this.state.connection_Status == "Offline" ?(
                    <View style={styles.cnxErrorContainer}>
                    <Text style={styles.cnxErrorMsg}>please connect to the internet</Text></View>
                ):({
                    ...(this.state.selectedIndex == 0 ? (
                    
                <FlatList
                    data={this.state.garde_pharmacy_data}
                    keyExtractor={(item) => item.title}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    renderItem={({ item }) => (
                      <Pharmacie_listDetail
                        pharmacy={item}
                        navigation={navigation}
                      />
                    )}
                  />
                ) : (
                  {
                    ...(this.state.selectedIndex == 1 ? (
                      <FlatList
                        data={agadir_garde}
                        keyExtractor={(item) => item.title}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem={({ item }) => (
                          <Pharmacie_listDetail
                            pharmacy={item}
                            navigation={navigation}
                          />
                        )}
                      />
                    ) : (
                      {
                        ...(this.state.selectedIndex == 2 ? (
                          <FlatList
                            data={inezgane_garde}
                            keyExtractor={(item) => item.title}
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            renderItem={({ item }) => (
                              <Pharmacie_listDetail
                                pharmacy={item}
                                navigation={navigation}
                              />
                            )}
                          />
                        ) : (
                          <FlatList
                            data={aitMelloul_garde}
                            keyExtractor={(item) => item.title}
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            renderItem={({ item }) => (
                              <Pharmacie_listDetail
                                pharmacy={item}
                                navigation={navigation}
                              />
                            )}
                          />
                        )),
                      }
                    )),
                  }
                )),
              }))})}
        </View>
      </View>
    );
  }
}

//--------------------------------------------------------------------------------------------------
const styles= {
    cnxErrorContainer:{
        backgroundColor:"orange",
        alignSelf:"center",
        width: "60%",
        height:22,
        borderRadius: 20
    },
    cnxErrorMsg:{
        color: "white",
        alignSelf: "center"
    }
}