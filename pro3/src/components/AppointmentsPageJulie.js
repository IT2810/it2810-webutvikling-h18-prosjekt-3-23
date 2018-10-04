import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Denne siden skal vekk
class AppointmentsPageJulie extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Avtaler på egen side wiho</Text>
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
