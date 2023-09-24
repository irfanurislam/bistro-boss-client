import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

import './chekoutForm.css'

const CheckoutForm = ({price,cart}) => {
  const stripe = useStripe()
  const elements = useElements();
  const {user} = useAuth()
  const [axiosSecure] = useAxiosSecure()
 const [cardError, setCardError] = useState('')
 const [clientSecret,setClientSecret] = useState('');
 const [processing,setProcessing] = useState(false);
 const [transactionId,setTransactionId] = useState('')



useEffect(() =>{
 if(price > 0){
  axiosSecure.post('/create-payment-intent', {price})
 .then(res =>{
  console.log(res.data.clientSecret)
  setClientSecret(res.data.clientSecret)
 })
 }
},[])




  const handleSubmit = async(event) =>{
    event.preventDefault()
     if(!stripe || elements){
      return 
     }
     const card = elements.getElement(CardElement)
      if (card === null) {
      return;
    }
    console.log('card,',card)
    const {error} = await stripe.createPaymentMethod({
      type:'card',
      card
    })
    if(error){
      console.log('error', error)
      setCardError(error.message)
    }
    else{
      setCardError('')
      console.log('payment method',paymentMethod)
    }

    setProcessing(true)
    const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,{
        payment_method:{
          card: card,
          billing_details:{
            email: user?.email || 'unknown',
            name: user?.displayName || 'unknown',
          },
        },
      },
      );
      if(confirmError){
        console.log(confirmError)
         setCardError(confirmError)

      }
      console.log(paymentIntent)
   setProcessing(false)
if(paymentIntent.status === "succeeded"){
  setTransactionId(paymentIntent.id)
  // TODO : next step here
  const payment = {email: user?.email,transactionId: paymentIntent.id ,
  price, quantity:cart.length,
  status:'service pendind',
  cartItems: cart.map(item => item._id),
  menuItems: cart.map(item => item.menuItemId),
  itemNames:cart.map(item => item.name)}
}
axiosSecure.post('/payments',payment)
.then(res =>{
  console.log(res.data)
  if(res.data.insertedId){
    alert('success visa card ');
    // dispaly confirm
  }

})

  }
  return (
      <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-warning btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {transactionId && <p className="text-success">{transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
