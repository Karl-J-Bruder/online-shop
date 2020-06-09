import React from "react";
import { StyledTACInner, StyledPageTitle, StyledPageSubText, StyledTACBody, StyledTACItem, StyledTACItemTitle, StyledTACItemBody, StyledItemUL } from "./StyledTermsAndConditions";

const TermsAndConditionsPage = () => {
    return (
        <div>
            <div>
                <StyledPageTitle>Terms and Conditions</StyledPageTitle>
                <StyledPageSubText>Updated MM/DD/YYYY</StyledPageSubText>
            </div>
            <div>
                <StyledPageSubText>By using this site and/or the services provided by The Sake Shop Inc., you agree to the following terms and conditions:</StyledPageSubText>
            </div>
            <StyledTACInner>
                <div>
                    {/* Table of Contents */}
                </div>
                <StyledTACBody>
                    {/* list of items */}
                    <StyledTACItem>
                        <StyledTACItemTitle>1. Item 1</StyledTACItemTitle>
                        <StyledTACItemBody>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nihil qui, at assumenda obcaecati, possimus repellendus quis voluptate corrupti, molestias necessitatibus deleniti porro corporis beatae ipsam. Hic nam tempora dolorum?</StyledTACItemBody>
                    </StyledTACItem>
                    <StyledTACItem>
                        <StyledTACItemTitle><p>2. Item 2</p></StyledTACItemTitle>
                        <StyledTACItemBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates iste molestiae eveniet esse maiores perferendis doloribus autem consequatur, excepturi eaque unde illo ipsam quo dolorem impedit recusandae voluptatum quibusdam!</StyledTACItemBody>
                        <StyledItemUL>
                            <li>Sub-item 1</li>
                            <li>Sub-item 2</li>
                            <li>Sub-item 3</li>
                            <li>Sub-item 4</li>
                        </StyledItemUL>
                    </StyledTACItem>
                    <StyledTACItem>
                        <StyledTACItemTitle>3. Item 3</StyledTACItemTitle>
                        <StyledTACItemBody>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, vero repellat fuga voluptates totam velit officia dicta incidunt aspernatur tenetur, ab quisquam! Culpa et libero accusantium adipisci similique maxime officiis.</StyledTACItemBody>
                    </StyledTACItem>
                    <StyledTACItem>
                        <StyledTACItemTitle>4. Item 4</StyledTACItemTitle>
                        <StyledTACItemBody>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laudantium illo voluptate dolores sequi dolorem quod, illum reprehenderit tempora quisquam, saepe veniam ea nisi asperiores esse tempore amet? Beatae, eveniet.</StyledTACItemBody>
                    </StyledTACItem>
                    <StyledTACItem>
                        <StyledTACItemTitle>5. Item 5</StyledTACItemTitle>
                        <StyledTACItemBody>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia perferendis dolorem dignissimos excepturi! Commodi veniam nam omnis in dolores doloremque quasi porro ex atque! Cupiditate ullam nihil in esse dolore.</StyledTACItemBody>
                    </StyledTACItem>
                </StyledTACBody>
            </StyledTACInner>
        </div>
    )
}

export default TermsAndConditionsPage;