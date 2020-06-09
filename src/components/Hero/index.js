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
            <Static value={{
                title: "Sets",
                subtitle: "Packs of 3 or more sakes based on themes",
                img: "(https://st2.depositphotos.com/1002114/7338/i/950/depositphotos_73386941-stock-photo-japanese-sake-bottles-displayed.jpg)",
                button: "View our suggestions",
                route: "/sake-sets"
            }} />
        </div>
    )
};

export default Hero;