import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Geolocation from './Geolocation/Geolocation.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//Hele denne siden skal erstattes med Heidis AppointmentsPage og NewAppointmentsPage

class AppointmentsPageJulie extends Component{

  static navigationOptions = ({navigation}) => {
        return {
            title: 'AppointmentsScreen',
            headerTintColor: '#eceff1',
            headerStyle: {
                backgroundColor: '#37474f',
            },
            headerTitleStyle: {
                color: '#eceff1'
            },
            headerRight: (
                <TouchableHighlight onPress={() => {navigation.navigate('MapScreen')}}>
                    <Icon name = 'map-marker' size={30} color='#eceff1'/>
                </TouchableHighlight>
            )
        }
    };

  render(){
    return(
        <View style={styles.container}>
          <Text>Skal erstattes med heidi sitt</Text>
        </View>
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
