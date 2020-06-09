import styled from "styled-components";

export const StyledSiteMapContainer = styled.div`
background: lightgray;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-items: center;
max-width:100%;
`;

export const StyledSiteMapSection = styled.div`
height: 30%;
margin-bottom: 10px;
width: 70%;
`;

export const StyledSectionTitle = styled.h3`
text-align: left;
font-size: 1.5rem;
margin-bottom: 5px;

@media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 2.5rem;
}
`;

export const StyledSectionItem = styled.a`
color: ${({ theme }) => theme.themeBlack};
display: block;
font-size: 1.3rem;
line-height: 1.5rem;
text-align: left;
text-decoration: none;

@media (min-width: ${({ theme }) => theme.screenMed}) {
    font-size: 2rem;
    line-height: 2.5rem;
}
`;