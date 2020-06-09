import React from 'react';
import products from "../../../data/products";
import { Route, Link } from "react-router-dom";
import useReactRouter from "use-react-router";
import Swiper from "react-id-swiper";
import {
    StyledProductDetails, StyledParameterRow, StyledProductName, StyledProductPrice, StyledStar, StyledProductReviewCount,
    StyledProductLead, StyledProductKeyword, StyledProductCTA
} from "./StyledProductDetails";
import { faChevronDown } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductBuy from "../ProductBuy";
import ProductShare from "../ProductShare";
import RelatedProducts from "../RelatedProducts";
import ProductDescription from "../ProductDetailsRouter/ProductDescription";
import ProductReviews from "../ProductDetailsRouter/ProductReviews";
import BrewerProfile from "../ProductDetailsRouter/BrewerProfile";
import DiscountInfo from '../ProductDetailsRouter/DiscountInfo';
import ProductDetailsTabs from '../ProductDetailsRouter/ProductDetailsTabs';

const ProductDetailsPage = () => {
    const { match } = useReactRouter();
    const productData = products.find(
        product =>
            ":" + product.sku === match.params.sku
    );
    const params = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    };

    const getAvgRating = (product) => {
        let totalStars = 0;
        let totalRatings = product.reviewList.length;
        for (let i = 0; i < product.reviewList.length; i++) {
            totalStars += product.reviewList[i].stars;
        }
        let avgRating = Math.round((totalStars / totalRatings) * 10) / 10;
        return avgRating;
    }
    return (
        <div>
            <StyledProductDetails>
                <StyledProductName>{productData.name}</StyledProductName>
                <StyledProductPrice>{productData.displayPrice}</StyledProductPrice>
                <StyledParameterRow>{getAvgRating(productData)}<StyledStar /><StyledProductReviewCount>{productData.reviewList.length} Reviews</StyledProductReviewCount></StyledParameterRow>
                <div><StyledProductLead>{productData.descLead}</StyledProductLead><StyledProductKeyword>{productData.descKeyword}</StyledProductKeyword></div>
                <Link to={`${match.url}/product-description`} style={{ margin: "15px 0" }}><StyledProductCTA>Read more <FontAwesomeIcon icon={faChevronDown} style={{ color: "black" }} /></StyledProductCTA></Link>
                <Swiper {...params} style={{ maxWidth: "300px" }}>
                    <div>
                        <div className="swiper-slide" style={{ height: "200px", margin: "15px 0" }}>
                            <img src={`/images/${productData.sku}.jpg`} alt={productData.name} />
                        </div>
                    </div>
                </Swiper>
                <ProductBuy productData={productData} />
                <Link to={`${match.url}/discount-info`}><StyledProductCTA>Get a discount<FontAwesomeIcon icon={faChevronDown} style={{ color: "black", marginLeft: "5px" }} /></StyledProductCTA></Link>
                <ProductShare />
                <ProductDetailsTabs />
                <Route path={`${match.path}/product-description`} component={ProductDescription} />
                <Route path={`${match.path}/product-reviews`} component={ProductReviews} />
                <Route path={`${match.path}/discount-info`} component={DiscountInfo} />
                <Route path={`${match.path}/about-the-brewer`} component={BrewerProfile} />
            </StyledProductDetails>
            <RelatedProducts />
        </div>
    );
};

export default ProductDetailsPage;
