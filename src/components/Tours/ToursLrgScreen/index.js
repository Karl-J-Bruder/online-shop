import React from "react";
import Tours from "../../../data/tours";
import { StyledPageTitle, StyledPageSubText, StyledTourTable, StyledTableRowOdd, StyledTableRowEven, StyledTableCell, StyledCategoryCell, CenteredCell, StyledTableButton, StyledTopCell } from "./StyledToursLrgScreen";
const ToursLargeScreen = () => {
    return (
        <div>
            <StyledPageTitle>Featured Tours</StyledPageTitle>
            <StyledPageSubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit perspiciatis maiores quidem reiciendis expedita veritatis optio blanditiis dolores libero sit dolorum minima corrupti facere harum quos voluptas, commodi error?</StyledPageSubText>
            <StyledTourTable>
                <tbody>
                    <StyledTableRowOdd>
                        {Tours.map((tour, index) => (
                            <td key={index}><StyledTopCell>{tour.title}</StyledTopCell></td>
                        ))}
                    </StyledTableRowOdd>
                    <tr>
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <img src={tour.imgSrc} alt={tour.imgAlt} />
                                <div><StyledTableButton>Book Now</StyledTableButton></div>
                            </td>
                        ))}
                    </tr>
                    <StyledTableRowOdd><StyledCategoryCell colSpan="3">Description</StyledCategoryCell></StyledTableRowOdd>
                    <StyledTableRowEven colSpan="3">
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <StyledTableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledTableCell>
                            </td>
                        ))}
                    </StyledTableRowEven>
                    <StyledTableRowOdd colSpan="3"><StyledCategoryCell colSpan="3">Tour Includes</StyledCategoryCell></StyledTableRowOdd>
                    <StyledTableRowEven colSpan="3">
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <ul>
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                </ul>
                            </td>
                        ))}
                    </StyledTableRowEven>
                    <StyledTableRowOdd><StyledCategoryCell colSpan="3">Schedule</StyledCategoryCell></StyledTableRowOdd>
                    <StyledTableRowEven colSpan="3">
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <StyledTableCell>
                                    {tour.frequency}, starting at:
                                    {tour.startTimes.map((time, index) => (
                                        <span key={index}>{time}{"   "}</span>
                                    ))}
                                </StyledTableCell>
                            </td>
                        ))}
                    </StyledTableRowEven>
                    <StyledTableRowOdd><StyledCategoryCell colSpan="3">Length of Tour</StyledCategoryCell></StyledTableRowOdd>
                    <StyledTableRowEven colSpan="3">
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <StyledTableCell>{tour.duration}</StyledTableCell>
                            </td>
                        ))}
                    </StyledTableRowEven>
                    <StyledTableRowOdd><StyledCategoryCell colSpan="3">Price (per person)</StyledCategoryCell></StyledTableRowOdd>
                    <StyledTableRowEven>
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <StyledTableCell>${tour.price}</StyledTableCell>
                            </td>
                        ))}
                    </StyledTableRowEven>
                    <StyledTableRowOdd><StyledCategoryCell colSpan="3">Ready to Book?</StyledCategoryCell></StyledTableRowOdd>
                    <tr>
                        {Tours.map((tour, index) => (
                            <td key={index}>
                                <CenteredCell>
                                    <StyledTableButton>Book Now</StyledTableButton>
                                    <StyledTableButton>Sample Itinerary</StyledTableButton>
                                </CenteredCell>
                            </td>
                        ))}
                    </tr>

                </tbody>
            </StyledTourTable>
        </div>
    )
}

export default ToursLargeScreen;