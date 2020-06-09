// StyledBurger.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  /* top: 5%; */
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    height: 2.5rem;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryLight : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
      width: 2.5rem;
      height: 0.5rem;
    }
  }
`;