import styled from "styled-components";
import { StarFull } from "styled-icons/icomoon/StarFull";

export const StyledStar = styled(StarFull)`
  color: gold;
  height: 18px;
  padding-bottom: 2px;
  width: 18px;

  @media (min-width: ${({ theme }) => theme.screenMed}) {
        height: 20px;
        width: 20px;
    }
`;

export const StyledSectionH2 = styled.h2`
    font-size: 2rem;
`;

export const StyledRecommendationGrid = styled.div`
    border: 1px solid lightgray;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
`;

export const StyledRecommendedGridItem = styled.div`
    align-items: center;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    min-height: 85px;
    padding: 10px;
`;

export const StyledProductName = styled.p`
    font-size: 1.25rem;
    font-weight: bold;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }
`;

export const StyledProductPrice = styled.p`
    color: ${({ theme }) => theme.themeRed};
    font-size: 1.25rem;
    font-weight: 500;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }
`;

export const StyledProductReviews = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    font-size: 1.25rem;
    height: 25px;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }
`;

export const StyledProductRating = styled.span`
    align-content: center;
    display: flex;
    font-size: 1.25rem;
    margin: 0 5px;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }
`;

export const StyledProductReviewsCount = styled.span`
    font-size: 1.25rem;
    margin: 0 5px;
    padding-bottom: 2px;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }
`;