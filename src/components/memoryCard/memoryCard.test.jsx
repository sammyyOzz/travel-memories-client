import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryCard } from "./memoryCard.component"
import store from '../../redux/store'

describe('<MemoryCard />', () => {
    test('passes snapshot', () => {
        expect(render(
            <Provider store={store}>
                <MemoryCard />
            </Provider>
        )).toMatchSnapshot()
    })
})