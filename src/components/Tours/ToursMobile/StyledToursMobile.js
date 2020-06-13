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

export const StyledTourMobileTable = styled.table`
    border: 2px solid #ea0000;
    border-collapse: collapse;
    margin: 20px auto;
    width: 300px;
`;

export const StyledTableRowOdd = styled.tr`
    background-color: ${({ theme }) => theme.themeRed};
    border: 2px solid #ea0000;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    height: 50px;
    margin-left: 15px;
    min-height: 100px;
    padding: 5px 0 5px 5px;
    text-align: left;
`;

export const StyledTableRowEven = styled.tr`
    margin-left: 25px;
    text-align: left;
`;

export const StyledTableCell = styled.td`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    justify-content: center;
    min-height: 50px;
    padding-left: 15px;
`;

export const CenteredCell = styled(StyledTableCell)`
    align-items: center;
`;

export const StyledTableButton = styled.button`
    background-color: ${({ theme }) => theme.themeRed};
    border: 2px solid #ea0000;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    height: 50px;
    margin: 1rem 1.5rem;
    width: 100px;
`;