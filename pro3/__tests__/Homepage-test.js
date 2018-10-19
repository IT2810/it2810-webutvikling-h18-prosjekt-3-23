import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from '../src/components/Homepage/Homepage';
import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';

const navigationEx = { addListener: jest.fn() };
const homepagee = renderer.create(<Homepage navigation={navigationEx}/>);

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

describe('score', () => {
    test('setState is called when clearScore', async () => {
        const instance = homepagee.root.instance;
        const mockSetState = jest.fn();
        instance.setState = mockSetState;
        instance.clearTaskScore();
        expect(mockSetState).toHaveBeenCalled();
        jest.unmock('AsyncStorage');
    });

    test('retrieveTaskScoreAsync should set state with no errors', () => {
        const instance = homepagee.root.instance;
        instance.retrieveTaskScoreAsync().then((error) => {
            expect(error).toEqual(null);
            expect(instance.setState()).toBeCalled();
        });
    });

    test('retrieveAppScoreAsync should set state with no errors', () => {
        const instance = homepagee.root.instance;
        instance.retrieveAppScoreAsync().then((error) => {
            expect(error).toEqual(null);
            expect(instance.setState()).toBeCalled();
        });
    });
});

