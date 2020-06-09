import React, { useContext } from 'react';
import { ProductContext } from "../../../contexts/ProductContext";
import { StyledProductBuy, StyledATCButton } from "./StyledProductBuy";

const ProductBuy = ({ productData }) => {
    const cartCTX = useContext(ProductContext);
    return (
        <div>
            <StyledProductBuy>
                <StyledATCButton onClick={() => cartCTX.addToCart(productData)}>ADD TO CART</StyledATCButton>
            </StyledProductBuy>
        </div>
    )
}

export default ProductBuy;