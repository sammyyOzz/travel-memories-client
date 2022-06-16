import React, { useEffect, useState, useCallback } from 'react'
import * as Styles from './auth.styles'

import { Form, FormControl } from '../../components/form/form.component'
import { Button } from '../../components/button/button.component'

import { emailPattern, passwordPattern } from '../../utils/constants/auth.constant'

import { useDispatch, useSelector } from 'react-redux' 
import { loginUser, signupUser } from '../../redux/auth/auth.slice'
import { selectLoggedInUser } from '../../redux/auth/auth.selectors'
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant'

import { useNavigate } from 'react-router-dom'
import { Layout } from '../../components/layout/layout.component'
import { LoginWithGoogle } from '../../components/loginWithGoogle/loginWithGoogle.component'
 

function Auth() {
    const navigate = useNavigate()

    /***********************************************************************
     * selectors
     ***********************************************************************/
    const { status, error } = useSelector(selectLoggedInUser)


    /***********************************************************************
     * state
     ***********************************************************************/
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' })
    const [isSignup, setIsSignup] = useState(true)

    const formIsValid = isSignup 
        ? !errors.email && !errors.password && !errors.confirmPassword
        : !errors.email && !errors.password

    
    /***********************************************************************
     * dispatch
     ***********************************************************************/
    const dispatch = useDispatch()

    const _loginUser = useCallback(userData => dispatch(loginUser(userData)).unwrap().then(() => navigate('/')), [])
    const _signupUser = useCallback(userData => dispatch(signupUser(userData)).unwrap().then(() => navigate('/')), [])


    /***********************************************************************
     * hooks
     ***********************************************************************/
    useEffect(() => {
        setFormData({ name: '', email: '', password: '', confirmPassword: '' })
        setErrors({ email: '', password: '', confirmPassword: '' })
    }, [isSignup])


    /***********************************************************************
     * handlers
     ***********************************************************************/
    const handleChange = e => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleEmailBlur = () => {
        if(emailPattern.test(formData.email)) {
            setErrors(prevState => { return { ...prevState, email: "" }})
        } else {
            setErrors(prevState => { return { ...prevState, email: "Invalid Email!" }})
        }
    }

    const handlePasswordBlur = () => {
        if(passwordPattern.test(formData.password)) {
            setErrors(prevState => { return { ...prevState, password: "" }})
        } else {
            setErrors(prevState => { return { ...prevState, password: "Password must be as least 8 characters!" }})
        }
    }

    const handleConfirmPasswordBlur = () => {
        if((formData.confirmPassword !== formData.password) && (formData.password.length > 0)) {
            setErrors(prevState => { return { ...prevState, confirmPassword: "Passwords don't match" }})
        } else {
            setErrors(prevState => { return { ...prevState, confirmPassword: "" }})
        }
    }

    const handleSignupToggle = () => setIsSignup(prevState => !prevState)

    const handleSubmit = e => {
        e.preventDefault();

        if (!formIsValid) return

        if (isSignup) {
            _signupUser(formData)
        } else {
            _loginUser(formData)
        }
    }

    return (
        <Layout hideSidePanel>
            <Styles.Root>
                <Styles.FormContainer>
                    <Styles.Title>{ isSignup ? 'Sign Up' : 'Login' }</Styles.Title>

                    <Styles.Error>{ error?.message }</Styles.Error>
                    <Form handleSubmit={handleSubmit}>
                        { isSignup && (
                        <FormControl 
                            label="Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            handleChange={handleChange}
                            required
                        />)}
                        <FormControl 
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            handleChange={handleChange}
                            onBlur={handleEmailBlur}
                            error={errors.email}
                            required
                        />
                        <FormControl 
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            handleChange={handleChange}
                            onBlur={handlePasswordBlur}
                            error={errors.password}
                            required
                        />
                        { isSignup && (
                        <FormControl 
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            handleChange={handleChange}
                            onBlur={handleConfirmPasswordBlur}
                            error={errors.confirmPassword}
                            required
                        />)}
                        <Button fullWidth loading={status === HTTP_STATUS.PENDING}>{ isSignup ? 'Sign Up' : 'Login' }</Button>
                    </Form>
                    <LoginWithGoogle />
                    <Styles.Footer>
                        <Styles.FooterElement onClick={handleSignupToggle}>{ !isSignup ? 'Sign Up' : 'Login' }</Styles.FooterElement>
                        <Styles.FooterElement onClick={() => navigate('/forgot-password')}>Forgot Password?</Styles.FooterElement> 
                    </Styles.Footer>
                </Styles.FormContainer>
            </Styles.Root>
        </Layout>
    )
}

export default Auth