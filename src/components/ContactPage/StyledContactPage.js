import styled from "styled-components";

export const StyledPageTitle = styled.h2`
    font-size: 2.5rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 3rem;
    }
`;

export const StyledPageSubText = styled.div`
    font-size: 1.5rem;
    
    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 1.75rem;
    }
`;

export const StyledContactList = styled.ul`
    font-size: 1.25rem;
    list-style:none;
    margin: 0 auto 10px auto;
    padding: 0;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 1.5rem;
    }
`;

export const StyledListItem = styled.li`
    margin: 5px 0;
`;