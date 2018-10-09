import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




class Score extends React.Component {

    render() {
        return (
            <View>
                <Text style={styles.scoreText}>Score: 142</Text>
            </View>
        );
    }
}


export default Score;

const styles = StyleSheet.create({
    scoreText: {
        color: '#eceff1',
        fontSize: 30,
        marginTop: 20,
    }
})
