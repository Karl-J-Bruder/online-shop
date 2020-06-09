import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import ToursLargeScreen from "./ToursLrgScreen";
import ToursMobile from "./ToursMobile";

const ToursPage = () => {
    const [width, height] = useWindowSize();
    console.log(width, height);
    return (
        <div>
            {width < 700 ? <ToursMobile /> : <ToursLargeScreen />}
        </div>
    )
}

export default ToursPage;