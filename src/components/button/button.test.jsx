import { Button } from './button.component'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test('it calls onClick prop when clicked' , () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
})