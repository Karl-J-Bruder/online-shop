import React from 'react';
import products from "../../../data/products";
import useReactRouter from "use-react-router";
import {
    StyledStar, StyledSectionH2, StyledRecommendationGrid, StyledRecommendedGridItem, StyledProductName,
    StyledProductPrice, StyledProductReviews, StyledProductRating, StyledProductReviewsCount
} from "./StyledRelatedProducts";

const RelatedProducts = () => {
    const { match } = useReactRouter();
    const productData = products.find(
        product =>
            ":" + product.sku === match.params.sku
    );

    // *** Populate list of the current product's related products
    const relatedProducts = [];
    for (let i = 0; i < productData.relatedProducts.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (productData.relatedProducts[i] === products[j].sku) {
                relatedProducts.push(products[j]);
            }
        }
    }
    // ***

    // *** Get the average rating based on user reviews
    const getAvgRating = (product) => {
        let totalStars = 0;
        let totalRatings = product.reviewList.length;
        for (let i = 0; i < product.reviewList.length; i++) {
            totalStars += product.reviewList[i].stars;
        }
        let avgRating = Math.round((totalStars / totalRatings) * 10) / 10;
        return avgRating;
    }
    // ***

    return (
        <div>
            <StyledSectionH2>Related Products</StyledSectionH2>
            <StyledRecommendationGrid>
                {relatedProducts.map((product, index) => (
                    <StyledRecommendedGridItem key={product.sku}>
                        <a href={`http://localhost:3000/products/:${product.sku}`}>
                            <img src={`/images/${product.sku}.jpg`} alt={product.name} />
                            <StyledProductName>{product.name}</StyledProductName>
                            <StyledProductPrice>{product.displayPrice}</StyledProductPrice>
                            <StyledProductReviews><StyledProductRating>{getAvgRating(product)}<StyledStar /></StyledProductRating><StyledProductReviewsCount> {product.reviewList.length} reviews</StyledProductReviewsCount></StyledProductReviews>
                        </a>
                    </StyledRecommendedGridItem>
                ))}
            </StyledRecommendationGrid>
        </div>
    )
};

export default RelatedProducts;