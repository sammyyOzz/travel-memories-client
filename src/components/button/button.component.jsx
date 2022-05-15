import React from 'react'
import * as Styles from './button.styles'
import ClipLoader from "react-spinners/ClipLoader";


export function Button ({ children, loading, ...props }) {

    return (
        <Styles.Root disabled={loading} { ...props }>
            { !loading ?  children : <ClipLoader Loader="PacmanLoader" size={25} />}
        </Styles.Root>
    )
}