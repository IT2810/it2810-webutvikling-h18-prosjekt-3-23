import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from "./src/components/Appointment/Appointment";
import Homepage from './src/components/Homepage/Homepage.js';
//import Appointment from './src/components/Appointment/Appointment.js';
import {createStackNavigator} from "react-navigation";
import NewCard from "./src/components/Appointment/NewCard";
//import Homepage from "./src/components/Homepage/Homepage";

export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator/>

    );
  }
}

const AppStackNavigator = createStackNavigator({
    AppointmentScreen: Appointment,
    NewCard: NewCard
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#eceff1',
      alignItems: 'center',
      justifyContent: 'center',

  },
});
