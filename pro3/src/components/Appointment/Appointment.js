import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { Card, Header, Button} from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialIcons';


class Appointment extends React.Component {

    static navigationOptions = {
        //Setter den innebygde headeren til null fordi vi helle rlager en selv.
        header: null,
        //Ta bort dette om det ikke skal brukes!!
        headerRight: (
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('NewCard')}}>
                <Icon name = 'add' size={30} color='#eceff1'/>
            </TouchableHighlight>
        ),
        title: 'My Appoinments',

        headerStyle: {
            backgroundColor: '#37474f',
        },
        headerTintColor: '#eceff1',

    };

    constructor() {
        super()
        this.state = { avtaler: [{navn: "edd", Klokkeslett: '12:00'}, {navn: "chillern", Klokkeslett: '12:00'}, {navn: "edd", Klokkeslett: '13:00'}]}
    }

    render() {
        const avtaleKort = this.state.avtaler.map(avtale => (
            <Card>
                <Text>{avtale.navn}</Text>
                <Text>{avtale.Klokkeslett}</Text>
                <Button
                    color = '#eceff1'
                    backgroundColor='#37474f'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
        ));
        return (


            <View>
                <Header backgroundColor={'#37474f'}
                    placement="left"
                    centerComponent={{ text: 'My Appointments', style: { color: '#eceff1' } }}
                    rightComponent={
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('NewCard')}}>
                        <Icon name = 'add' size={30} color='#eceff1'/>
                        </TouchableHighlight>}>
                </Header>
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