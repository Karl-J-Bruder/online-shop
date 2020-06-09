import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { StyledHeaderBanner, StyledSiteTitle, StyledHeaderLinks, StyledImage, StyledImageInner } from "./StyledHeader";
import { ProductContext } from "../../contexts/ProductContext";
import { HeaderLinkStyle, HeaderLinkActiveStyle } from "../../styles/theme";

const Header = () => {
    const cartCtx = useContext(ProductContext);
    const numItems = cartCtx.itemsCount;
    return (
        <div>
            <StyledHeaderBanner>
                <StyledImage>
                    <StyledSiteTitle>Sake Shop</StyledSiteTitle>
                    <StyledImageInner></StyledImageInner>
                </StyledImage>
            </StyledHeaderBanner>
            <StyledHeaderLinks>
                <NavLink style={HeaderLinkStyle} activeStyle={HeaderLinkActiveStyle} to="/" exact={true}>Home</NavLink>
                <NavLink style={HeaderLinkStyle} activeStyle={HeaderLinkActiveStyle} to="/products">Browse Sake</NavLink>
                <NavLink style={HeaderLinkStyle} activeStyle={HeaderLinkActiveStyle} to="/view-cart">Cart ({numItems})</NavLink>
            </StyledHeaderLinks>
        </div>
    )
};

export default Header;