import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/components/BottomNavigation.js';

export default class App extends React.Component {
  render() {
    return (
        <BottomNavigation></BottomNavigation>
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