import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/components/Homepage/Homepage.js';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Homepage></Homepage>
        </View>
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
