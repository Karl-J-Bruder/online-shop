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

export const StyledTourTable = styled.table`
    border: 2px solid #ea0000;
    border-collapse: collapse;
    margin: 2rem auto;
    min-width: 90vw;
`;

export const StyledTableRowOdd = styled.tr`
    background-color: ${({ theme }) => theme.themeRed};
    border: 2px solid #ea0000;
    color: white;
    font-weight: bold;
    height: 50px;
    min-height: 100px;
    padding: 5px 0 5px 5px;
    text-align: left;
`;

export const StyledTableRowEven = styled.tr`
    margin-left: 25px;
    text-align: left;
`;

export const StyledTableCell = styled.p`
    align-items: flex-start;
    border-right: 2px solid #ea0000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50px;
    padding-left: 15px;
`;

export const StyledTopCell = styled.p`
    font-size: 1.5rem;
    padding-left: 85px;
`;

export const StyledCategoryCell = styled.td`
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