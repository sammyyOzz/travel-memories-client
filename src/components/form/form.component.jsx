import React from 'react'
import * as Styles from './form.styles'
import PropTypes from 'prop-types'
import selectedIcon from '../../assets/icons/selected.png'

export function FormControl({ label, htmlFor, name, handleChange, textarea, error, ...inputProps }) {

    return (
        <Styles.Root>
            <Styles.Label htmlFor={htmlFor}>{ label }</Styles.Label>
            {
                !textarea ? (
                    <Styles.Input 
                        name={name}
                        onChange={handleChange}
                        error={error}
                        { ...inputProps }
                        data-testid="form-control-input"
                    />
                ) : (
                    <Styles.Textarea 
                        name={name}
                        onChange={handleChange}
                        error={error}
                        { ...inputProps }
                        data-testid="form-control-textarea"
                    />
                )

            }
            <Styles.Error>{ error }</Styles.Error>
        </Styles.Root>
    )
}

export function Form({ children, handleSubmit, ...props }) {

    return (
        <Styles.Form data-testid="form" onSubmit={handleSubmit} { ...props }>
            { children }
        </Styles.Form>
    )
}


export function RadioButton({ selected, handleClick, label }) {

    return (
        <Styles.RadioButton onClick={handleClick} selected={selected}>
            { selected 
                ? <Styles.RadioButtonImage src={selectedIcon} alt="" />
                : <Styles.RadioButtonNotSelected />
            }
            <Styles.RadioButtonText>{ label }</Styles.RadioButtonText>
        </Styles.RadioButton>
    )
}


FormControl.propTypes = {
    label: PropTypes.string,
    handleChange: PropTypes.func,
    textarea: PropTypes.bool,
    error: PropTypes.string,
}

Form.propTypes = {
    children: PropTypes.any,
    handleSubmit: PropTypes.func.isRequired
}