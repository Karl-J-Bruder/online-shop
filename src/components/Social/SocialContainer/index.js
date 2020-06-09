import React from 'react';
import TwitterFeed from "../TwitterFeed";
import { StyledSocialContainer, StyledSocialLinksList } from "./StyledSocialContainer";
import SocialButtons from "../SocialButtons";

const SocialContainer = () => {
    return (
        <div>
            <h1>Follow us on:</h1>
            <StyledSocialContainer>
                <StyledSocialLinksList>
                    <SocialButtons />
                </StyledSocialLinksList>
                <TwitterFeed />
            </StyledSocialContainer>
        </div>
    );
}

export default SocialContainer;;