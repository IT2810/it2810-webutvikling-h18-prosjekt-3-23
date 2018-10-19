import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Appointment from '../src/components/Appointment/Appointment';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';

const navigationEx = { addListener: jest.fn() };

//Implements mocks
const mock = () => {
    const mockImpl = new MockAsyncStorage()
    jest.mock('AsyncStorage', () => mockImpl)
};

it('should render corrrectly', async () => {
    mock();
    const tree = renderer.create(<Appointment navigation={navigationEx}/>).toJSON();
    expect (tree).toMatchSnapshot();
    jest.unmock('AsyncStorage');
});

it('Mock Async Storage working', async () => {
    await storage.setItem('testKey', '5')
    const value = await storage.getItem('testKey')
    expect(value).toBe('5')
});
