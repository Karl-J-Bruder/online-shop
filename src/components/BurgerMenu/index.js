import React, {
    useContext
} from 'react';
import {
    ProductContext
} from "../../contexts/ProductContext";
import {
    bool
} from "prop-types";
import {
    StyledBurgerMenu
} from "./StyledBurgerMenu";

//For use with sake-shop project

const BurgerMenu = ({
    open
}) => {
    const cartCTX = useContext(ProductContext);
    const numItems = cartCTX.itemsCount;
    return (
        <StyledBurgerMenu open={open}>
            <a href="https://nervous-mestorf-64ded5.netlify.app/">Home</a>
            <a href="https://nervous-mestorf-64ded5.netlify.app/products">Browse Sake</a>
            <a href="https://nervous-mestorf-64ded5.netlify.app/tours">Events {"&"}Tours</a>
            <a href="https://nervous-mestorf-64ded5.netlify.app/view-cart">Cart({numItems})</a>
            <a href="https://nervous-mestorf-64ded5.netlify.app/shipping">Shipping</a>
            <a href="https://nervous-mestorf-64ded5.netlify.app/contact" >Contact us</a>
        </StyledBurgerMenu>
    )
}
BurgerMenu.propTypes = {
    open: bool.isRequired,
}

export default BurgerMenu;