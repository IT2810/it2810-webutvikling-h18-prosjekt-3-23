import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../src/components/Todo/TodoList';

it('renders correctly', () => {
const tree = renderer.create(<TodoList/>).toJSON();
expect(tree).toMatchSnapshot();
spyOn(console, 'error');
});
