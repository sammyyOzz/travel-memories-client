import React from 'react'
import * as Styles from './form.styles'


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

export function Form({ children, handleSubmit }) {

    return (
        <Styles.Form onSubmit={handleSubmit}>
            { children }
        </Styles.Form>
    )
}