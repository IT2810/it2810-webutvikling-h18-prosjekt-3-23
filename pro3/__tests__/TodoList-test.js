import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../src/components/Todo/TodoList';

const tasksEx = [{"key":"0","text":"Hei"}, {"key":"1","text":"Hallo"}]

it('renders correctly', () => {
const tree = renderer.create(<TodoList tasks={tasksEx}/>).toJSON();
expect(tree).toMatchSnapshot();
spyOn(console, 'error');
});


