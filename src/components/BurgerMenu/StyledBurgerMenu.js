//For use with sake-shop project

import styled from "styled-components";
export const StyledBurgerMenu = styled.nav`
    background: #990000;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0;
    padding: 2rem;
    position: absolute;
    text-align: left; 
    top: 0;
    transform:  ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 998;

    @media (max-width: ${({ theme }) => theme.screenMed}) {
        width: 100vw;
    }

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        width: 50vw;
    }

    a {
        box-shadow: 0 5px 6px -6px white;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.5rem;
        padding: 1rem 0;
        text-transform: uppercase;

        @media (min-width: ${({ theme }) => theme.screenMed}) {
            font-size: 3rem;
            line-height: 2rem;
        }

        @media (min-width: ${({ theme }) => theme.screenLrg}) {
            font-size: 4rem;
            line-height: 2.5rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1rem;
        text-align: center;
    }
`;