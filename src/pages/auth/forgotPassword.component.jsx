import React, { useState } from 'react'
import * as Styles from './auth.styles'

import { Form, FormControl } from '../../components/form/form.component'
import { Button } from '../../components/button/button.component'

import { emailPattern } from '../../utils/constants/auth.constant'

import { useDispatch } from 'react-redux' 
import { forgotPassword } from '../../redux/auth/auth.slice'

import { useNavigate } from 'react-router-dom'
import { AnimatedPage } from '../../components/animation/animatedPage.component'
 

function ForgotPassword() {
    const navigate = useNavigate()

    /***********************************************************************
     * state
     ***********************************************************************/
    const [formData, setFormData] = useState({ email: '' })
    const [errors, setErrors] = useState({ email: '' })
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState('')

    const formIsValid = !errors.email 

    
    /***********************************************************************
     * dispatch
     ***********************************************************************/
    const dispatch = useDispatch()

    const _forgotPassword = data => dispatch(forgotPassword(data)).unwrap()
        .then(() => {
            setLoading(false)
            setResponse('Password reset link has been sent to your email.')
        })


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


    const handleSubmit = e => {
        e.preventDefault();
        if (!formIsValid) return
        setLoading(true);
        _forgotPassword(formData)
    }

    return (
        <AnimatedPage>
            <Styles.Root>
                <Styles.FormContainer>
                    <Styles.Title>Forgot Password</Styles.Title>

                    <Styles.Message>{ response }</Styles.Message>
                    <Form handleSubmit={handleSubmit}>
                        
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
                        
                        <Button fullWidth loading={loading}>Reset Password</Button>
                    </Form>
                    <Styles.Footer>
                        <Styles.FooterElement onClick={() => navigate('/auth')}>Signup</Styles.FooterElement>
                    </Styles.Footer>
                </Styles.FormContainer>
            </Styles.Root>
        </AnimatedPage>
    )
}

export default ForgotPassword