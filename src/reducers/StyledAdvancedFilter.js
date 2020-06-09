import styled from "styled-components";


export const StyledFilterH2 = styled.h2`
    font-size: 2rem;
    margin: 15px auto;

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 3rem;
    }
`;

export const StyledFilterForm = styled.form`
    margin: 15px auto;
    min-height: 45px;
    padding: 5px 0;
    width: 360px;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        min-height: 60px;
        width: 520px;
    }
`;

export const StyledFilterInput = styled.input`
    border: 1px solid gray;
    font-size: 1.5rem;
    height: 45px;
    margin: 0 5px;
    padding-left: 10px;
    width: 170px;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 2rem;
        height: 60px;
        margin: 0 10px;
        width: 240px;
    }
`;