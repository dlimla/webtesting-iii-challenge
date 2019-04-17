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

    it('changes the display from open to close after clicking close button', () => {
        const {getByText} = render(<Dashboard/>);
        const closeButton = getByText(/close gate/i)
        const closedGate = getByText(/open/i)

        fireEvent.click(closeButton);

        expect(closedGate.textContent).toBe('Closed')
    })

    it('enables lock button after gate is closed', () => {
        const { getByText } = render(<Dashboard/>);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);
        
        fireEvent.click(closeButton);
        
        expect(lockButton).toBeEnabled();
    })

    it('disables the open button after gate is locked', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);

        fireEvent.click(closeButton);
        fireEvent.click(lockButton);

        const openButton = getByText(/open gate/i);
        expect(openButton).toBeDisabled();
    })
    
    it('enables to open the gate after it is unlocked', () => {
        const { getByText } = render(<Dashboard/>);

        const closeButton = getByText(/close gate/i);
        const lockButton = getByText("Lock Gate");

        fireEvent.click(closeButton);
        fireEvent.click(lockButton);

        const openButton = getByText(/open gate/i);
        const unlock = getByText("Unlock Gate");
        fireEvent.click(unlock);

        expect(openButton).toBeEnabled();
    })

})