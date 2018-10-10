import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { Card, Button} from 'react-native-elements'
import NewCard from './NewCard.js'

import Icon from 'react-native-vector-icons/MaterialIcons';


class Appointment extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'My Appoinments',
            headerStyle: {
                backgroundColor: '#37474f',
            },
            headerTitleStyle: {
                fontWeight: 'thin',
                color: '#eceff1'
            },
            headerRight: (
                <TouchableHighlight onPress={() => {navigation.navigate('NewCard')}}>
                    <Icon name = 'add' size={30} color='#eceff1'/>
                </TouchableHighlight>
            )
            }
    }

    constructor() {
        super()
        this.state = { avtaler: [{title: "edd", location: 'her', date: 'Datoen'}, {title: "chillern", location: 'her', date: 'Datoen'}]}
    }

    createNewCard () {
        const { navigation } = this.props;
        const title = navigation.getParam('title', null);
        const location = navigation.getParam('location', null);
        const dato = navigation.getParam('dato', null);
        console.log(title, location, dato);
        if (title != null || location != null){
            this.state.avtaler.push({title: title, location: location, dato: dato })}

    }

    render() {
        this.createNewCard()
        const avtaleKort = this.state.avtaler.map(avtale => (
            <Card>
                <Text>{avtale.title}</Text>
                <Text>{avtale.location}</Text>
                <Text>{avtale.date}</Text>
                <Button
                    color = '#eceff1'
                    backgroundColor='#37474f'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
        ));
        return (
            <View>
                {avtaleKort}
            </View>
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