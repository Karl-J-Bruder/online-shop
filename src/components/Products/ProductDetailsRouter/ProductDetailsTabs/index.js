import React from 'react';
import useReactRouter from "use-react-router";
import { StyledTabsContainer, StyledLink } from "./StyledProductDetailsTabs";
import { RRLActiveStyle } from "../../../../styles/theme";

const ProductDetailsTabs = () => {
    const { match } = useReactRouter();

    return (
        <StyledTabsContainer>
            <li><StyledLink to={`${match.url}/product-description`} exact activeStyle={RRLActiveStyle} >Description</StyledLink></li>
            <li><StyledLink to={`${match.url}/product-reviews`} activeStyle={RRLActiveStyle}>Reviews</StyledLink></li>
            <li><StyledLink to={`${match.url}/discount-info`} activeStyle={RRLActiveStyle}>Discount</StyledLink></li>
            <li><StyledLink to={`${match.url}/about-the-brewer`} activeStyle={RRLActiveStyle}>Brewer Profile</StyledLink></li>
        </StyledTabsContainer>
    )
};

export default ProductDetailsTabs;