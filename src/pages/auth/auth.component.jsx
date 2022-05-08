import React, { useEffect, useState } from 'react'
import * as Styles from './auth.styles'

import { Form, FormControl } from '../../components/form/form.component'
import { Button } from '../../components/button/button.component'

import { emailPattern, passwordPattern } from '../../utils/constants/auth.constant'


function Auth() {
    /***********************************************************************
     * state
     ***********************************************************************/
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' })
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' })
    const [isSignup, setIsSignup] = useState(true)

    const formIsValid = isSignup 
        ? !errors.email && !errors.password && !errors.confirmPassword
        : !errors.email && !errors.password


    /***********************************************************************
     * hooks
     ***********************************************************************/
    useEffect(() => {
        setFormData({ username: '', email: '', password: '', confirmPassword: '' })
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

        alert('submitted')
    }

    return (
        <Styles.Root>
            <Styles.FormContainer>
                <Styles.Title>{ isSignup ? 'Sign Up' : 'Login' }</Styles.Title>

                <Form handleSubmit={handleSubmit}>
                    { isSignup && (
                    <FormControl 
                        label="Username"
                        name="username"
                        type="text"
                        value={formData.username}
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
                    <Button fullWidth>{ isSignup ? 'Sign Up' : 'Login' }</Button>
                </Form>
                <Styles.Footer>
                    <Styles.FooterElement onClick={handleSignupToggle}>{ !isSignup ? 'Sign Up' : 'Login' }</Styles.FooterElement>
                    { !isSignup && <Styles.FooterElement>Forgot Password?</Styles.FooterElement>}
                </Styles.Footer>
            </Styles.FormContainer>
        </Styles.Root>
    )
}

export default Auth