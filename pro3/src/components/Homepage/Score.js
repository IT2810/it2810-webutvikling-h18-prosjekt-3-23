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

const styles = StyleSheet.create({
    scoreText: {
        color: '#37474f',
    }
})
export default Score;