import React from 'react'
import * as Styles from './button.styles'

export function Button ({ children, ...props }) {

    return (
        <Styles.Root { ...props }>
            { children }
        </Styles.Root>
    )
}