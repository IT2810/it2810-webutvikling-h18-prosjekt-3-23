import React from 'react';
import renderer from 'react-test-renderer';
import Geolocation from '../src/components/Geolocation';
import setRegion from '../src/components/Geolocation';

jest.mock('Expo', () => 'MapView');

it('renders correctly', () => {
  const tree = renderer.create(<Geolocation/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('setRegion exists', () => {
    expect(setRegion).toBeDefined();
});
