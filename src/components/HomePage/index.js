import React from "react";
import Hero from "../Hero"
import ProductSwiper from "../ProductSwiper/"
import SocialContainer from "../Social/SocialContainer/";

const HomePage = () => {
    const swiperSections = ["Best Sellers", "Seasonal Picks"];
    return (
        <div>
            <Hero />
            {swiperSections.map((index) => (
                <ProductSwiper sectionTitle={swiperSections[index]} index={index} />
            ))}
            <SocialContainer />
        </div>
    );
};

export default HomePage;
