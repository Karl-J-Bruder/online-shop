import React from "react";
import { StyledPageTitle, StyledPageSubText, StyledFAQHeader, StyledShippingQuestions, StyledQuestionsList, StyledQuestionItem, StyledPageTopLink, StyledRatesTable, StyledTableCell, StyledCenteredCell } from "./StyledShippingPage";


const ShippingPage = () => {
    return (
        <div>
            <StyledPageTitle name="page-top">Shipping Info</StyledPageTitle>
            <StyledPageSubText>
                <p>Have a question that's not answered below?</p>
                <p>Email us at: shipping@sakeshop.com</p>
            </StyledPageSubText>
            <div>
                <StyledFAQHeader>FAQ</StyledFAQHeader>
                <StyledShippingQuestions>
                    <StyledQuestionsList>
                        <StyledQuestionItem><a href="#question-1">How long does shipping normally take?</a></StyledQuestionItem>
                        <StyledQuestionItem> <a href="#question-2">Do you ship internationally?</a></StyledQuestionItem>
                        <StyledQuestionItem><a href="#question-3"> What are your rates?</a></StyledQuestionItem>
                    </StyledQuestionsList>
                    <StyledQuestionsList>
                        <li><h4 name="question-1" href="/#">How long does shipping normally take?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error ipsum, quos non fugit quis ipsam unde autem illum quibusdam quo, odit eius quae laboriosam nisi delectus asperiores praesentium alias!
                        </p>
                            <StyledPageTopLink href="#page-top">Back to top</StyledPageTopLink>
                        </li>
                        <li><h4><a name="question-2" href="/#" />Do you ship internationally?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error ipsum, quos non fugit quis ipsam unde autem illum quibusdam quo, odit eius quae laboriosam nisi delectus asperiores praesentium alias!
                        </p>
                            <StyledPageTopLink href="#page-top">Back to top</StyledPageTopLink>
                        </li>
                        <li>
                            <h4><a name="question-3" href="/#">What are your rates?</a></h4>
                            <StyledRatesTable>
                                <tbody>
                                    <tr>
                                        <th colSpan="3">Shipping Rates</th>
                                    </tr>
                                    <tr>
                                        <StyledTableCell>{" "}</StyledTableCell>
                                        <StyledCenteredCell>Orders of FEWER than 4 bottles</StyledCenteredCell>
                                        <StyledCenteredCell>Orders of MORE than 4 bottles</StyledCenteredCell>
                                    </tr>
                                    <tr>
                                        <StyledTableCell>Canada {"&"} Continental US</StyledTableCell>
                                        <StyledCenteredCell rowSpan="2">Usd $12.99 (Can $15)</StyledCenteredCell>
                                        <StyledCenteredCell rowSpan="2">FREE</StyledCenteredCell>
                                    </tr>
                                    <tr>
                                        <StyledTableCell>Alaska, Hawaii, Guam, Puerto Rico</StyledTableCell>
                                    </tr>
                                    <tr>
                                        <StyledTableCell>International</StyledTableCell>
                                        <StyledCenteredCell rowSpan="2">Usd $25</StyledCenteredCell>
                                        <StyledCenteredCell rowSpan="2">Usd $18.99</StyledCenteredCell>
                                    </tr>
                                </tbody>
                            </StyledRatesTable>
                            <StyledPageTopLink href="#page-top">Back to top</StyledPageTopLink>
                        </li>
                    </StyledQuestionsList>
                </StyledShippingQuestions>
            </div>
        </div>
    )
}

export default ShippingPage;