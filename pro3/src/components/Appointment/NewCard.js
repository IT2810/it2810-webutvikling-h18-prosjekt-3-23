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

let options = {
    fields: {
        Title: {error: "Fill in a title"},
        Location: {error: "Fill inn location"},
        Dato: {
            mode: 'datetime',
            config: {
                format: (date) => myFormatFunction("DD MMM YYYY, hh:mm",date)
            },
            error: "Select date"
        }
    }
};

class NewCard extends React.Component {


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

    handleSubmit = () => {
        const value = this._form.getValue();// use that ref to get the form value
        if (value === null){
            return;
        } else {
            console.log('value: ', value);
            this.setState({title: value.Title, location: value.Location, date: value.Dato})
            this.props.navigation.navigate('AppointmentScreen', {
                title: value.Title, location: value.Location, date: value.Dato
            })
        }



    };




    render() {
        //console.log(this.state)
        //console.log(this.props)
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Form options = {options}
                          ref={c => this._form = c}
                          type={CardInfo}/>
                    <Button
                        color = '#eceff1'
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
        marginTop: 50,
        padding: 20,
        backgroundColor: '#eceff1',
    }
});


export default NewCard;
