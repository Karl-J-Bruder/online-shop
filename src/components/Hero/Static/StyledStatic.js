// Static Hero item (i.e. non-carousel)
import styled from "styled-components";

export const StyledWrapper = styled.div`
    background-size: contain;
    border: 1px solid lightgray;
    color: white;
    margin-top: 0.25rem;
    min-height: 155px;
    text-shadow: 1px 1px 5px black;

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        min-height: 175px;
    }
`;
export const StyledHeroH2 = styled.h2`
    font-size: 2rem;

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 3rem;
    }
`;

export const StyledHeroH3 = styled.h3`
    font-size: 1.75rem;

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 2.5rem;
    }
`;

export const StyledHeroButton = styled.button`
    background-color: darkred;
    border-color: darkred;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 50px;
    margin-bottom: 0.5rem;
    width: 170px;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 2rem;
        height: 60px;
        min-width: 250px;
    }

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 2.5rem;
        height: 75px;
        min-width: 350px;
    }
`;