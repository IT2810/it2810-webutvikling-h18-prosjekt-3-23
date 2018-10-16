import Appointment from "../src/components/Appointment/Appointment";
import React from "react";
import renderer from 'react-test-renderer';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';
import * as jest from "react-native";
import handleSubmit from "../src/components/Appointment/NewCard";


const mock = () => {
    const mockImpl = new MockAsyncStorage();
    jest.mock('AsyncStorage', () => mockImpl);
};

test('storeItem exists', () => {
    expect(Appointment.storeItem).toBeDefined();
});


it('Should render correctly', async  () => {
    mock();
    await storage.setItem('Appointments', '{}');
    await storage.setItem('APPSCORE', '{}');
    const value1 = await storage.getItem('Appointments');
    const value2 = await storage.getItem('APPSCORE');
    const component = renderer.create(<Appointment />)

});