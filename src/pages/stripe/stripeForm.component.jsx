import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../../components/button/button.component";
import { Form } from "../../components/form/form.component";
import { useDispatch, useSelector } from "react-redux";
import { payForPrivateMemory } from "../../redux/stripe/stripe.slice";
import { useParams } from "react-router-dom";
import { selectLoggedInUser } from "../../redux/auth/auth.selectors";
import { addUserIDToAuthorized } from "../../redux/memories/memories.slice";
import { Message } from './stripe.styles'


export function CheckoutForm() {
  const { id: memoryID } = useParams()

  const { data: userData } = useSelector(selectLoggedInUser)

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')


  /***********************************************************************
   * dispatch
  ***********************************************************************/
  const dispatch = useDispatch();

  const _payForPrivateMemory = (data) => {
    setLoading(true)
    dispatch(payForPrivateMemory(data))
    .unwrap()
    .then(res => {
      setLoading(false)
      setMessage('Payment successful, you now have access to this private content.')
      dispatch(addUserIDToAuthorized({ memoryID, userID: userData?._id }))
      console.log(res)
    })
    .catch(err => {
      setLoading(false)
      setMessage('Sorry your payment could not be completed.')
      console.log(err)
    })
  }

  /***********************************************************************
   * handlers
  ***********************************************************************/
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      //send token to backend here
      const { id } = paymentMethod;

      _payForPrivateMemory({ id, urlParams: `/${memoryID}` })

    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <Message>{ message }</Message>
      <Form handleSubmit={handleSubmit}>
        <CardElement options={{ style: { base: { color: '#fff' }} }} />

        <Button fullWidth loading={loading} data-testid="submit-button">Submit</Button>
      </Form>
    </>
  );
};