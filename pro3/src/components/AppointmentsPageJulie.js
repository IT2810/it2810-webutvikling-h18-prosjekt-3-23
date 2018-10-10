import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Geolocation from './Geolocation/Geolocation.js';

class AppointmentsPageJulie extends Component{
  render(){
    return(
        <Geolocation></Geolocation>
    )
  }
}

export default AppointmentsPageJulie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
