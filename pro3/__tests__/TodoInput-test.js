import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoInput from '../src/components/Todo/TodoInput';

it('renders correctly', () => {
const tree = renderer.create(<TodoInput/>).toJSON();
expect(tree).toMatchSnapshot();
spyOn(console, 'error');
});
