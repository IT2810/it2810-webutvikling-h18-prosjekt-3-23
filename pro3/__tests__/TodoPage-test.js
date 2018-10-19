import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoPage from '../src/components/Todo/TodoPage';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native'

const navigationEx = { addListener: jest.fn() };
let scoreEx = 0;

const todoo = renderer.create(<TodoPage navigation={navigationEx}/>);

//Implements mocks
const mock = () => {
    const mockImpl = new MockAsyncStorage()
    jest.mock('AsyncStorage', () => mockImpl)
};

//Sjekker at komponenten rendrer riktig, og kjører en snapshot test.
it('should render corrrectly', async () => {
    mock();
    expect (todoo).toMatchSnapshot();
    jest.unmock('AsyncStorage');
    
});

//Tester at asyncstorage fungerer som det skal.
it('Mock Async Storage working', async () => {
    await storage.setItem('Key', '12')
    const value = await storage.getItem('Key')
    expect(value).toBe('12')
});

describe('score', () => {
    test('setState is called when increaseScore', async () => {
        const instance = todoo.root.instance;
        const mockSetState = jest.fn();
        instance.setState = mockSetState;
        instance.increaseScore();
        expect(mockSetState).toHaveBeenCalled();
        jest.unmock('AsyncStorage');
    });
});

describe('storage', () => {
    test('deleteTask should set state with no errors', async () => {
        const instance = todoo.root.instance;
        instance.deleteTask('12')
        expect(instance.setState).toBeCalled();
    });

    test('addTask should set state with no errors', async () => {
        const instance = todoo.root.instance;
        instance.addTask()
        expect(instance.setState).toBeCalled();
    });

    test('getTaskScoreAsync should set state with no errors', () => {
        const instance = todoo.root.instance;
        instance.getTaskScoreAsync().then((error) => {
            expect(error).toEqual(null);
            expect(instance.setState()).toBeCalled();
        });
    });
});

