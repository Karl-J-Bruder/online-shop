import styled from "styled-components";
import { StarFull } from "styled-icons/icomoon/StarFull";

export const StyledProductDetails = styled.div`
    align-items: center;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const StyledProductName = styled.p`
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.6rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.themeBlack};
`;

export const StyledProductPrice = styled.p`
    color: ${({ theme }) => theme.themeRed};
    font-size: 2.5rem;
    font-weight: 700;
`;

export const StyledParameterRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: space-around;
`;

export const StyledStar = styled(StarFull)`
  color: #e6e600;
  height: 20px;
  width: 20px;
`;

export const StyledProductReviewCount = styled.span`
color: ${({ theme }) => theme.themeRed};
margin: 0.25rem 0.5rem;
`;

export const StyledProductLead = styled.span`
    color: #585858;
    font-size: 14px;
`;

export const StyledProductKeyword = styled.span`
    color: #585858;
    font-size: 14px;
    font-weight: bold;
`;

export const StyledProductCTA = styled.p`
    color: ${({ theme }) => theme.themeRed};
    font-size: 1.75rem;
`;

export const StyledProductImg = styled.img`
    height: 200px;
    width: 200px;
`;