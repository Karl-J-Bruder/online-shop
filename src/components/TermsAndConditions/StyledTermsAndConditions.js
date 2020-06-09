import styled from "styled-components";

export const StyledTACInner = styled.div`
    margin: 10px auto;
    width: 80%;
`;

export const StyledPageTitle = styled.h2`
    font-size: 2.5rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 3rem;
    }
`;

export const StyledPageSubText = styled.div`
    font-size: 1.25rem;
    
    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 1.5rem;
    }
`;

export const StyledTACBody = styled.div`
    margin: 10px 0;
    
`;

export const StyledTACItem = styled.div`
    padding-left: 10px;
`;

export const StyledTACItemTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: left;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 2.5rem;
    }
`;

export const StyledTACItemBody = styled.div`
    font-size: 1.5rem;
    text-align: left;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 2rem;
    }
`;

export const StyledItemUL = styled.ul`
    font-size: 1.25rem;
    text-align: left;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 1.5rem;
    }
`;