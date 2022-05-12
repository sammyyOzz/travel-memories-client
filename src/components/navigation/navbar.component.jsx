import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';
import { Button } from '../button/button.component';
import * as Styles from './navbar.styles'
import ClickAwayListener from 'react-click-away-listener'
import { logout } from '../../redux/auth/auth.slice';


export function Navbar() {
    const { pathname } = useLocation()

    const { data: userData } = useSelector(selectLoggedInUser)

    const [logoutButtonIsVisible, setLogoutButtonIsVisible] = useState(false)

    const dispatch = useDispatch()

    const _logout =  () => dispatch(logout())

    /*******************************
     * handlers
     ******************************/
    const showLogoutButton = () => setLogoutButtonIsVisible(true)
    const hideLogoutButton = () => setLogoutButtonIsVisible(false)

    const handleLogout = () => {
        _logout();
        hideLogoutButton();
    }

    return (
        <Styles.Root>
            <Styles.Title>Memories</Styles.Title>
            { userData?._id ? (
                <ClickAwayListener onClickAway={hideLogoutButton}>
                    <Styles.NameContainer>
                        <Styles.Name onClick={showLogoutButton}>{ `Hi, ${userData.name}` }</Styles.Name>
                        { logoutButtonIsVisible && (
                            <Button onClick={handleLogout} className="navbar-logout-button">Logout</Button>
                        )}
                    </Styles.NameContainer>
                </ClickAwayListener>
            ) : (
                <Link to={ pathname === '/memories' ? '/auth' : '/memories'}>
                    <Styles.Login>{ pathname === '/memories' ? 'Login' : 'Memories' }</Styles.Login>
                </Link>
            )}
        </Styles.Root>
    )
}