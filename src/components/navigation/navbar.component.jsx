import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';
import { Button } from '../button/button.component';
import * as Styles from './navbar.styles'
import ClickAwayListener from 'react-click-away-listener'
import { logout } from '../../redux/auth/auth.slice';


export function Navbar() {
    const navigate = useNavigate()

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
        navigate('/')
        hideLogoutButton();
    }

    return (
        <Styles.Root>
            <Link to="/">
                <Styles.Title>Memories</Styles.Title>
            </Link>
            { userData?._id && (
                <ClickAwayListener onClickAway={hideLogoutButton}>
                    <Styles.NameContainer>
                        <Styles.Name data-testid="user-logged-in" onClick={showLogoutButton}>{ `Hi, ${userData.name.split(' ')[0]}` }</Styles.Name>
                        { logoutButtonIsVisible && (
                            <Button data-testid="logout-button" onClick={handleLogout} className="navbar-logout-button">Logout</Button>
                        )}
                    </Styles.NameContainer>
                </ClickAwayListener>
            )}
        </Styles.Root>
    )
}