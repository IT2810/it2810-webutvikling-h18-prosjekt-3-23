import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "react-navigation";
import Geolocation from './Geolocation/Geolocation';
import AppointmentsPageJulie from './AppointmentsPageJulie';

class AppStackPage extends Component{
  render(){
    return(
      <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
    AppointmentsScreen: AppointmentsPageJulie,
    MapScreen: (props) => <Geolocation address="Fjordgata 1 Trondheim"/>,
});


export default AppStackPage;
