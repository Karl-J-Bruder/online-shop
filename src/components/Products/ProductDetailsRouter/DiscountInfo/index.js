import React from 'react';
import { StyledTableContentWrapper, StyledDiscountTable, StyledDiscountTH, StyledDiscountTD } from "./StyledDiscountInfo";
import { TabContentAnimationParent, TabContentAnimationChild } from "./StyledDiscountInfo";

const DiscountInfo = () => {
    return (
        <TabContentAnimationParent>
            <TabContentAnimationChild>
                <StyledTableContentWrapper>
                    <div>
                        <p>Buy any combination of 4 or more bottles and get FREE standard shipping!</p>
                    </div>
                    <StyledDiscountTable>
                        <tbody>
                            <tr>
                                <StyledDiscountTH>Minimum Bottle Qty</StyledDiscountTH>
                                <StyledDiscountTH>Discount</StyledDiscountTH>
                            </tr>
                            <tr>
                                <StyledDiscountTD>8+</StyledDiscountTD>
                                <StyledDiscountTD>5% off</StyledDiscountTD>
                            </tr>
                            <tr>
                                <StyledDiscountTD>16+</StyledDiscountTD>
                                <StyledDiscountTD>10% off</StyledDiscountTD>
                            </tr>
                        </tbody>
                    </StyledDiscountTable>
                </StyledTableContentWrapper>
            </TabContentAnimationChild>
        </TabContentAnimationParent>
    )
}

export default DiscountInfo;