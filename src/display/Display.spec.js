// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup } from 'react-testing-library';


import Display from './Display';

describe('<Display />', () => {

    //display render test
    it('renders display without crashing', () => {
        render(<Display />)
    })

    //snapshot!!
    it('should create a match snapshot of display', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    })

    //tets default values   
    it('has a default of unlocked and closed so "locked" and "closed" should be false', () => {
        const { getByText } = render(<Display />);
        getByText(/unlocked/i);
        getByText(/open/i);
    })
})