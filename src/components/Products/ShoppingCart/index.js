import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from "../../../contexts/ProductContext";
import { StyledCartWrapper, StyledCartInner, StyledCartTable, StyledCartTH, StyledCartTR, StyledCartImage, StyledCartTotal, StyledCartTotalPrice, StyledCheckoutButton, StyledEmptyCart } from "./StyledShoppingCart";

const formatPrice = (price) => {
    return `$${(price * 0.01).toFixed(2)}`;
}

const totalPrice = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price, 0.0
    );
}

const ShoppingCart = ({ stripeToken }) => {
    const ctx = useContext(ProductContext);
    const [cartState, setCartState] = useState(JSON.parse((localStorage.getItem("LocalStorageCart"))));
    useEffect(() => {
        let LS = JSON.parse((localStorage.getItem("LocalStorageCart")));
        setCartState(LS);
    }, [])
    const [stripe, setStripe] = useState(null);
    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe(stripeToken));
        }
    }, [stripeToken])
    const checkout = () => {
        stripe.redirectToCheckout({
            items: ctx.items.map(item => ({
                quantity: item.quantity,
                sku: item.sku
            })),
            successUrl: "https://your-website.com/success",
            cancelUrl: "https://your-website.com/canceled"
        });
    }
    return (
        <StyledCartWrapper>{ctx.items.length ? <StyledCartInner>
            <StyledCartTable>
                <thead>
                    <StyledCartTR>
                        <StyledCartTH>Name</StyledCartTH>
                        <StyledCartTH>Image</StyledCartTH>
                        <StyledCartTH>Quantity</StyledCartTH>
                        <StyledCartTH>Price</StyledCartTH>
                    </StyledCartTR>
                </thead>
                <tbody>
                    {ctx.items.map((item, index) => (
                        <tr>
                            <td>{item.name}</td>
                            <td><StyledCartImage src={`/images/${item.sku}.jpg`}
                                alt={item.name}
                                width={50}
                            />
                            </td>
                            <td>{item.quantity}</td>
                            <td>{formatPrice(item.price * item.quantity)}</td>
                        </tr>
                    ))}
                    <tr>
                        <StyledCartTotal colSpan={3} style={{ textAlign: "right" }}>
                            Total:
                        </StyledCartTotal>
                        <StyledCartTotalPrice>{formatPrice(totalPrice(ctx.items))}</StyledCartTotalPrice>
                    </tr>
                    <tr>
                        <td colSpan={4} style={{ textAlign: "right" }}>
                            <StyledCheckoutButton onClick={checkout}>Checkout</StyledCheckoutButton>
                        </td>
                    </tr>
                </tbody>
            </StyledCartTable>
        </StyledCartInner> : (<StyledEmptyCart>Your cart is empty</StyledEmptyCart>)}</StyledCartWrapper>

    );
}

export default ShoppingCart;