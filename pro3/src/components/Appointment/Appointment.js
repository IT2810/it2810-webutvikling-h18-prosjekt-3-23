import React from 'react';
import {AsyncStorage, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, Card} from 'react-native-elements'
import NewCard from './NewCard.js';


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
        super(props)
        this.state = {
            avtaler: []
        }
        this.retrieveItems()
    }

    retrieveItems() {
        try{
            AsyncStorage.getItem("Appointments").then(res => {
                if(res === null){
                    AsyncStorage.setItem("Appointments", JSON.stringify([]))
                } else {
                    this.setState({avtaler: JSON.parse(res)})
                }
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
            this.setState({ avtaler: this.state.avtaler.concat([item]) })
            AsyncStorage.setItem("Appointments", JSON.stringify(this.state.avtaler))
        } catch (error) {
            console.log(error.message)
        }
    };

    render() {
        const fremtidigeAvtaler = this.state.avtaler.filter(avtale =>
            new Date(avtale.date).getTime() > new Date()
        )
        const avtaleKort = fremtidigeAvtaler.map((avtale, i) => (
            <Card key={i}>
                <Text>{avtale.title}</Text>
                <Text>{avtale.location}</Text>
                <Text>{new Date(avtale.date).toLocaleString()}</Text>
                <Button
                    color = '#eceff1'
                    backgroundColor='#37474f'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW MAP'
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
});


export default Appointment;