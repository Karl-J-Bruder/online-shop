import React from "react";
import Tours from "../../../data/tours";
import { StyledPageTitle, StyledPageSubText, StyledTourMobileTable, StyledTableRowOdd, StyledTableRowEven, StyledTableCell, CenteredCell, StyledTableButton } from "./StyledToursMobile";

const ToursMobile = () => {
    return (
        <div>
            <StyledPageTitle>Featured Tours</StyledPageTitle>
            <StyledPageSubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit perspiciatis maiores quidem reiciendis expedita veritatis optio blanditiis dolores libero sit dolorum minima corrupti facere harum quos voluptas, commodi error?</StyledPageSubText>
            {Tours.map((tour, index) => (
                <StyledTourMobileTable key={index}>
                    <tbody>
                        <StyledTableRowOdd><StyledTableCell>{tour.title}</StyledTableCell></StyledTableRowOdd>
                        <tr>
                            <td>
                                <img src={tour.imgSrc} alt={tour.imgAlt} />
                                <div><StyledTableButton>Book Now</StyledTableButton></div>
                            </td>
                        </tr>
                        <StyledTableRowOdd><StyledTableCell>Description</StyledTableCell></StyledTableRowOdd>
                        <StyledTableRowEven><StyledTableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledTableCell></StyledTableRowEven>
                        <StyledTableRowOdd><StyledTableCell>Tour Includes</StyledTableCell></StyledTableRowOdd>
                        <StyledTableRowEven>
                            <StyledTableCell>
                                <ul>
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                </ul>
                            </StyledTableCell>
                        </StyledTableRowEven>
                        <StyledTableRowOdd><StyledTableCell>Schedule</StyledTableCell></StyledTableRowOdd>
                        <StyledTableRowEven>
                            <StyledTableCell>
                                <p>{tour.frequency}, starting at:</p>
                                {tour.startTimes.map((time, index) => (
                                    <span key={index}>{time}{"   "}</span>
                                ))}
                            </StyledTableCell>
                        </StyledTableRowEven>
                        <StyledTableRowOdd><StyledTableCell>Length of Tour</StyledTableCell></StyledTableRowOdd>
                        <StyledTableRowEven><StyledTableCell>{tour.duration}</StyledTableCell></StyledTableRowEven>
                        <StyledTableRowOdd><StyledTableCell>Price (per person)</StyledTableCell></StyledTableRowOdd>
                        <StyledTableRowEven><StyledTableCell>${tour.price}</StyledTableCell></StyledTableRowEven>
                        <StyledTableRowOdd><StyledTableCell>Ready to Book?</StyledTableCell></StyledTableRowOdd>
                        <tr>
                            <CenteredCell>
                                <StyledTableButton>Book Now</StyledTableButton>
                                <StyledTableButton>Sample Itinerary</StyledTableButton>
                            </CenteredCell>
                        </tr>

                    </tbody>
                </StyledTourMobileTable>
            ))}
        </div>
    )
}

export default ToursMobile;