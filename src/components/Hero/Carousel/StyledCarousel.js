import styled from "styled-components";

export const StyledHeroCarouselWrapper = styled.div`
    overflow: hidden;
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.995);
    z-index: 100;
`;

export const StyledCardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 226px;
    min-height: 250px;
`;


export const StyledItemWrapper = styled.div`
    font-size: 12px;
    color: white;
    width: 100vw;
    text-shadow: 1px 1px 5px black;
`;

export const StyledCarouselButton = styled.button`
    height: 50px;
    width: 50px;
    padding-bottom: 50px;
    background: white;
    position: relative;
    z-index: 1;
`;