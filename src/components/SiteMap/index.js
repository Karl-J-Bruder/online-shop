import React from 'react';
import { StyledSiteMapContainer, StyledSiteMapSection, StyledSectionTitle, StyledSectionItem } from "./StyledSiteMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SiteMap = () => {
    return (
        <StyledSiteMapContainer>
            <StyledSiteMapSection>
                <StyledSectionTitle>Shop</StyledSectionTitle>
                <StyledSectionItem href="/products">Browse Sakes</StyledSectionItem>
                <StyledSectionItem href="/tours">Tours</StyledSectionItem>
            </StyledSiteMapSection>
            <StyledSiteMapSection>
                <StyledSectionTitle>About Us</StyledSectionTitle>
                <StyledSectionItem href="/staff">Staff</StyledSectionItem>
                <StyledSectionItem href="/mailing-list">Join our mailing list</StyledSectionItem>
                <StyledSectionItem href="https://sake-world.com">Our blog</StyledSectionItem>
            </StyledSiteMapSection>
            <StyledSiteMapSection>
                <StyledSectionTitle>Customer Service</StyledSectionTitle>
                <StyledSectionItem href="/contact">Contact us</StyledSectionItem>
                <StyledSectionItem href="/shipping">Shipping policies</StyledSectionItem>
                <StyledSectionItem href="/terms-and-conditions">Terms and Conditions</StyledSectionItem>
            </StyledSiteMapSection>
            <StyledSiteMapSection>
                <StyledSectionTitle>Follow us</StyledSectionTitle>
                <StyledSectionItem href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} style={{ marginRight: "5px" }} />Facebook</StyledSectionItem>
                <StyledSectionItem href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ marginRight: "5px" }} />Twitter</StyledSectionItem>
                <StyledSectionItem href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} style={{ marginRight: "5px" }} />Instagram</StyledSectionItem>
            </StyledSiteMapSection>
        </StyledSiteMapContainer>
    )
};
export default SiteMap;