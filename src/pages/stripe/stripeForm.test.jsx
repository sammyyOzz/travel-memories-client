import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { CheckoutForm } from './stripeForm.component';
import * as reactRedux from 'react-redux';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE
const stripeTestPromise = loadStripe(STRIPE_PUBLIC_KEY)

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

describe('<CheckoutForm />', () => {
    const submit = jest.fn(() => null);

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => {
            jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => {
                return submit;
            });
        });
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;

    const mockStore = {
        auth: {
            user: { 
                status: 'FULFILLED', 
                data: { _id: '123', name: 'John' }, 
                error: null 
            }
        },
    }

    it('renders submit button', () => {
        const history = createMemoryHistory()
        render(
            <Router location={history.location} navigator={history}>
                <Elements stripe={stripeTestPromise}>
                    <CheckoutForm />
                </Elements>
            </Router>
        )
        const submitButton = screen.getByTestId('submit-button')
        expect(submitButton).toBeInTheDocument()
        // userEvent.click(submitButton)
        // expect(submit).toBeCalled()
    })
})