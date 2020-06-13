import React from 'react';
import { StyledHeroButton, StyledHeroH2, StyledHeroH3 } from "./StyledCarouselItem";
import { Link } from "react-router-dom";

const CarouselItem = ({ feature }) => {
    const { index, title, subtitle, img, route } = feature;
    const imgStyle = {
        background: `url${img}`,
        backgroundSize: "cover",
        height: "100%",
        minHeight: "100%",

    }
    return (
        <div id={`card-${index}`} className="card" index={index} style={imgStyle}>
            <StyledHeroH2>{title}</StyledHeroH2>
            <StyledHeroH3>{subtitle}</StyledHeroH3>
            <a href={route}><StyledHeroButton>Learn More</StyledHeroButton></a>
        </div>
    )
};

export default CarouselItem;