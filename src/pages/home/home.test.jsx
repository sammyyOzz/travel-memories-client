import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Home from './home.component'
import * as reactRedux from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { styledComponentsTheme } from '../../theme/styledComponents.theme';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))


describe('<Home />', () => {
    const getMemories = jest.fn(() => null);

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => {
            jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => {
                return getMemories;
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
        memories: {
            memories: { status: null, data: [], error: null },
            saveMemory: { status: null, data: [], error: null }
        },
    }

    it('gets memories onload', () => {
        const history = createMemoryHistory()
        useDispatchMock.mockReturnValue(getMemories);

        render(
            <ThemeProvider theme={styledComponentsTheme}>
                <Router location={history.location} navigator={history}>
                    <Home />
                </Router>
            </ThemeProvider>
        )
        expect(getMemories).toBeCalled()
    })

    it('does not render login button when user is logged in', () => {
        const loginButton = screen.queryByTestId('login-button')
        expect(loginButton).not.toBeInTheDocument() 
    })
})
