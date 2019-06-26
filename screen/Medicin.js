import React, { Component } from 'react';

import {
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Switch,
  FlatList
} from 'react-native';

import ModalSelector from 'react-native-modal-selector'
// ---------------------------------------------------------------------------------------
import { ButtonGroup, Divider } from 'react-native-elements';
// ----------------------------------------------------------------------------------------
import Medicine_listDetail from '../components/medicine_listDetail';
// ----------------------------------------------------------------------------------------
const data_allMedicine = require('../data/medicine_data/all_medicine.json');
const data_specialities = require('../data/medicine_data/specialities.json');
// ----------------------------------------------------------------------------------------


export default class Medicin extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list_allMedicine: data_allMedicine,
      selectedIndex: 0,
      pickerOpacity: 0,
      textInputValue: 'Tout Les Specialities',
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Tout', 'Agadir', 'Inezgane', 'Ait Melloul'];
    const { selectedIndex } = this.state;
    const data = data_specialities;
    const  {navigation} = this.props;

    const all_filter = this.state.list_allMedicine.filter(speciality =>{
      return speciality.speciality_1 === this.state.textInputValue || speciality.speciality_2 === this.state.textInputValue
    });

    const agadir = this.state.list_allMedicine.filter((agadir) =>{
      return agadir.city === 'Agadir'});
    const agadir_filter = agadir.filter(speciality =>{
      return speciality.speciality_1 === this.state.textInputValue || speciality.speciality_2 === this.state.textInputValue
    });

    const inezgane = this.state.list_allMedicine.filter(inezgane =>{
      return inezgane.city === 'Inezgane'
    });
    const inezgane_filter = inezgane.filter(speciality =>{
      return speciality.speciality_1 === this.state.textInputValue || speciality.speciality_2 === this.state.textInputValue
    });


    const ait_melloul = this.state.list_allMedicine.filter(ait_melloul =>{
      return ait_melloul.city === 'Ait melloul'
    });
    const ait_melloul_filter = ait_melloul.filter(speciality =>{
      return speciality.speciality_1 === this.state.textInputValue || speciality.speciality_2 === this.state.textInputValue
    });

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{ flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', borderWidth:1, borderColor:'#ccc', width: '100%', borderRadius:20,}}>
            <TextInput
              style={{paddingHorizontal: 10, color: 'grey', fontSize: 14, }}
              editable={false}
              placeholder=""
              value={this.state.textInputValue} />
          
          <ModalSelector
            data={data}
            style={{}}
            ref={selector => { this.selector = selector; }}
            onChange={(option)=>{ this.setState({textInputValue:option.label})}}
            customSelector={<Switch onValueChange={() => this.selector.open()} />}
          />
          </View>
        </View>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.buttonGroupStyle}
          />
        
      
        <View style={{ flex: 5 }}>
          {this.state.selectedIndex == 0 ? (
            {
              ...(this.state.textInputValue === 'Tout Les Specialities' ? (
                <FlatList
                    data={this.state.list_allMedicine}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />

              ):(
                <FlatList
                    data={all_filter}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />
                  ))}
              ) : (
            {
              ...(this.state.selectedIndex == 1 ? (
                {
                  ...(this.state.textInputValue === 'Tout Les Specialities' ? (
                    <FlatList
                    data={agadir}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />

                  ):(
                    <FlatList
                    data={agadir_filter}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />
                  ))}
              ) : (
                {
                  ...(this.state.selectedIndex == 2 ? (
                    {
                      ...(this.state.textInputValue === 'Tout Les Specialities' ? (
                        <FlatList
                    data={inezgane}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />
                      ):(
                        <FlatList
                    data={inezgane_filter}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />
                ))}
                  ) : (
                    {
                      ...(this.state.textInputValue === 'Tout Les Specialities' ? (
                        <FlatList
                    data={ait_melloul}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />
                      ):(
                        <FlatList
                    data={ait_melloul_filter}
                    renderItem={({ item }) => (
                      <Medicine_listDetail
                        key={item.title}
                        medicine={item}
                        navigation={navigation}
                      />
                    )}
                  />
                ))}
                  )),
                }
              )),
            }
          )}
        </View>
      </View>
    );
  }
}

const styles = {
 pickerStyle:{
  width:'100%',
  },
  headerContainer: {
    width:'100%',
     height: 40,
     paddingHorizontal:5,
  },
  container:{
    flex: 1,
    paddingTop: 20,
  },
  buttonGroupStyle: {
    borderRadius:8,
  }
};