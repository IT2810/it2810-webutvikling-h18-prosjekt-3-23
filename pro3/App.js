import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/Todo/TodoList.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#263238'
  },
});
