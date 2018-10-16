import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "react-navigation";
import Geolocation from './Geolocation';
import Appointment from './Appointment/Appointment';
import NewCard from "./Appointment/NewCard";

//Component for navigating between different pages in the "appointment view"
const AppStackNavigator = createStackNavigator({
    AppointmentScreen: Appointment,
    NewCard: NewCard,
    MapScreen: Geolocation,
});


export default AppStackNavigator;
