import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { Navbar } from './navbar.component';
import * as reactRedux from 'react-redux';
import { logout } from '../../redux/auth/auth.slice';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

describe('<Navbar />', () => {
    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {});
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;

    const _logout = jest.spyOn({ logout }, 'logout');

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
        expect(logoutButton).not.toBeInTheDocument()
    })


})