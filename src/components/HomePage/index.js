import React from "react";
import Hero from "../Hero"
import ProductSwiper from "../ProductSwiper/"
import SocialContainer from "../Social/SocialContainer/";

const HomePage = () => {
    const swiperSections = ["Best Sellers", "Seasonal Picks"];
    return (
        <div>
            <Hero />
            <ProductSwiper />
            <SocialContainer />
        </div>
    );
};

export default HomePage;
