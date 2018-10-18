import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from '../src/components/Homepage/Homepage';
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
    const tree = renderer.create(<Homepage navigation={navigationEx}/>).toJSON();
    expect (tree).toMatchSnapshot();
    jest.unmock('AsyncStorage');
});

it('Mock Async Storage working', async () => {
    await storage.setItem('TASKSCORE', '5')
    const value = await storage.getItem('TASKSCORE')
    expect(value).toBe('5')
});