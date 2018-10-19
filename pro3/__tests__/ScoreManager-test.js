import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native'
import ScoreManager from '../src/utils/ScoreManager'


//Implements mocks
const mock = () => {
    const mockImpl = new MockAsyncStorage()
    jest.mock('AsyncStorage', () => mockImpl)
};


describe('storage', () => {
    test('saveTaskScore should store in AsyncStorage with no errors', () => {
        ScoreManager.saveTaskScore("").then((error) => {
            expect(error).toEqual(null);
            expect(storage.setItem).toBeCalledWith('test', JSON.stringify(""));
        });
    });

    test('saveAppScore should store in AsyncStorage with no errors', () => {
        ScoreManager.saveAppScore("").then((error) => {
            expect(error).toEqual(null);
            expect(storage.setItem).toBeCalledWith('test', JSON.stringify(""));
        });
    });
});
