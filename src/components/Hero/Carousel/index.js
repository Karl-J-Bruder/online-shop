import React, { useState, useEffect } from 'react';
import CarouselData from "../../../data/carousel";
import CarouselItem from "./CarouselItem";
import { StyledHeroCarouselWrapper, StyledCardWrapper } from "./StyledCarousel";
import './Carousel.css';



const Carousel = () => {
    const [slideState, setSlideState] = useState({
        features: CarouselData.features,
        feature: CarouselData.features[0],
        id: CarouselData.features[0].id,
        index: CarouselData.features[0].index,
        title: CarouselData.features[0].title,
        subtitle: CarouselData.features[0].subtitle,
        img: CarouselData.features[0].img,
        route: CarouselData.features[0].route
    })

    const nextSlide = () => {
        const newIndex = slideState.feature.index + 1;
        if (newIndex > CarouselData.features.length - 1) {
            setSlideState({
                ...slideState,
                feature: CarouselData.features[0]
            })
        } else {
            setSlideState({
                ...slideState,
                feature: CarouselData.features[newIndex]
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() =>
            nextSlide()
            , 2500)
        return () => clearInterval(interval)
    })


    const { features, feature } = slideState;

    return (
        <StyledHeroCarouselWrapper>
            <StyledCardWrapper>
                <div className={`cards-slider active-slide-${feature.index}`}>
                    <div className="cards-slider-wrapper">
                        {
                            features.map(feature => <CarouselItem key={feature.id} feature={feature} />)
                        }
                    </div>
                </div>
            </StyledCardWrapper>
        </StyledHeroCarouselWrapper>
    )
}

export default Carousel;