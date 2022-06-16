import React, { useCallback } from 'react'
import { Button } from '../button/button.component'
import googleIcon from '../../assets/icons/google.png'
import { useGoogleLogin } from '@react-oauth/google';
import { loginWithGoogle } from '../../redux/auth/auth.slice'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


export function LoginWithGoogle() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const _loginWithGoogle = useCallback(data => dispatch(loginWithGoogle(data)).unwrap().then(() => navigate('/')), [])

    const login = useGoogleLogin({
        onSuccess(res) {
            _loginWithGoogle({ code: res.code })
        },
        flow: 'auth-code',
    });

    return (
        <Button fullWidth onClick={() => login()}>
            <img
                src={googleIcon}
                alt=""
                height="20"
                width="20"
                style={{ marginRight: '10px' }}
            />
            google login
        </Button>
    )
}

