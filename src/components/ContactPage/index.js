import React from "react";
import { StyledPageTitle, StyledPageSubText, StyledContactList, StyledListItem } from "./StyledContactPage";

const Contact = () => {
    return (
        <div style={{ margin: "auto" }}>
            <StyledPageTitle>Contact us</StyledPageTitle>
            <StyledPageSubText><p>Questions or comments? Send us an email!</p></StyledPageSubText>
            <StyledContactList>
                <StyledListItem><strong>Products</strong>: products@sakeshop.com</StyledListItem>
                <StyledListItem><strong>Tours</strong>: tours@sakeshop.com</StyledListItem>
                <StyledListItem><strong>Shipping</strong>: accounting@sakeshop.com</StyledListItem>
                <StyledListItem><strong>Other</strong> (questions, feedback, etc.): customersupport@sakeshop.com</StyledListItem>
            </StyledContactList>
        </div>
    )
}

export default Contact;