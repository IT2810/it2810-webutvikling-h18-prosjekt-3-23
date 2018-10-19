import { AsyncStorage} from 'react-native'

//Handles the AsyncStorage saving of the tasks
export default TaskManager = {
    //Converts to an array of objects
    toArrayOfObject(tasks, callback) {
      return callback(
        tasks ? tasks.split("||").map((task, i) => ({ key: i.toString(), text: task })) : []
      );
    },
  
    //Converts to a string with seperators
    toStringWithSeparators(tasks) {
      return tasks.map(task => task.text).join("||");
    },
  
    //Retrieves the tasks from AsyncStorage
    async all(callback) {
      return await AsyncStorage.getItem("TASKS", (err, tasks) =>
        this.toArrayOfObject(tasks, callback)
      );
    },

    //Saves the tasks to AsyncStorage
    async save(tasks) {
      await AsyncStorage.setItem("TASKS", this.toStringWithSeparators(tasks));
    }
  };


  