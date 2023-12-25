import React, { useState } from 'react';
import Script from 'react-load-script';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"
import "./Checkout.css"
const Checkout = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [isScriptLoadError, setIsScriptLoadError] = useState(false);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

    const handleScriptLoad = () => {
        setIsScriptLoaded(true);
    };

    const handleScriptError = () => {
        setIsScriptLoadError(true);
    };

    const handleProceed = () => {
        if (isScriptLoaded) {
            const options = {
                key: 'rzp_test_dn9V09NkT3HejA',
                amount: 1000,
                currency: 'INR',
                name: 'Amazon clone',
                description: 'Purchase',
                handler: (response) => {
                    setIsPaymentSuccess(true);
                },
                prefill: {},
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } else {
            console.log('Razorpay script is not yet loaded');
        }
    };
    
    return ( <div >
        {isPaymentSuccess ? ( < div className = "success-message" >
            <h2 color='white' >Payment Successful! </h2> <p > Thank you for your purchase. </p >
            </div >
        ) : ( < div  className='button-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button onClick = { handleProceed } > Proceed to Payment </button> {!isScriptLoaded && !isScriptLoadError && ( <p > Loading Razorpay script... </p >
        )
    } {
        isScriptLoadError && ( < p > Error occurred
            while loading Razorpay script. </p>
        )
    } </div>
)
} <
Script url = "https://checkout.razorpay.com/v1/checkout.js"
onLoad = { handleScriptLoad }
onError = { handleScriptError }/> </div >
);
};

export default Checkout;