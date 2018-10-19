import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, ScrollView} from 'react-native';
import {Button} from 'react-native-elements'
import t from 'tcomb-form-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment'


const Form = t.form.Form;

//defines form
const CardInfo = t.struct({
    Title: t.String,
    Address: t.String,
    Dato: t.Date,
});

//date format
let myFormatFunction = (format,date) =>{
    return moment(date).format(format);
}

//Error messages
let options = {
    fields: {
        Title: {error: "Fill in a title"},
        Address: {error: "Fill inn location"},
        Dato: {
            mode: 'datetime',
            config: {
                format: (date) => myFormatFunction("DD MMM YYYY, HH:mm",date)
            },
            error: "Select date"
        }
    }
};

class NewCard extends React.Component {

    //Header navigation and style
    static navigationOptions = ({navigation}) => {
        return {
            title: 'New Appointment',
            headerTintColor: '#eceff1',
            headerStyle: {
                backgroundColor: '#37474f',
            },
            headerTitleStyle: {
                color: '#eceff1'
            },
            headerLeft: (
                <TouchableHighlight onPress={() => {navigation.navigate('AppointmentScreen')}}>
                    <Icon name = 'chevron-left' size={30} color='#eceff1'/>
                </TouchableHighlight>
            )
        }
    };

    //Retrieves values form form input and sends it to AppointmentScreen
    handleSubmit = () => {
        const value = this._form.getValue();// use that ref to get the form value
        if (value === null){
            return;
        } else {
            this.setState({title: value.Title, address: value.Address, date: value.Dato})
            this.props.navigation.navigate('AppointmentScreen', {
                title: value.Title, address: value.Address, date: value.Dato
            })
        }
    };

    render() {
        return (
            <ScrollView style = {styles.scrollV}>
                <View style={styles.container}>
                    <Form options = {options}
                          ref={c => this._form = c}
                          type={CardInfo}/>
                    <Button
                        color = '#cfd8dc'
                        backgroundColor='#37474f'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Save'
                        onPress={this.handleSubmit}
                    />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10,
        padding: 20,
        backgroundColor: '#eceff1',
    },
    scrollV: {
        backgroundColor: '#37474f',
    }
});


export default NewCard;
