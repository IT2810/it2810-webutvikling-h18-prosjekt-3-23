import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "react-navigation";
import Geolocation from './Geolocation';
//Skal erstattes med Heidis
import AppointmentsPageJulie from './AppointmentsPageJulie';

//Component for navigating between different pages in the "appointment screen"
class AppointmentStackNav extends Component{
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


export default AppointmentStackNav;
