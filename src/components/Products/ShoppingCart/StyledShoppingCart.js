import styled from "styled-components";

export const StyledCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

export const StyledCartInner = styled.div`
    margin-top: 20px;
    min-height: 33.33vh;
`;

export const StyledCartTable = styled.table`
    border-collapse: collapse;
    font-size: 1.25rem;
    height: 100%;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 1.75rem;
    }
`;

export const StyledCartTR = styled.tr`
    border: 1px solid lightgray;
`;

export const StyledCartTH = styled.th`
    border: 1px solid #585858;
    padding: 0.25rem;
`;

export const StyledCartTD = styled.td`
    border: 1px solid #585858;
    padding: 0.25rem;
    text-align: center;
`;

export const StyledCartImage = styled.img`
    max-height: 75px;
    max-width: 75px;
`;

export const StyledCartTotal = styled.td`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0.5rem 0;
`;

export const StyledCartTotalPrice = styled.td`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.themeRed};

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 1.75rem;
    }
`;

export const StyledCheckoutButton = styled.button`
    background: ${({ theme }) => theme.themeRed};
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0.5rem;
    height: 40px;
    width: 100px;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 2rem;
        height: 60px;
        width: 180px;
    }
`;

export const StyledEmptyCart = styled.div`
    font-size: 2rem;
    height: 30vh;
    padding: 20px 0;
    width: 100vw;
`;