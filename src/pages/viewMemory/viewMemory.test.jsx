import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../../redux/store';
import { styledComponentsTheme } from '../../theme/styledComponents.theme';
import ViewMemory from './viewMemory.component';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


describe('<ViewMemory>', () => {
    test('should match snapshot', () => {
        const history = createMemoryHistory()
        let scrollIntoViewMock = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

        expect(
            render(
                <Provider store={store}>
                    <ThemeProvider theme={styledComponentsTheme}>
                        <Router location={history.location} navigator={history}>
                            <ViewMemory />
                        </Router>
                    </ThemeProvider>
                </Provider>
            )
        ).toMatchSnapshot()
    })
})