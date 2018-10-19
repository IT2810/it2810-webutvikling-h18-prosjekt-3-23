import { AsyncStorage } from 'react-native';

export default ScoreManager = {

      async saveTaskScore(score) {
        try {
          await AsyncStorage.setItem('TASKSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.error(error.message);
        }
      },

      async saveAppScore(score) {
        try {
            await AsyncStorage.setItem('APPSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.error(error.message);
        }
      }
}

