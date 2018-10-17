import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoPage from '../src/components/Todo/TodoPage';

const navigationEx = { addListener: jest.fn() };

it('renders correctly', () => {

const tree = renderer.create(<TodoPage navigation={navigationEx}/>).toJSON();
expect(tree).toMatchSnapshot();
spyOn(console, 'error');
});
