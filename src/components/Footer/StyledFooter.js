import styled from "styled-components";

export const StyledPaymentOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
`;

export const StyledFooterText = styled.p`
    font-size: 1.1rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 1.5rem;
}
`;