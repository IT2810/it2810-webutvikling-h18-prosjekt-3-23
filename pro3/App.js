import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/components/Homepage/Homepage.js';
import Appointment from './src/components/Appointment/Appointment.js';

export default class App extends React.Component {
  render() {
    return (
        <Appointment></Appointment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#eceff1',
      alignItems: 'center',
      justifyContent: 'center',

  },
});
