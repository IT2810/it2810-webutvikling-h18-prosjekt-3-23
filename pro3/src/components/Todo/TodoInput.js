import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TodoInput extends Component {

    render() {
        return (
            <View width="100%">
                <TextInput
                        style={this.props.styleTextInput}
                        onChangeText={this.props.changeTextHandler}
                        onSubmitEditing={this.props.addTask}
                        value={this.props.text}
                        placeholder="+ Add a new todo"
                        returnKeyType="done"
                        returnKeyLabel="done"
                        placeholderTextColor="rgba(144, 164, 174, 0.685)"
                        underlineColorAndroid='transparent'
                />
                <View style = {this.props.listTextView}> 
                    <Text style = {this.props.listText}> Click on </Text>
                    <Icon name="check" color="#90A4AE" size={18}/>  
                    <Text style= {this.props.listText}> when task is completed</Text> 
                </View>
            </View>
        )
    }
}