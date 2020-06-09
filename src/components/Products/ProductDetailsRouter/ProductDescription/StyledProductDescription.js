import styled from "styled-components";

export const StyledProductDescription = styled.div`
  margin-top: 0;
  min-height: 300px;
  background: #DFE1E1;

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

export const StyledProductDescriptionContent = styled.div`
  animation-name: "tabs-content-opening";
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;  
  margin-left: 0.5rem;
  padding-left: 10%;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.75rem;
        padding-left: 20%;
        text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 1.75rem;
        padding-left: 20%;
        text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 1.75rem;
        padding-left: 20%;
        text-align: left;
  }
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