import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    /* 10px => 1rem = 10px; */
    font-size: 62.5%; 
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primaryWhite};
    color: ${({ theme }) => theme.primaryDark};
    max-height: 100vh;
    max-width: 100vw;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`
