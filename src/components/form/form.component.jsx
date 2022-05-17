import React from 'react'
import * as Styles from './form.styles'
import PropTypes from 'prop-types'

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