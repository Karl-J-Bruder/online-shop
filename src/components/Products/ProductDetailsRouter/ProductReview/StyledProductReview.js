import styled from "styled-components";
import { StarFull } from "styled-icons/icomoon/StarFull";
import { Zap } from 'styled-icons/octicons/Zap'

export const RedZap = styled(Zap)`
  color: red;
`

export const StyledReviewContainer = styled.div`
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    width: 95vw;
`;

export const StyledReviewParams = styled.div`
    background: ${({ theme }) => theme.themeGray};
    display: block;
    text-align: left;
`;

export const StyledReviewUser = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
`;

export const StyledReviewUserAvatar = styled.span`
    margin-right: 0.5rem;
`;

export const StyledReviewUserName = styled.span`
    font-weight: bold;
    margin-left: 0.5rem;
`;

export const StyledReviewTitle = styled.span`
    align-items: flex-start;
    margin-left: 0.25rem;
`;
export const StyledReviewDate = styled.p`
    margin: 0.125rem 0;
`;

export const StyledReviewBody = styled.p`
    margin-bottom: 0.25rem;
`;

export const StyledStar = styled(StarFull)`
  color: gold;
  height: 20px;
  width: 20px;
`;