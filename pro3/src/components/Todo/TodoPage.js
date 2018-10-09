import React, { Component } from "react";
import {StyleSheet,Text, View, TextInput} from "react-native";
import TaskManager from '../../utils/TaskManager'
import TodoList from './TodoList'
import TodoInput from './TodoInput'


//Source: https://gist.githubusercontent.com/ahmedam55/b10adc17c4eed1bb634cf6d934552b52/raw/6352387a68ce01f7f9230b7fae30f8c37871e129/index.js

const viewPadding = 10;

export default class TodoPage extends Component {

  constructor(){
    super()

    this.state = {
      tasks: [],
      text: ""
    };

    this.deleteTask = this.deleteTask.bind(this);
  }

  
  //Changes the state of the text. Used in input-field in render, so change based on text-input
  changeTextHandler = text => {
    this.setState({ text: text });
  };


  //Add a task
  addTask = () => {
    //Checks if a new text-input is submitted
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            //Adds the text from the inputfield to the task-array
            tasks: tasks.concat({ key: tasks.length.toString(), text: text }),
            //Sets the state of text to be an empty string again
            text : ""
          };
        },
        //Saves the new state in AsyncStorage
        () => TaskManager.save(this.state.tasks)
      );
    }
  };


  //Delete a task
  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();
        //Removes 1 element on index i
        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      //Saves new state in AsyncStorage
      () => TaskManager.save(this.state.tasks)
    );
  };
  
  
  //Loads all task from storage
  componentDidMount() {
    TaskManager.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}>

        <Text style={styles.heading}>My tasks</Text>
        <TodoInput 
                  styleTextInput={styles.textInput} 
                  changeTextHandler={this.changeTextHandler}
                  addTask={this.addTask} 
                  text= {this.state.text}>
        </TodoInput>

        <TodoList tasks={this.state.tasks} 
                  listStyle={styles.list}
                  listItemCont={styles.listItemCont} 
                  listItem={styles.listItem} 
                  hr={styles.hr} 
                  deleteTask={this.deleteTask} >
        </TodoList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#263238",
    padding: viewPadding,
    paddingTop: 20,
    width: "100%"
  },
  list: {
    width: "100%",
    marginTop: 10
  },
  listItem: {
    padding: 5,
    fontSize: 24,
    color: "#CFD8DC"
  },
  hr: {
    height: 1,
    backgroundColor: "#607D8B"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    padding: 5,
    borderColor: "#78909c",
    borderWidth: 1.8,
    width: "100%",
    color: "#CFD8DC",
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
  },
  heading : {
    fontSize: 30,
    color: "#CFD8DC",
    margin: 5
  }
});