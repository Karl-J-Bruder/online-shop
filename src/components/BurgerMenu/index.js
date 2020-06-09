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
            <a href="/">Home</a>
            <a href="/products">Browse Sake</a>
            <a href="/tours">Events {"&"}Tours</a>
            <a href="/view-cart">Cart({numItems})</a>
            <a href="/shipping">Shipping</a>
            <a href="/contact" >Contact us</a>
        </StyledBurgerMenu>
    )
}
BurgerMenu.propTypes = {
    open: bool.isRequired,
}

export default BurgerMenu;