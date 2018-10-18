import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Appointment from '../src/components/Appointment/Appointment';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native'

const navigationEx = { addListener: jest.fn() };

//Implements mocks
const mock = () => {
    const mockImpl = new MockAsyncStorage()
    jest.mock('AsyncStorage', () => mockImpl)
};

//Sjekker at komponenten rendrer riktig, og kjører en snapshot test.
it('should render corrrectly', async () => {
    mock();
    const tree = renderer.create(<Appointment navigation={navigationEx}/>).toJSON();
    expect (tree).toMatchSnapshot();
    jest.unmock('AsyncStorage');
});

//Tester at asyncstorage fungerer som det skal.
it('Mock Async Storage working', async () => {
    await storage.setItem('Key', '12')
    const value = await storage.getItem('Key')
    expect(value).toBe('12')
});

it('setState is called when getAppScoreAsync runs', async () => {
    const component = renderer.create(<Appointment navigation={navigationEx} score = {score}/>)
    await storage.setItem('Key', '12')
    let score = await storage.getItem("Key");
    const instance = component.root.instance;
    const mockSetState = jest.fn();
    instance.setState = mockSetState;
    instance.getAppScoreAsync();
    expect(mockSetState).toHaveBeenCalled();
});
