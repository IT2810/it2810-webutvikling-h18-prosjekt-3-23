import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class TodoInput extends Component {

    render() {
        return (
            <TextInput
                    style={this.props.styleTextInput}
                    onChangeText={this.props.changeTextHandler}
                    onSubmitEditing={this.props.addTask}
                    value={this.props.text}
                    placeholder="+ Add a new task"
                    returnKeyType="done"
                    returnKeyLabel="done"
                    placeholderTextColor="rgba(96, 125, 139, 0.631)"
            />
        )
    }
}