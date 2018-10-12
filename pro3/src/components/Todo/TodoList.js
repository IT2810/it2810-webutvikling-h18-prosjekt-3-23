import React, {Component} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class TodoList extends Component {


  render() {
    return (
      <FlatList
          style={this.props.listStyle}
          data={this.props.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={this.props.listItemCont}>
                <Text style={this.props.listItem}>
                  {item.text}
                </Text>
                <TouchableHighlight title="Delete" onPress={() => this.props.deleteTask(index)}>
                  <Icon name="check" color="#607D8B" size={24}/>
                </TouchableHighlight>
              </View>
              <View style={this.props.hr} />
            </View>}
        />
    );
  }
}