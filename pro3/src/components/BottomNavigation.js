import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
//Disse skal erstattes med de faktiske sidene som skal brukes:
import HomePageJulie from './HomePageJulie';
import TodoPageJulie from './TodoPageJulie';
import AppointmentsPageJulie from './AppointmentsPageJulie';


const HomePageRoute = () => <HomePageJulie></HomePageJulie>;
const TodoPageRoute = () => <TodoPageJulie></TodoPageJulie>;
const AppointmentsPageRoute = () => <AppointmentsPageJulie></AppointmentsPageJulie>;


export default createMaterialBottomTabNavigator ({
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
  initialRouteName:'Home',
  //shifting: true,
  activeTintColor: '#263238',
  inactiveColor: '#b0bec5',
  barStyle: { backgroundColor: '#eceff1' },
})