import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, ScrollView} from 'react-native';
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import GenerateForm from 'react-native-form-builder';



const Form = t.form.Form;

const CardInfo = t.struct({
    Title: t.String,
    Location: t.String,
    Dato: t.Date,
});

class NewCards extends React.Component {
    constructor(){
        super()

        this.state = {title: "edd", location: 'her', date: Date}

    }


    static navigationOptions = ({navigation}) => {
        return {
            title: 'New Appoinment',
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
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        this.setState({title: value.Title, location: value.Location, date: value.Dato})
        this.props.navigation.navigate('AppointmentScreen', {
            title: value.Title, location: value.Location, date: value.Dato
        })
        console.log('Print state' + JSON.stringify(this.state));

    };


    render() {
        //console.log(this.state)
        //console.log(this.props)
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Form ref={c => this._form = c}
                          options = {(date) => String(date)}
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


export default NewCards;