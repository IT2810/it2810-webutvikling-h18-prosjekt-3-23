
import NewCard from "../src/components/Appointment/NewCard";
import handleSubmit from "../src/components/Appointment/NewCard";
import React from "react";
import renderer from 'react-test-renderer';
import jest from 'jest-mock';

it('Should render correctly', () => {
    const component = renderer.create(<NewCard/>)
});

test('handleSubmit exists', () => {
    expect(handleSubmit).toBeDefined();
});