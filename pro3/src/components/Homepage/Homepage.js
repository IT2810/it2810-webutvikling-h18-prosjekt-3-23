import React from 'react';
import { StyleSheet, Text, View , Image, AsyncStorage, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScoreManager from '../../utils/ScoreManager';

class Homepage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            taskScore : 0,
            appScore : 0
        }

        this.state = {test: 0}


        this.props.navigation.addListener("didFocus", () => {this.retrieveTaskScoreAsync()})
        this.props.navigation.addListener("didFocus", () => {this.retrieveAppScoreAsync()})
        console.log('porps i const', this.props)
    }



    componentDidMount(){
        this.retrieveTaskScoreAsync()
        this.retrieveAppScoreAsync()
    }

    //Retrieves the taskScore
    retrieveTaskScoreAsync = async () => {
        let taskScore = await AsyncStorage.getItem("TASKSCORE");
        this.setState({taskScore : taskScore});
        }

    //Retrieves the appointments score
    retrieveAppScoreAsync = async () => {
        let appScore = await AsyncStorage.getItem("APPSCORE");
        this.setState({appScore : appScore})
    }

    //Resets the taskScore back to zero
    clearTaskScore() {
        let score = 0
        this.setState({taskScore : score})
        ScoreManager.saveTaskScore(score.toString())
    }



    render() {
        return (
            <View style={styles.container}>
               <Image style={{height:180, width:220}} source={require('./logo.png')} />
               <View style={styles.scoreHolder}>
                   <Text style={styles.scoreText}>Todo's completed: {this.state.taskScore}</Text>
                   <TouchableHighlight onPress={() => this.clearTaskScore()}>
                       <Icon name="times-circle" size={24} color="#607D8B"/>
                   </TouchableHighlight>
                </View>
                <View style={styles.hr}/>

                <View style={styles.scoreHolder}>
                   <Text style={styles.scoreText}>Appointments made: {this.state.appScore}</Text>
                </View>
                <View style={styles.hr}/>
            </View>
        );
    }
}

export default Homepage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        color: '#eceff1',
        fontSize: 24
    },
    scoreHolder : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        width: "70%",
        paddingTop: 20
    },
    hr: {
        height: 1,
        backgroundColor: "#607D8B",
        width: "70%",
        marginTop: 5
    }

});
