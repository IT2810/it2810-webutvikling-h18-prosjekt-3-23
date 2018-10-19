import { AsyncStorage } from 'react-native';

export default ScoreManager = {

      //Saves the taskScore to AsyncStorage
      async saveTaskScore(score) {
        try {
          await AsyncStorage.setItem('TASKSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.error(error.message);
        }
      },

      //Saves the appointments score to AsyncStorage
      async saveAppScore(score) {
        try {
            await AsyncStorage.setItem('APPSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.error(error.message);
        }
      }
}

