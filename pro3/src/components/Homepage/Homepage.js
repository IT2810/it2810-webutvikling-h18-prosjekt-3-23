import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Score from './Score.js';


class Homepage extends React.Component {

    render() {
        return (
            <View style={styles.thepage}>
               <Score></Score>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thepage: {
        flex: 1,
        backgroundColor: '#eceff1',
        justifyContent: 'center',
        alignItems: 'center',


    }
})
export default Homepage;