import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useNavigation } from 'react-day-picker';
import Loading from '../../Shared/Loading/Loading';



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h3 className='text-3xl'>Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    >
                    </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
