import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Styles from './navbar.styles'

export function Navbar() {
    const { pathname } = useLocation()

    return (
        <Styles.Root>
            <Styles.Title>Memories</Styles.Title>
            <Link to={ pathname === '/memories' ? '/auth' : '/memories'}>
                <Styles.Login>{ pathname === '/memories' ? 'Login' : 'Memories' }</Styles.Login>
            </Link>
        </Styles.Root>
    )
}