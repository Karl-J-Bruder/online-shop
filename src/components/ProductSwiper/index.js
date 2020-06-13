import React from "react";
import products from "../../data/products";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { StyledSectionTitle, StyledSwiperDescription } from "./StyledProductSwiper";

const ProductSwiper = (props) => {

    // Create copy of products array to split over two Slider components
    // (In a real-world setting, items would be selected on sales #s, pageviews, etc.)
    const swiperArray = [...products];
    console.log(swiperArray)
    const bestSellers = [swiperArray[0], swiperArray[1], swiperArray[2], swiperArray[3]];
    const seasonalPicks = [swiperArray[4], swiperArray[5], swiperArray[6], swiperArray[7]];

    // Slider properties
    const params = {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    };
    return (
        <div>
            <StyledSectionTitle>Popular Items</StyledSectionTitle>
            <Swiper {...params}>
                {bestSellers.map((product, index) => (
                    <div
                        className="swiper-slide"
                        style={{ height: "210px" }}
                        key={index}
                        name={product.name}
                        brewer={product.brewer}
                    >
                        <Link to={`/products/:${product.sku}`}>
                            <img
                                src={`/images/${product.sku}.jpg`}
                                alt=""
                                style={{ width: "100px", height: "100px" }}
                            ></img>
                        </Link>
                        <StyledSwiperDescription>{product.name}</StyledSwiperDescription>
                        <StyledSwiperDescription>{product.displayPrice}</StyledSwiperDescription>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
