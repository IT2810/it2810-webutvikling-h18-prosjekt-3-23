import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Header} from "react-native-elements";

import Icon from 'react-native-vector-icons/MaterialIcons';


class NewCard extends React.Component {


    static navigationOptions ={
        //Setter den innebygde headeren til null fordi vi helle rlager en selv.
        header: null
    }

    render() {
        return (
            <View>
                <Header backgroundColor={'#37474f'}
                        placement="left"
                        centerComponent={{ text: 'Create New Appointment', style: { color: '#eceff1' } }}
                        leftComponent={<TouchableHighlight onPress={() => {this.props.navigation.navigate('AppointmentScreen')}}>
                            <Icon name = 'chevron-left' size={30} color='#eceff1'/>
                        </TouchableHighlight>}>

                </Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreText: {
        fontFamily: 'HelveticaNeue-UltraLight',
        color: '#37474f',
    }
})
export default NewCard;
