import { FormControl } from './form.component'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('<FormControl />', () => {
    test('it should render input when textarea prop is false', () => {
        render(<FormControl />)
        expect(screen.getByTestId('form-control-input')).toBeInTheDocument()
        expect(screen.queryByTestId('form-control-textarea')).not.toBeInTheDocument()
    })

    test('it should render textarea when textarea prop is true', () => {
        render(<FormControl textarea />)
        expect(screen.getByTestId('form-control-textarea')).toBeInTheDocument()
        expect(screen.queryByTestId('form-control-input')).not.toBeInTheDocument()
    })
})