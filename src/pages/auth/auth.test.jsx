import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Auth from './auth.component';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { styledComponentsTheme } from '../../theme/styledComponents.theme';
import { Provider } from 'react-redux';
import store from '../../redux/store';


describe('<Auth />', () => {

    it('renders auth component', () => {
        const history = createMemoryHistory()
        render(
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    <ThemeProvider theme={styledComponentsTheme}>
                        <Auth />
                    </ThemeProvider>
                </Router>
            </Provider>
        )
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        userEvent.click(button)
        expect(history.location.pathname).toBe("/");
    })
})