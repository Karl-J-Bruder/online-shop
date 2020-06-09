import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom";

export const StyledTabsContainer = styled.ul`
    align-items: center;
    border: 1px solid #585858;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 30px;
    list-style: none;
    margin: 2.5px 0;
    padding: 0;
    width: 100%;
`;

export const StyledTabsNavLine = styled.span`
    background: ${({ theme }) => theme.themeRed};
    bottom: 0;
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    transition: all 0.25s ease-in-out;
    width: 100%;
    z-index: 1;
`;

export const ActiveStyledLink = styled(Link)`
   background-color: #393939;
    border-color: #2F2F2F;
    box-shadow: inset 0 0 0 1px #3D3D3D,
        inset 0 2px 0 #323232;
    font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.75rem;
    }
`;

export const StyledLink = styled(NavLink)`
        border-bottom: none;
        color: #585858;
        position: relative;
        transition: border-bottom 0.25s ease-in-out;
        font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.75rem;
    }
`;

