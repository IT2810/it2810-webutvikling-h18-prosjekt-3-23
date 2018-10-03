import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Score from './Score.js';


class Homepage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
               <Score></Score>
            </View>
        );
    }
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
