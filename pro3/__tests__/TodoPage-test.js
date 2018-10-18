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

const navigationEx = { addListener: jest.fn() };

it('renders correctly', () => {
const tree = renderer.create(<TodoPage navigation={navigationEx}/>).toJSON();
expect(tree).toMatchSnapshot();
spyOn(console, 'error');
});
