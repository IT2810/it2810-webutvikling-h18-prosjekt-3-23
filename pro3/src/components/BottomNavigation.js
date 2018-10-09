import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homepage from './Homepage/Homepage';


//Disse skal erstattes med de faktiske sidene som skal brukes:
import TodoPage from './Todo/TodoPage';
import AppointmentsPageJulie from './AppointmentsPageJulie';

//Alt med navnet Julie i seg skal endres!
const HomePageRoute = () => <Homepage></Homepage>;
const TodoPageRoute = () => <TodoPage></TodoPage>;
const AppointmentsPageRoute = () => <AppointmentsPageJulie></AppointmentsPageJulie>;

/*A material-design themed tab bar on the bottom of the screen that lets you switch between different routes.
  https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html */
export default createMaterialBottomTabNavigator ({
    /*Route configurations*/
    Home:{screen: HomePageRoute,
      navigationOptions:{
        tabBarLable: 'Home',
        tabBarIcon:({tintColor})=>(
          <Icon name="home" color={tintColor} size={24}/>
        )
      }
    },
    Appointments:{screen: AppointmentsPageRoute,
      navigationOptions:{
        tabBarLable: 'Appointments',
        tabBarIcon:({tintColor})=>(
          <Icon name="calendar" color={tintColor} size={24}/>
        )
      }
    },
    Todo:{screen: TodoPageRoute,
      navigationOptions:{
        tabBarLable: 'Todo',
        tabBarIcon:({tintColor})=>(
          <Icon name="list" color={tintColor} size={24}/>
        )
      }
    }
  },{
    /*Navigator configurations*/
    initialRouteName:'Home',
    activeTintColor: '#263238',
    inactiveColor: '#b0bec5',
    barStyle: { backgroundColor: '#eceff1' },
})