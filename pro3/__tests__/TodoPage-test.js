import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoPage from '../src/components/Todo/TodoPage';

it('renders correctly', () => {

const tree = renderer.create(<TodoPage/>).toJSON();
expect(tree).toMatchSnapshot();
spyOn(console, 'error');
});
