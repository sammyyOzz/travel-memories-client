import { render, screen } from "@testing-library/react"
import { ListMemories } from "./listMemories.component"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<ListMemories />', () => {
    const initialState = { 
        memories: {
            memories: []
        }
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    test('renders list of memories when loading is false', () => {
        const { rerender } = render(
            <Provider store={store}>
                <ListMemories memories={[]} loading={false} />
            </Provider>
        )
        expect(screen.getByTestId('list-memories').children.length).toEqual(0)

        const dummyMemories = [
            { _id: '0', place: 'Hilltop' },
            { _id: '1', place: 'Hilltop' }
        ]

        rerender(
            <Provider store={store}>
                <ListMemories memories={dummyMemories} loading={false} />
            </Provider>
        )
        expect(screen.getByTestId('list-memories').children.length).toEqual(2)
    })

    test('does not render memories when loading is true', () => {
        render(
            <Provider store={store}>
                <ListMemories memories={[]} loading={true} />
            </Provider>
        )
        expect(screen.queryByTestId('list-memories')).not.toBeInTheDocument()

    })
})