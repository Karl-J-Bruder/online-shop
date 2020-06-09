import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { StyledProductShare } from "./StyledProductShare";

const ProductShare = () => {
    return (
        <StyledProductShare>
            <span style={{ marginRight: "15px" }}>Share</span>
            <span><FontAwesomeIcon icon={faFacebookF} style={{ marginRight: "10px" }} /></span>
            <span><FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px" }} /></span>
            <span><FontAwesomeIcon icon={faInstagram} style={{ marginRight: "10px" }} /></span>
        </StyledProductShare>
    )
}

export default ProductShare;