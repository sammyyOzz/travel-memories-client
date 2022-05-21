import React, { useState } from 'react'
import { Layout } from '../../components/layout/layout.component'
import * as Styles from './stripe.styles'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./stripeForm.component";

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE
const stripeTestPromise = loadStripe(STRIPE_PUBLIC_KEY);


function Stripe() {

  return (
    <Layout hideSidePanel>
      <Styles.Root>
        <Styles.FormContainer>
          <Styles.Title>Payment</Styles.Title>
          <Styles.Message>
            To have access to this private content and discussion, you will pay a fee of <strong>$20</strong>,
            fill in your card details below to proceed.
          </Styles.Message>

          <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
          </Elements>

        </Styles.FormContainer>
      </Styles.Root>
    </Layout>
  )
}

export default Stripe