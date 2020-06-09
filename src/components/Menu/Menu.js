import React from 'react';
import { bool } from "prop-types";
import { StyledBurgerMenu } from "../../styles/Menu/StyledBurgerMenu";


//For use with sake-shop project

const BurgerMenu = ({ open, numItems }) => {
    return (
        <StyledBurgerMenu open={open}>
            <a href="/">Home</a>
            <a href="/view-cart">Cart ( {numItems} )</a>
            <a href="/products">Browse Sake</a>
            <a href="/tours">Tours</a>
            <a href="/shipping-and-legal">Shipping {"&"} Legal Info</a>
            <a href="/contact">Contact us</a>
        </StyledBurgerMenu>
    )
}
BurgerMenu.propTypes = {
    open: bool.isRequired,
}

export default BurgerMenu;