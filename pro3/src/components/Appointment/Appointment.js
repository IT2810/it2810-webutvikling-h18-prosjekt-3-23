import React from 'react';
import {AsyncStorage, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, Card} from 'react-native-elements'
import NewCard from './NewCard.js';
import ScoreManager from '../../utils/ScoreManager'
import Icon from 'react-native-vector-icons/MaterialIcons';


class Appointment extends React.Component {

    //Header navigation
    static navigationOptions = ({navigation}) => {
        return {
            title: 'My Appoinments',
            headerStyle: {
                backgroundColor: '#37474f',
            },
            headerTitleStyle: {
                color: '#eceff1'
            },
            headerRight: (
                <TouchableHighlight onPress={() => {navigation.navigate('NewCard')}}>
                    <Icon name = 'add' size={30} color='#eceff1'/>
                </TouchableHighlight>
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            avtaler: [],
            score : 0
        }
        this.retrieveItems();
        this.props.navigation.addListener("didFocus", () => {this.getAppScoreAsync()})
    }

    retrieveItems() {
        try{
            AsyncStorage.getItem("Appointments").then(res => {
                if(res === null){
                    AsyncStorage.setItem("Appointments", JSON.stringify([]))
                } else {
                    this.setState({avtaler: JSON.parse(res)})}
            })
        }catch (error) {
            console.log(error.message);
        }
    }

    componentWillReceiveProps(nextProps) {
        const nyAvtale = nextProps.navigation.state.params
        this.storeItem(nyAvtale)
    }


    async storeItem(item) {
        try{
            this.setState(
                { avtaler: this.state.avtaler.concat([item])},() => {
                AsyncStorage.setItem("Appointments", JSON.stringify(this.state.avtaler))
            }
            )
            this.increaseScore();

        } catch (error) {
            console.log(error.message)
        }
    };

    async deleteCard(id){
        const currentAppointments = this.state.avtaler;
        for (let i = 0; i < currentAppointments.length; i++) {
            console.log('index', i)
            if(i === id) {
                currentAppointments.splice(i, 1);
                console.log('splicde', currentAppointments)
                this.setState({avtaler: currentAppointments})
                console.log('state etter delete', this.state)
            }
        } AsyncStorage.setItem("Appointments", JSON.stringify(currentAppointments));
        this.retrieveItems();
        this.decreaseScore();
        

    }

    //The following code handles score in the appointment-page
    
    //Retrieves the score to be increased/decreased
    getAppScoreAsync = async () => {
        let score = await AsyncStorage.getItem("APPSCORE");
        console.log("score1:" + this.state.score)
        if (score == null) {
          this.setState({score : 0});
        } else {
          let numberScore = parseInt(score)
          this.setState({score:numberScore})
        }
        }

    //Increases the score by 1 when appointment is made --> is called in storeItem()
    increaseScore(){
        let oldScore = this.state.score
            let newScore = oldScore + 1
            this.setState({score : newScore})
            ScoreManager.saveAppScore(newScore.toString())
    }

    //Decreases the score by 1 when appointment is deleted --> is called in deleteCard()
    decreaseScore(){
        let oldScore = this.state.score
        if(oldScore > 0 ){
            let newScore = oldScore - 1
            this.setState({score : newScore})
            ScoreManager.saveAppScore(newScore.toString())
        }
    }

    render() {
        const navigation = this.props.navigation;
        const fremtidigeAvtaler = this.state.avtaler.filter(avtale =>
            new Date(avtale.date).getTime() > new Date()
        )
        const avtaleKort = fremtidigeAvtaler.map((avtale, id) => (
            <Card key={id}>
                <View style = {styles.slettKnapp}><Text>{avtale.title}</Text><TouchableHighlight onPress={() => {this.deleteCard(id)}}>
                    <Icon name = 'delete' size={20} color='#37474f'/>
                </TouchableHighlight></View>
                <Text>{avtale.location}</Text>
                <Text>{new Date(avtale.date).toLocaleString()}</Text>
                <Button
                    color = '#eceff1'
                    backgroundColor='#37474f'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW MAP'
                    //Navigating to the map with the address to the appointment
                    onPress={() => {navigation.navigate('MapScreen', {
                      address: avtale.location
                    })}}
                />
            </Card>
        ));
        return (
            <ScrollView>
            <View>
                {avtaleKort}
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    Button: {
        flex: 1,
        backgroundColor: '#eceff1',
        alignItems: 'center',
        justifyContent: 'center',

    },
    slettKnapp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});



export default Appointment;
