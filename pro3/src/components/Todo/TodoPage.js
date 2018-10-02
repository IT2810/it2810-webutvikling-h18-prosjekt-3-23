import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './TodoList.js'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native'

class TodoPage extends React.Component {

  state = {
    newTodoItem: ''
  };

  newTodoItemController = textValue => {
      this.setState({
          newTodoItem : textValue
      });
  };

  render() {
    return (
      <View>
        <View style={styles.listHolder}>
            <Text style={styles.txt} >This is going to be an todo-list</Text>
            <TextInput 
            style={styles.input} 
            placeholder="What needs to be done?"
            value = {this.newTodoItem}
            onChangeText={this.newTodoItemController}
            placeholderTextColor = {'#999'}
            returnKeyType={'done'}
            autoCorrect = {false}
            />
            <ScrollView contentContainerStyle={styles.listContainer}>
              <TodoList></TodoList>
            </ScrollView>
        </View>
      </View>
    );
  }
}

const {height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  txt : {
    fontSize : 18,
    paddingBottom: 10,
  },
  listHolder: {
    backgroundColor: "#fff",
    flex : 1,
    width : width - 25,
    borderRadius : 10,
    alignItems: 'center',
    paddingTop: 50,
  },
  input : {
      padding: 20,
      borderBottomColor : '#bbb',
      borderBottomWidth: 1,
      fontSize: 18,
  },
  listContainer: {
    alignItems: 'center'
  }
});


export default TodoPage;
