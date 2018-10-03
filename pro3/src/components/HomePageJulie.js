import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomePageJulie extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Hjemmesiden, skal ha logo og score</Text>
      </View>
    )
  }
}

export default HomePageJulie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
