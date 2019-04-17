// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);

import Controls from './Controls'

describe('<Controls />', () => {
    it('renders <Controls /> without crashing', () => {
        render(<Controls />);
    })

    it('should create create a snapshot of <Controls/>', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('should have the locking button starting as "lock gate" as starting value', () => {
        const { getByText } = render(<Controls />);
        getByText(/lock gate/i);
    })

    it('should have a open button starting as close gate as starting value', () => {
        const { getByText } = render(<Controls />);
        getByText(/close gate/i);
    })

    it('should have lock gate disabled if gate is open as default value', () => {
        const { getByText } = render(<Controls />);
        const lockButton = getByText(/lock gate/i)
        expect(lockButton).toBeDisabled();
    })

    it('should have the close gate enabled', () => {
        const { getByText } = render(<Controls/>);
        const closeButton = getByText(/close gate/i);
        expect(closeButton).toBeEnabled()
    })

    it('should call toggleLocked on clicked', () => {
        const toggleLockedMocking = jest.fn();
        const { getByText } = render(
            <Controls toggleLocked={toggleLockedMocking} closed={true}
        />)

        const lockButton = getByText(/lock gate/i);
        fireEvent.click(lockButton);
        expect(toggleLockedMocking).toBeCalledTimes(1);
    })

    it('should call the toggleClosed on click', () => {
        const toggleCloseMock = jest.fn();
        const { getByText } = render(<Controls toggleClosed = {toggleCloseMock}/>);
        const closeButton = getByText(/close gate/i);
        
        fireEvent.click(closeButton);

        expect(toggleCloseMock).toBeCalledTimes(1);
    })
})