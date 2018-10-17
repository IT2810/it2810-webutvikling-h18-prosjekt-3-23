import { AsyncStorage } from 'react-native';

export default ScoreManager = {

    saveTaskScore(score) {
        try {
            AsyncStorage.setItem('TASKSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      },

      saveAppScore(score) {
        try {
            AsyncStorage.setItem('APPSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      }
}


