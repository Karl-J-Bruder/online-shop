import React, { useState, useContext } from 'react';
import { ProductContext } from "../../../contexts/ProductContext";
import Burger from "../../Burger";
import BurgerMenu from "../../BurgerMenu";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledTopNav, StyledPromoMessage, StyledPromoText, StyledTopNavMenu, StyledTopNavItem, StyledRRLinkItem } from "./StyledTopNav";
import { faIconSizes } from "../../../styles/theme";
import { Link } from "react-router-dom";


const TopNav = () => {
    const [open, setOpen] = useState(false);
    const cartCTX = useContext(ProductContext);
    const numItems = cartCTX.itemsCount;
    const style = {
        color: "black",
        height: "100%",
        width: "100%",
        textDecoration: "none"
    }
    return (
        <StyledTopNav>
            <StyledPromoMessage>
                <StyledPromoText>Flat rate shipping to anywhere in the Continental US and Canada: $12.99. <br />Buy more, save more. FREE shipping on orders of 4 or more bottles!</StyledPromoText>
            </StyledPromoMessage>
            <StyledTopNavMenu>
                <StyledTopNavItem>
                    <Burger open={open} setOpen={setOpen} />
                </StyledTopNavItem>
                <StyledTopNavItem style={{ fontSize: "1.5rem" }}>LOGO</StyledTopNavItem>
                <Link to="/view-cart" style={style}>
                    <StyledRRLinkItem>
                        <span style={{ fontSize: "20px", fontWeight: "bold", marginRight: "5px" }}>{numItems}</span><FontAwesomeIcon icon={faShoppingCart} style={faIconSizes.faMed} />
                    </StyledRRLinkItem>
                </Link>
            </StyledTopNavMenu>
            <BurgerMenu open={open} setOpen={setOpen} numItems={numItems} />
        </StyledTopNav>
    )
}

export default TopNav;