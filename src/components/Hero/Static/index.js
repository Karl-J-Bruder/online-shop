import React from 'react';
import { StyledWrapper, StyledHeroH2, StyledHeroH3, StyledHeroButton } from "./StyledStatic";
import { Link } from "react-router-dom";

const Static = ({ value }) => {
    const imgStyle = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url${value.img}`,
        width: "100%",
        backgroundSize: "cover"
    }
    return (
        <StyledWrapper style={imgStyle}>
            <StyledHeroH2>{value.title}</StyledHeroH2>
            <StyledHeroH3>{value.subtitle}</StyledHeroH3>
            <Link to={value.route}><StyledHeroButton>{value.button}</StyledHeroButton></Link>
        </StyledWrapper>
    )
}

export default Static;