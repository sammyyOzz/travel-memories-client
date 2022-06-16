import React from 'react'
import * as Styles from './button.styles'
import CircularProgress from '@mui/material/CircularProgress';

export function Button ({ children, loading, ...props }) {

    return (
        <Styles.Root disabled={loading} { ...props }>
            { !loading ?  children : <CircularProgress size={20} style={{ color: 'white' }} /> }
        </Styles.Root>
    )
}