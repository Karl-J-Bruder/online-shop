import styled from "styled-components";

export const StyledFourTitleGridWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const Styled2x2GridItem = styled.div`
    border: 1px solid lightgray;
    padding: 0.5rem 0;
`;

export const StyledSectionTitle = styled.p`
    font-size: 25px;
    font-weight: bold;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 30px;
    }
`;

export const StyledSwiperDescription = styled.p`
    font-size: 1.4rem;
`;