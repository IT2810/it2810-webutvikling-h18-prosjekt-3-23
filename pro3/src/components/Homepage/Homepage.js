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

        //Updates the state of taskScore and appScore everytime the HomePage is in focus (in the navigation-menu)
        this.props.navigation.addListener("didFocus", () => {this.retrieveTaskScoreAsync()})
        this.props.navigation.addListener("didFocus", () => {this.retrieveAppScoreAsync()})
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
                <View style={styles.imageHolder}> 
                    <Image style={{height:180, width:220}} source={require('./logo.png')} />
                </View>
                
               <View style={styles.hr}/>
                    <View style={styles.scoreHolder}>
                        <Text style={styles.scoreText}>Todo´s completed:  {this.state.taskScore}</Text>
                        <TouchableHighlight onPress={() => this.clearTaskScore()}>
                            <Icon name="times" size={24} color="#607D8B"/>
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
        backgroundColor: '#37474f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        color: '#CFD8DC',
        fontSize: 24
    },
    scoreHolder : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        width: "70%"
    },
    hr: {
        height: 1,
        backgroundColor: "#607D8B",
        width: "100%",
        margin: 20
    },
    imageHolder : {
        margin: 25
    }

});
