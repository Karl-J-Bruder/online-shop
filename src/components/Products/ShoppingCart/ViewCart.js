import React from "react";
import ShoppingCart from "./index";


const ViewCart = () => {
    return (
        <div>
            <ShoppingCart stripeToken={process.env.REACT_APP_STRIPE_TOKEN} /> </div>
    );
}

export default ViewCart;