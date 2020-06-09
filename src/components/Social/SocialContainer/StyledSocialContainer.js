import styled from "styled-components";

export const StyledSocialContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const StyledSocialLinksList = styled.ul`
    list-style: none;
    vertical-align: center;
`;