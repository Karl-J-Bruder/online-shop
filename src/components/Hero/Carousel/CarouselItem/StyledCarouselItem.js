import styled from "styled-components";
export const StyledWrapper = styled.div`
    border: 1px solid lightgray;
    margin-top: 0.25rem;
    color: white;
    text-shadow: 1px 1px 5px black;
    background-size: "contain";
`;

export const StyledHeroH2 = styled.h2`
    color: white;
    font-size: 2rem;
    text-shadow: 1px 1px 5px black;

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 3rem;
    }
`;

export const StyledHeroH3 = styled.h3`
    color: white;
    font-size: 1.75rem;
    text-shadow: 1px 1px 5px black;

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
    width: 150px;

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