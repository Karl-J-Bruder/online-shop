import React from 'react';
import useReactRouter from "use-react-router";
import products from "../../../../data/products";
import ProductReview from "../ProductReview";
import { StyledProductDescription, StyledProductDescriptionContent } from "./StyledProductReviews";

const ProductReviews = () => {
    const { match } = useReactRouter();
    const productData = products.find(
        product =>
            ":" + product.sku === match.params.sku
    );
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
        <StyledProductDescription style={{ background: "white" }}>
            <StyledProductDescriptionContent>
                <div>
                    <p><b>Average rating: {getAvgRating(productData)} Stars</b></p>
                    {productData.reviewList.length > 0 ?
                        (<div>
                            <p>THERE ARE REVIEWS. Here they are:</p>
                            {productData.reviewList.map((review, index) => (
                                <ProductReview review={review} avgRating={getAvgRating(productData)} key={index} />
                            ))}
                        </div>)
                        :
                        (<p>No REVIEWS</p>)
                    }
                </div>
            </StyledProductDescriptionContent>
        </StyledProductDescription>
    )
}
export default ProductReviews;