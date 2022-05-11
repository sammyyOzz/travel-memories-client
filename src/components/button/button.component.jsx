import React from 'react'
import * as Styles from './button.styles'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export function Button ({ children, loading, ...props }) {

    return (
        <Styles.Root disabled={loading} { ...props }>
            { !loading ?  children : <ClipLoader Loader="PacmanLoader" size={25} />}
        </Styles.Root>
    )
}