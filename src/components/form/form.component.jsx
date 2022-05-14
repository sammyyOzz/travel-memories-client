import React from 'react'
import * as Styles from './form.styles'
import PropTypes from 'prop-types'

export function FormControl({ label, handleChange, textarea, error, ...inputProps }) {

    return (
        <Styles.Root>
            <Styles.Label>{ label }</Styles.Label>
            {
                !textarea ? (
                    <Styles.Input 
                        onChange={handleChange}
                        error={error}
                        { ...inputProps }
                    />
                ) : (
                    <Styles.Textarea 
                        onChange={handleChange}
                        error={error}
                        { ...inputProps }
                    />
                )

            }
            <Styles.Error>{ error }</Styles.Error>
        </Styles.Root>
    )
}

export function Form({ children, handleSubmit, ...props }) {

    return (
        <Styles.Form onSubmit={handleSubmit} { ...props }>
            { children }
        </Styles.Form>
    )
}


FormControl.propTypes = {
    label: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    textarea: PropTypes.bool,
    error: PropTypes.string,
}

Form.propTypes = {
    children: PropTypes.any,
    handleSubmit: PropTypes.func.isRequired
}