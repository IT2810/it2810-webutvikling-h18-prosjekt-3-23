import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Denne siden skal vekk
class TodoPageJulie extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>TodoTodo, egen side</Text>
      </View>
    )
  }
}

export default TodoPageJulie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
