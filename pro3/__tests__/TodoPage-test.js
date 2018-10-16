import TodoPage from '../src/components/Todo/TodoPage';
import React from "react";
import renderer from 'react-test-renderer';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';
import * as jest from "react-native";

const mock = () => {
    const mockImpl = new MockAsyncStorage();
    jest.mock('AsyncStorage', () => mockImpl);
};

it('Should render correctly', async  () => {
    mock();
    await storage.setItem('TASKS', '{}');
    await storage.setItem('TASKSCORE', '{}');
    const value1 = await storage.getItem('TASKS');
    const value2 = await storage.getItem('TASKSCORE');
    const component = renderer.create(<TodoPage/>)

});
