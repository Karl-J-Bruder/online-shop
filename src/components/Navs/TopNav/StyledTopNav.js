import styled from "styled-components";

export const StyledTopNav = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    min-height: 7vh;
    max-height: 18vh;
`;
export const StyledPromoMessage = styled.div`
    background: ${({ theme }) => theme.themeRed};
    color: white;
    height: 100%;
    text-align: center;
`;
export const StyledPromoText = styled.p`
    font-size: 1.1rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.6rem;
    }

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 2.2rem;
    }
`;
export const StyledTopNavMenu = styled.div`
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5vh;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        height: 6vh;
    }
`;

export const StyledTopNavItem = styled.div`
    align-items: center;
    align-content: center;
    border: 1px solid darkgray;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    text-align: center;
    width: 33%;
`;

export const StyledRRLinkItem = styled.div`
    align-items: center;
    align-content: center;
    border: 1px solid darkgray;
    display: flex;
    flex-shrink: 0;
    height: 100%;
    justify-content: center;
    text-align: center;
`;
