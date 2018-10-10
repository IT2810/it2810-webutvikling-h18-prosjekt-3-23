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
    MapScreen: Geolocation,
});


export default AppStackPage;
