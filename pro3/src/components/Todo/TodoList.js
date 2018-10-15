import React, { Component } from "react";
import {StyleSheet,Text, View, FlatList, AsyncStorage, Button, TextInput,} from "react-native";

//Source: https://gist.githubusercontent.com/ahmedam55/b10adc17c4eed1bb634cf6d934552b52/raw/6352387a68ce01f7f9230b7fae30f8c37871e129/index.js

const viewPadding = 10;

class TodoList extends Component {

  state = {
    tasks: [],
    text: ""
  };

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
            tasks: tasks.concat({ key: tasks.length, text: text }),
            //Sets the state of text to be an empty string again
            text: ""
          };
        },
        //Saves the new state in AsyncStorage
        () => Tasks.save(this.state.tasks)
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
      () => Tasks.save(this.state.tasks)
    );
  };
  
  //Loads all task from storage
  componentDidMount() {
    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
      <Text style={styles.heading}>My tasks</Text>
      <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add a new task"
          returnKeyType="done"
          returnKeyLabel="done"
          placeholderTextColor="rgba(96, 125, 139, 0.631)"
        />
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button color="#607D8B" title="X" onPress={() => this.deleteTask(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
      </View>
    );
  }
}

export default TodoList; 

//Handles the AsyncStorage saving of the tasks
let Tasks = {
  //Converts to an array of objects
  toArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },

  //Converts to a string with seperators
  toStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },

  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.toArrayOfObject(tasks, callback)
    );
  },

  save(tasks) {
    AsyncStorage.setItem("TASKS", this.toStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#263238",
    padding: viewPadding,
    paddingTop: 20,
    width: "100%",
    marginTop:20,
    marginBottom:40,
  },
  list: {
    width: "100%",
    marginTop: 10
  },
  listItem: {
    padding: 5,
    fontSize: 22,
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
    borderWidth: 1.5,
    width: "100%",
    color: "#CFD8DC",
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10
  },
  heading : {
    fontSize: 30,
    color: "#CFD8DC",
    margin: 5
  }
});