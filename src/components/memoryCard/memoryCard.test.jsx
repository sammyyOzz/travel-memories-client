import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryCard } from "./memoryCard.component"
import * as reactRedux from 'react-redux';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

describe('<MemoryCard />', () => {
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

    const mockStore = {
        auth: {
            user: { 
                status: 'FULFILLED', 
                data: { _id: '123', name: 'John' }, 
                error: null 
            }
        }
    }

    test('can view private memory if authorized', () => {
        const history = createMemoryHistory()
        render(
            <Router location={history.location} navigator={history}>
                <MemoryCard _id="memory-card-id" isPublic={false} authorized={['123']} />
            </Router>
        )
        const card = screen.getByTestId('card')
        userEvent.click(card)
        expect(history.location.pathname).toBe("/view-memory/memory-card-id");
    })

    test('redirects to payment page if unauthorized', () => {
        const history = createMemoryHistory()
        render(
            <Router location={history.location} navigator={history}>
                <MemoryCard _id="memory-card-id" isPublic={false} authorized={['555']} />
            </Router>
        )
        const card = screen.getByTestId('card')
        userEvent.click(card)
        expect(history.location.pathname).toBe("/payment/memory-card-id");
    })
})