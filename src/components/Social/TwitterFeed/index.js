import React from "react";
import { StyledTwitterWrapper, StyledFeedLabel, StyledTwitterFeed } from "./StyledTwitterFeed";
import SampleFeed from "../../../assets/sampleTwitterFeed.png";

const TwitterFeed = () => {

    return (
        <div>
            <StyledFeedLabel>Latest Tweets</StyledFeedLabel>
            <StyledTwitterWrapper>
                <StyledTwitterFeed src={SampleFeed} alt="Sample Twitter Feed" />
            </StyledTwitterWrapper>
        </div>
    )
}

export default TwitterFeed;