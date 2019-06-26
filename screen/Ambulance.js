import React, { Component } from 'react';

import {
  View,
  ScrollView,
} from 'react-native';
// ---------------------------------------------------------------------------------------
import { ButtonGroup, Divider } from 'react-native-elements';
//----------------------------------------------------------------------------------------
import Ambulance_listDetail from '../components/ambulance_listDetail';
//----------------------------------------------------------------------------------------
const data_allAmbulance = require('../data/ambulance_data/all_ambulance.json');
//----------------------------------------------------------------------------------------

export default class Ambulance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_allAmbulance: data_allAmbulance,
      selectedIndex: 0,
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  all_ambulanceList() {
    return this.state.list_allAmbulance.map(ambulance => (
      <Ambulance_listDetail key={ambulance.title} ambulance={ambulance} />
    ));
  }

  agadir_ambulanceList() {
    const agadir = this.state.list_allAmbulance.filter(agadir =>{
      return agadir.city === 'Agadir'
    });
    return agadir.map(ambulance => (
      <Ambulance_listDetail key={ambulance.title} ambulance={ambulance} />
    ));
  }
  inezgane_ambulanceList() {
    const inezgane = this.state.list_allAmbulance.filter(inezgane =>{
      return inezgane.city === 'Inezgane'
    });
    return inezgane.map(ambulance => (
      <Ambulance_listDetail key={ambulance.title} ambulance={ambulance} />
    ));
    
  }

  render() {
    const buttons = ['Tout', 'Agadir', 'Inezgane'];
    const { selectedIndex } = this.state;
    return (
      <View style={{ flex: 1}}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ borderRadius:8 }}
            selectedButtonStyle={{backgroundColor: "#CA5D86"}}
          />
        </View>
        <Divider
          style={{
            backgroundColor: 'lightgrey',
            marginHorizontal: 5,
            height: 2,
          }}
        />
        <View style={{ flex: 5 }}>
          {this.state.selectedIndex == 0 ? (
            <ScrollView>{this.all_ambulanceList()}</ScrollView>
          ) : (
            {
              ...(this.state.selectedIndex == 1 ? (
                <ScrollView>{this.agadir_ambulanceList()}</ScrollView>
              ) : (
                    <ScrollView>{this.inezgane_ambulanceList()}</ScrollView>
                  )),
                }
              )
            
          }
        </View>
      </View>
    );
  }
}

