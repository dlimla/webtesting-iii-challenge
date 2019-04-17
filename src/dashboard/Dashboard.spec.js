// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import "jest-dom/extend-expect";

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    //render test
    it('renders dashboard without crashing', () => {
        render(<Dashboard/>)
    })

    //snapshot dash test
    it('should create a match snapshot of dashboard', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    })

    

})