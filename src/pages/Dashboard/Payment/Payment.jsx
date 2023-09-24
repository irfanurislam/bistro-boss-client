import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckOutForm';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';


// todo publication key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum,item) => sum + item.price,0);
const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle subHeading={'please provie'} heading={"procced payment"}>

            </SectionTitle>
            <h2>teka teka uira uira aso</h2>
          
            <Elements stripe = {stripePromise}>
                  <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements> 
        </div>
    );
};

export default Payment;