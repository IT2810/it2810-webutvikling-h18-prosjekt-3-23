import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class Score extends React.Component {

    render() {
        return (
            <View>
                <Text style={styles.scoreText}>Score</Text>
            </View>
        );
    }
}


export default Score;

const styles = StyleSheet.create({
    scoreText: {
        fontFamily: 'HelveticaNeue-UltraLight',
        color: '#eceff1',
        fontSize: 30,
    }
})
