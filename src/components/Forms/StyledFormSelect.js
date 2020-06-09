import styled from "styled-components";

export const StyledFilterH2 = styled.h2`
    font-size: 2rem;
    margin: 15px auto;

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 3rem;
    }
`;

export const StyledSortSelector = styled.select`
    font-size: 1.5rem;
    height: 40px;
    padding-left: 10px;
    width: 150px;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 2rem;
        height: 45px;
        padding-left: 15px;
        width: 200px;
    }

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 2rem;
        height: 45px;
        padding-left: 15px;
        width: 250px;
    }
`;