import React from 'react';
import HeroCarousel from "./Carousel/index";
import Static from "./Static/";

const Hero = () => {
    return (
        <div>
            <HeroCarousel />
            <Static value={{
                title: "Browse",
                subtitle: "By brand, region, style and more",
                img: "(https://images.unsplash.com/photo-1544381639-28677e37d66b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)",
                button: "Start Looking",
                route: "/products"
            }} />
        </div>
    )
};

export default Hero;