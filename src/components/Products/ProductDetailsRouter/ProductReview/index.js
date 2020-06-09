import React from 'react';
import { faUser } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledReviewContainer, StyledReviewParams, StyledReviewUser, StyledReviewUserName, StyledReviewTitle, StyledReviewDate, StyledReviewBody, StyledStar }
    from "./StyledProductReview";

const ProductReview = ({ review }) => {
    let userRating = [];
    for (let i = 0; i < review.stars; i++) {
        userRating.push(<span><StyledStar /></span>)
    }
    return (
        <StyledReviewContainer>
            <StyledReviewParams>
                <div><StyledReviewUser><FontAwesomeIcon icon={faUser} /><StyledReviewUserName>{review.postedBy}</StyledReviewUserName></StyledReviewUser></div>
                <div style={{ display: "flex", flexDirection: "row" }}>{<div>{userRating.map((rating, index) => (
                    <StyledStar key={index} />
                ))}</div>}<StyledReviewTitle>{review.title}</StyledReviewTitle></div>
                <StyledReviewDate>Posted on: {review.postedAt}</StyledReviewDate>
            </StyledReviewParams>
            <StyledReviewBody>{review.body}</StyledReviewBody>
        </StyledReviewContainer>
    )
}

export default ProductReview;