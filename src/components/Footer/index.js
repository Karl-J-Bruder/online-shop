import React from 'react';
import { StyledPaymentOptions, StyledFooterText } from "./StyledFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcDiscover, faCcAmex, faPaypal } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <StyledFooterText>(C) Sake Shop Inc. All Rights Reserved</StyledFooterText>
            <StyledPaymentOptions>
                <StyledFooterText><FontAwesomeIcon icon={faCcVisa} style={{ marginRight: "5px" }} />Visa</StyledFooterText>
                <StyledFooterText><FontAwesomeIcon icon={faCcMastercard} style={{ marginRight: "5px" }} />MasterCard</StyledFooterText>
                <StyledFooterText><FontAwesomeIcon icon={faCcDiscover} style={{ marginRight: "5px" }} />Discover</StyledFooterText>
                <StyledFooterText><FontAwesomeIcon icon={faCcAmex} style={{ marginRight: "5px" }} />American Express</StyledFooterText>
                <StyledFooterText><FontAwesomeIcon icon={faPaypal} style={{ marginRight: "5px" }} />Paypal</StyledFooterText>
            </StyledPaymentOptions>
        </div>

    );
};

export default Footer;