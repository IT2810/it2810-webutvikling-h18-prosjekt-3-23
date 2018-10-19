import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from './Homepage/Homepage';
import TodoPage from './Todo/TodoPage';
import AppStackNavigator from './Appointment/AppointmentStackNav';


/*A material-design themed tab bar on the bottom of the page that lets you switch between different screens.*/
export default createMaterialBottomTabNavigator ({
    //Route configurations
    Home:{screen: HomePage,
      navigationOptions:{
        tabBarLable: 'Home',
        tabBarIcon:({tintColor})=>(
          <Icon name="home" color={tintColor} size={24}/>
        )
      }
    },
    Appointments:{screen: AppStackNavigator,
      navigationOptions:{
        tabBarLable: 'Appointments',
        tabBarIcon:({tintColor})=>(
          <Icon name="calendar" color={tintColor} size={24}/>
        )
      }
    },
    Todo:{screen: TodoPage,
      navigationOptions:{
        tabBarLable: 'Todo',
        tabBarIcon:({tintColor})=>(
          <Icon name="list" color={tintColor} size={24}/>
        )
      }
    }
  },{
    //Navigator configurations
    initialRouteName:'Home',
    activeTintColor: '#263238',
    inactiveColor: '#b0bec5',
    barStyle: { backgroundColor: '#eceff1' },
})
