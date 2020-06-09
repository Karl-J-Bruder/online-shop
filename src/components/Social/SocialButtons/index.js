import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { StyledLabel, StyledFacebookButton, StyledInstagramButton, StyledTwitterButton } from "./StyledSocialButtons";

const SocialButtons = () => {
    const [snsParameters, setSnsParameters] = useState({
        facebook: 354,
        twitter: 241,
        instagram: 522
    });
    return (
        <div>
            <li>
                <div><StyledLabel><FontAwesomeIcon icon={faFacebookF} style={{ marginRight: "5px" }} /></StyledLabel><StyledLabel>Facebook/thesakeshop</StyledLabel></div>
                <StyledFacebookButton>Like Us!</StyledFacebookButton>
            </li>
            <li>
                <div><StyledLabel><FontAwesomeIcon icon={faInstagram} style={{ marginRight: "5px" }} /></StyledLabel><StyledLabel>Instagram @thesakeshop</StyledLabel></div>
                <StyledInstagramButton content={snsParameters.instagram}>Like Us!</StyledInstagramButton>
            </li>
            <li>
                <div><StyledLabel><FontAwesomeIcon icon={faTwitter} style={{ marginRight: "5px" }} /></StyledLabel><StyledLabel>Twitter @thesakeshop</StyledLabel></div>
                <StyledTwitterButton>Follow Us!</StyledTwitterButton>
            </li>
        </div>
    )
};

export default SocialButtons;