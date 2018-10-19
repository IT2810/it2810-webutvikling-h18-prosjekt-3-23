import React from 'react';
import {AsyncStorage, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, Card} from 'react-native-elements'
import NewCard from './NewCard.js';
import ScoreManager from '../../utils/ScoreManager'
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment'



class Appointment extends React.Component {

    //Header navigation and style
    static navigationOptions = ({navigation}) => {
        return {
            title: 'My Appointments',
            headerStyle: {
                backgroundColor: '#37474f',
            },
            headerTitleStyle: {
                color: '#cfd8dc'
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
        };
        this.retrieveItems();
        this.props.navigation.addListener("didFocus", () => {this.getAppScoreAsync()})
    }

    //Retrieves all cards/appointments from asyncstorage.
    retrieveItems() {
        try{
            AsyncStorage.getItem("Appointments").then(res => {
                if(res === null){
                    AsyncStorage.setItem("Appointments", JSON.stringify([]))
                } else {
                    this.setState({avtaler: JSON.parse(res)})}
            })
        }catch (error) {
            console.error(error.message);
        }
    }

    componentWillReceiveProps(nextProps) {
        const nyAvtale = nextProps.navigation.state.params
        this.storeItem(nyAvtale)
    }

    //Saves a new appointment(card) to asyncstorage.
    async storeItem(item) {
        try{
            this.setState(
                { avtaler: this.state.avtaler.concat([item])},() => {
                AsyncStorage.setItem("Appointments", JSON.stringify(this.state.avtaler))
            }
            )
            this.increaseScore();

        } catch (error) {
            console.error(error.message)
        }
    };

    //Deletes the chosen card from appointments.
    async deleteCard(id){
        const currentAppointments = this.state.avtaler;
        for (let i = 0; i < currentAppointments.length; i++) {
            if(i === id) {
                currentAppointments.splice(i, 1);
                this.setState({avtaler: currentAppointments})
            }
        } AsyncStorage.setItem("Appointments", JSON.stringify(currentAppointments));
        this.retrieveItems();
        this.decreaseScore(this.state.score);
    }

    //The following code handles score in the appointment-page
    
    //Retrieves the score to be increased/decreased
    getAppScoreAsync = async () => {
        let score = await AsyncStorage.getItem("APPSCORE");
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
    decreaseScore(oldScore){
        if(oldScore > 0 ){
            let newScore = oldScore - 1
            this.setState({score : newScore})
            ScoreManager.saveAppScore(newScore.toString())
        }
    }

    render() {
        const navigation = this.props.navigation;
        let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        };
        const fremtidigeAvtaler = this.state.avtaler.filter(avtale =>
            new Date(avtale.date).getTime() > new Date()
        );
        const avtaleKort = fremtidigeAvtaler.map((avtale, id) => (
            <Card key={id}>
                <View style = {styles.slettKnapp}><Text style={styles.titleText} >{avtale.title}</Text><TouchableHighlight onPress={() => {this.deleteCard(id)}}>
                    <Icon name = 'delete' size={20} color='#37474f'/>
                </TouchableHighlight></View>
                <Text style={styles.text}>{avtale.address}</Text>
                <Text style={styles.text}>{myFormatFunction("DD MMM YYYY, HH:mm",avtale.date)}</Text>
                <Button
                    color = '#cfd8dc'
                    backgroundColor='#37474f'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10}}
                    title='VIEW MAP'
                    //Navigating to the map with the address to the appointment
                    onPress={() => {navigation.navigate('MapScreen', {
                      address: avtale.address
                    })}}
                />
            </Card>
        ));
        return (
            <ScrollView style = {styles.scrolls}>
            <View >
                {avtaleKort}
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    slettKnapp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    titleText: {
        color: '#37474f',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 8,
        marginRight: 8,
    },
    text:{
        color: '#37474f',
        fontSize: 15,
        marginBottom: 2,
        marginLeft: 8,
        marginRight: 8,
    },
    scrolls:{
        backgroundColor: '#37474f',
    }
});



export default Appointment;
