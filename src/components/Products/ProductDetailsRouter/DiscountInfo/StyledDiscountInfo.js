import styled from "styled-components";

export const StyledTableContentWrapper = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.themeGray};
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    max-height: 500px;
    min-height: 175px;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 1.75rem;
    }
`;


export const StyledDiscountTable = styled.table`
    border-collapse: collapse;
`;

export const StyledDiscountTH = styled.th`
    border: 1px solid #585858;
    padding: 0.25rem;
    text-align: left;
`;

export const StyledDiscountTD = styled.td`
    border: 1px solid #585858;
    padding: 0.25rem;
    text-align: center;
`;

export const TabContentAnimationParent = styled.div`
  animation-name: "tabs-content-opening";
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;

export const TabContentAnimationChild = styled.div`
  @keyframes tabs-content-opening {
    0% {
      transform: translateY(20px);
      opacity: 0.4
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
`;