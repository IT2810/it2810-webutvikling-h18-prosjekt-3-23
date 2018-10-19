import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native'
import TaskManager from '../src/utils/TaskManager'


//Implements mocks
const mock = () => {
    const mockImpl = new MockAsyncStorage()
    jest.mock('AsyncStorage', () => mockImpl)
};


describe('storage', () => {
    test('saveTaskScore should store in AsyncStorage with no errors', () => {
        TaskManager.save("").then((error) => {
            expect(error).toEqual(null);
            expect(storage.setItem).toBeCalledWith('test', JSON.stringify(""));
        });
    });
});