import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { styledComponentsTheme } from '../../theme/styledComponents.theme'
import Stripe from './stripe.component'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'

describe('<Stripe', () => {
    it('should match snapshot', () => {
        const history = createMemoryHistory()
        expect(
            render(
                <Provider store={store}>
                    <ThemeProvider theme={styledComponentsTheme}>
                        <Router location={history.location} navigator={history}>
                            <Stripe />
                        </Router>
                    </ThemeProvider>
                </Provider>
            )
        ).toMatchSnapshot()
    })
})