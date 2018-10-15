import React from 'react';
import { StyleSheet, Text, View , Image, AsyncStorage, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScoreManager from '../../utils/ScoreManager'


class Homepage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            taskScore : 0,
            appScore : ""
        }

        this.state = {test: 0}

        this.props.navigation.addListener("didFocus", () => {this.retrieveTaskScoreAsync()})
    }

    //Retrieves the taskScore
    retrieveTaskScoreAsync = async () => {
        let taskScore = await AsyncStorage.getItem("TASKSCORE");
        //console.log(taskScore)
        this.setState({taskScore : taskScore});
        }

    clearTaskScore() {
        let score = 0
        this.setState({taskScore : score})
        ScoreManager.saveScore(score.toString())
    }

    render() {
        return (
            <View style={styles.container}>
               <Image style={{height:180, width:220}} source={require('./logo.png')} />
               <View style={styles.taskScoreHolder}>
                   <Text style={styles.scoreText}>Todo's completed: {this.state.taskScore}</Text>
                   <TouchableHighlight onPress={() => this.clearTaskScore()}>
                       <Icon name="times-circle" size={24} color="#607D8B"/>
                   </TouchableHighlight>
                </View>
                <View style={styles.hr}/>
            </View>
        );
    }
}

export default withNavigation(Homepage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37474f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        color: '#eceff1',
        fontSize: 24
    },
    taskScoreHolder : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        width: "65%",
        paddingTop: 20
    },
    hr: {
        height: 1,
        backgroundColor: "#607D8B",
        width: "70%",
        marginTop: 5
    }

});
