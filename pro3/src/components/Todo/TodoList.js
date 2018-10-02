import React from 'react';
import {Text, 
        View,
        TouchableOpacity,
        StyleSheet,
        Dimensions
        } from 'react-native';
 

//Source: https://blog.eduonix.com/mobile-programming/learn-build-react-native-todo-application-part-1/
class TodoList extends React.Component {
    
    state = {
        isCompletet: false
    };

    toggleItem = () => {
        this.setState(prevState => {
        return{
            isCompleted: !prevState.isCompleted
        }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleItem}>
                    <View style={styles.circle}/>
                </TouchableOpacity>
                <Text style={styles.text}> Todo List will show here</Text>
                
            </View>
        );
        }
    }

    
    const { height, width } = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
          width: width - 50,
          borderBottomColor: '#bbb',
          borderBottomWidth: StyleSheet.hairlineWidth,
          flexDirection: 'row',
          alignItems: 'center'
        },
        text: {
          fontWeight: '500',
          fontSize: 18,
          marginVertical: 20
        },
        circle: {
          width: 30,
          height: 30,
          borderRadius: 15,
          borderColor: 'red',
          borderWidth: 3,
          marginRight: 20
        }
      });


export default TodoList;