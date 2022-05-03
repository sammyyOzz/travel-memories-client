import React from 'react'
import * as Styles from './form.styles'


export function FormControl({ label, handleChange, ...inputProps }) {

    return (
        <>
            <Styles.Label>{ label }</Styles.Label>
            <Styles.Input 
                onChange={handleChange}
                { ...inputProps }
            />
        </>
    )
}

export function Form({ children, handleSubmit }) {

    return (
        <Styles.Form onSubmit={handleSubmit}>
            { children }
        </Styles.Form>
    )
}