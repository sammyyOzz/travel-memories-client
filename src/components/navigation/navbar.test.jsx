import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { Navbar } from './navbar.component';
import * as reactRedux from 'react-redux';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

describe('<Navbar />', () => {
    const logout = jest.fn(() => null);

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => {
            jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => {
                return logout;
            });
        });
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;

    const mockStore = {
        auth: {
            user: { 
                status: 'FULFILLED', 
                data: { _id: '123', name: 'John' }, 
                error: null 
            }
        },
    }

    it('renders navbar when user is logged in', () => {
        const history = createMemoryHistory()
        render(
            <Router location={history.location} navigator={history}>
                <Navbar />
            </Router>
        )
        const userLoggedIn = screen.getByTestId('user-logged-in')
        expect(userLoggedIn).toBeInTheDocument()
        userEvent.click(userLoggedIn)
        const logoutButton = screen.getByTestId('logout-button')
        expect(logoutButton).toBeInTheDocument()
        userEvent.click(logoutButton)
        expect(logout).toBeCalled()
        expect(logoutButton).not.toBeInTheDocument()
    })
})