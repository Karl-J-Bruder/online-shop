import React, { useState } from "react";
import emailListIcon from "../../assets/emailListIcon.png";
import { StyledMailingList, StyledHeader, StyledMainBody, StyledImg, StyledHeaderText, StyledFeatures, StyledFeatureItem, StyledConfirmationBox, StyledSubmitButton } from "./StyledMailingList";

const MailingList = () => {
    const [formState, setFormState] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormState("")
    }

    const handleInput = (e) => {
        setFormState(e.target.value)
    }

    return (
        <StyledMailingList>
            <div>
                <StyledHeader>
                    <StyledImg src={emailListIcon} />
                    <StyledHeaderText>
                        <p><strong>Join our mailing list!</strong></p>
                        <p>Get weekly updates about:</p>
                    </StyledHeaderText>
                </StyledHeader>
                <StyledMainBody>
                    <StyledFeatures>
                        <StyledFeatureItem>New products</StyledFeatureItem>
                        <StyledFeatureItem>Food pairings </StyledFeatureItem>
                        <StyledFeatureItem>Tour and event info</StyledFeatureItem>
                        <StyledFeatureItem>Discounts and special offers</StyledFeatureItem>
                        <StyledFeatureItem>...and much more!</StyledFeatureItem>
                    </StyledFeatures>
                    <form style={{ margin: "20px auto" }}
                        onSubmit={handleSubmit}>
                        <input style={{ height: "30px" }}
                            onChange={handleInput}
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            value={formState}
                        />
                        <StyledSubmitButton disabled={!formState} onClick={handleSubmit}>Sign Up</StyledSubmitButton>
                    </form>
                </StyledMainBody>
                {submitted ? (<StyledConfirmationBox><p>Thank you!</p><p>Please check your inbox.</p></StyledConfirmationBox>) : null}
            </div>
        </StyledMailingList>
    )
}

export default MailingList;