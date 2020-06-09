import styled from "styled-components";

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

export const StyledFAQHeader = styled.h3`
    font-size: 1.5rem;
    
    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 1.75rem;
    }
`;

export const StyledShippingQuestions = styled.div`
    text-align: left;
    font-size: 1.25rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 1.5rem;
    }
`;

export const StyledQuestionsList = styled.ul`
    list-style: none;
`;

export const StyledQuestionItem = styled.li`
    color: darkblue;
    margin-top: 10px;
`;

export const StyledPageTopLink = styled.a`
    color: ${({ theme }) => theme.themeRed};
`;

export const StyledRatesTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    empty-cells: show;
    margin: 25px 25px 25px 0;
`;

export const StyledTableCell = styled.td`
    border: 1px solid black;
`;

export const StyledCenteredCell = styled.td`
    border: 1px solid black;
    text-align: center;
`;