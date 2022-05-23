import { render, screen } from "@testing-library/react"
import { ListMemories } from "./listMemories.component"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('<ListMemories />', () => {
    const initialState = { 
        auth: {
            user: { 
                status: 'FULFILLED', 
                data: { _id: '123', name: 'John' }, 
                error: null 
            }
        },
        memories: {
            memories: []
        }
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const history = createMemoryHistory()

    test('renders list of memories when loading is false', () => {

        const { rerender } = render(
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    <ListMemories memories={[]} loading={false} />
                </Router>
            </Provider>
        )
        expect(screen.getByTestId('list-memories').children.length).toEqual(0)

        const dummyMemories = [
            { _id: '0', place: 'Hilltop' },
            { _id: '1', place: 'Hilltop' }
        ]

        rerender(
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    <ListMemories memories={dummyMemories} loading={false} />
                </Router>
            </Provider>
        )
        expect(screen.getByTestId('list-memories').children.length).toEqual(2)
    })

    test('does not render memories when loading is true', () => {
        render(
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    <ListMemories memories={[]} loading={true} />
                </Router>
            </Provider>
        )
        expect(screen.queryByTestId('list-memories')).not.toBeInTheDocument()
    })
})