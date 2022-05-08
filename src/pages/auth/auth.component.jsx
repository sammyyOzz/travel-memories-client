import React from 'react'
import * as Styles from './auth.styles'

import { Form, FormControl } from '../../components/form/form.component'
import { Button } from '../../components/button/button.component'


function Auth() {

    /***********************************************************************
     * handlers
     ***********************************************************************/
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Styles.Root>
            <Styles.FormContainer>
                <Styles.Title>Login</Styles.Title>

                <Form handleSubmit={handleSubmit}>
                    <FormControl 
                        label="Username"
                        name="username"
                        type="text"
                        required
                    />
                    <FormControl 
                        label="Email"
                        name="email"
                        type="email"
                        required
                    />
                    <FormControl 
                        label="Password"
                        name="password"
                        type="password"
                        required
                    />
                    <FormControl 
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        required
                    />
                    <Button fullWidth>Login</Button>
                </Form>
            </Styles.FormContainer>
        </Styles.Root>
    )
}

export default Auth