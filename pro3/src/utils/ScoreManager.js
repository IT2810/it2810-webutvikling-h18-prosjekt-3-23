import { AsyncStorage } from 'react-native';

export default ScoreManager = {

    saveScore(score) {
        try {
            AsyncStorage.setItem('TASKSCORE', score);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      }
}


