import styled from "styled-components";
import bannerSml from "../../assets/header/bannerSml.jpg";
import bannerMed from "../../assets/header/bannerMed.jpg";
import bannerLrg from "../../assets/header/bannerLrg.jpg";
import bannerXLrg from "../../assets/header/bannerXLrg.jpg";

export const StyledHeaderBanner = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 25vh;
    max-height: 50vh;

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        min-height: 40vh;
    }
`;

export const StyledImage = styled.span`
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    font: 0/0 serif;
    text-shadow: none;
    color: transparent;
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: relative;

    @media (max-width: ${({ theme }) => theme.screenMed}) {
        background-image: url(${bannerSml});
    }

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        background-image: url(${bannerMed});
    }

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        background-image: url(${bannerLrg});
    }

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        background-image: url(${bannerXLrg});
    }
`;
export const StyledImageInner = styled.span`
    display: block;
    height: 0;
`;


export const StyledSiteTitle = styled.h1`
    color: white;
    font-size: 4rem;
    position: absolute;
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 5rem;
    }

    @media (min-width: ${({ theme }) => theme.screenLrg}) {
        font-size: 5.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screenXLrg}) {
        font-size: 6rem;
    }
`;

export const StyledHeaderLinks = styled.div`
    display: flex;
    justify-content: space-around;
`;