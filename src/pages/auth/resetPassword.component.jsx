import React, { useState } from 'react'
import * as Styles from './auth.styles'

import { Form, FormControl } from '../../components/form/form.component'
import { Button } from '../../components/button/button.component'

import { passwordPattern } from '../../utils/constants/auth.constant'

import { useDispatch } from 'react-redux' 
import { resetPassword } from '../../redux/auth/auth.slice'

import { AnimatedPage } from '../../components/animation/animatedPage.component'
import { useLocation } from 'react-router-dom'
 

function ResetPassword() {
    const location = useLocation()
    const urlQueryParams = new URLSearchParams(location.search)
    const token = urlQueryParams.get('token')
    const userID = urlQueryParams.get('userID')

    /***********************************************************************
     * state
     ***********************************************************************/
    const [formData, setFormData] = useState({ password: '', confirmPassword: '' })
    const [errors, setErrors] = useState({ password: '', confirmPassword: '' })
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState('')

    const formIsValid = !errors.password && !errors.confirmPassword

    
    /***********************************************************************
     * dispatch
     ***********************************************************************/
    const dispatch = useDispatch()

    const _resetPassword = userData => dispatch(resetPassword(userData)).unwrap()
        .then(() => {
            setLoading(false)
            setResponse('Your password has been reset, proceed to login')
        })
        .catch(() => {
            setLoading(false)
            setResponse('Something went wrong, please try again')
        })


    /***********************************************************************
     * handlers
     ***********************************************************************/
    const handleChange = e => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
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

    const handleSubmit = e => {
        e.preventDefault();
        if (!formIsValid) return
        setLoading(true);
        _resetPassword({ token, userID, password: formData.password })
    }

    return (
        <AnimatedPage>
            <Styles.Root>
                <Styles.FormContainer>
                    <Styles.Title>Reset Password</Styles.Title>

                    <Styles.Message>{ response }</Styles.Message>
                    <Form handleSubmit={handleSubmit}>
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
                        <FormControl 
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            handleChange={handleChange}
                            onBlur={handleConfirmPasswordBlur}
                            error={errors.confirmPassword}
                            required
                        />
                        <Button fullWidth loading={loading}>Reset Password</Button>
                    </Form>
                </Styles.FormContainer>
            </Styles.Root>
        </AnimatedPage>
    )
}

export default ResetPassword