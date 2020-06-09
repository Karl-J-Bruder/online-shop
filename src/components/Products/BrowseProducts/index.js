import React, { useState, useContext, useReducer } from "react";
import products from "../../../data/products";
import FormSelect from "../../Forms/formSelect";
import AdvancedFilter from "../../../reducers/AdvancedFilter";
import { ProductContext } from "../../../contexts/ProductContext";
import {
    StyledProductListGrid,
    StyledProductContainer,
    StyledProductInfo,
    StyledProductName,
    StyledParameterRow,
    StyledProductParameter,
    StyledPrice,
    StyledRatings,
    StyledStar,
    StyledImg,
    StyledButtonContainer,
    StyledATCButton
} from "./StyledBrowseProducts";
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrowseProducts = () => {
    const cartCTX = useContext(ProductContext);

    const [productList, setProductList] = useState(products);
    const [listFilterInput, setListFilterInput] = useReducer(
        (reducerState, newReducerState) => ({ ...reducerState, ...newReducerState }),
        {
            name: "",
            prefecture: "",
            brewMethod: "",
            pastuerization: "",
            price: "< $20"
        }
    );
    const handleFilterDrinks = event => {
        const { name, value } = event.target;
        setListFilterInput({ [name]: value })
    };

    const filterDrinks = list => {
        return list.filter((item) => {
            return (
                item.name
                    .toLowerCase()
                    .includes(
                        listFilterInput.name.toLowerCase()
                    ) &&
                item.prefecture
                    .toLowerCase()
                    .includes(
                        listFilterInput.prefecture.toLowerCase()
                    )
            );
        });
    };
    const res = filterDrinks(productList);

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
        <div>
            <FormSelect
                searchValue={listFilterInput}
                handleChangeValue={handleFilterDrinks}
            />
            <AdvancedFilter
                searchValue={listFilterInput}
                handleChangeValue={handleFilterDrinks}
            />
            <StyledProductListGrid>
                {res.map(product => (
                    <StyledProductContainer key={product.sku}>
                        <StyledImg
                            src={`/images/${product.sku}.jpg`}
                            alt={product.name}
                        ></StyledImg>
                        <StyledProductInfo>
                            <StyledProductName>{product.name}</StyledProductName>
                            {product.volume && (
                                <StyledProductParameter>
                                    {product.volume}ml
                                </StyledProductParameter>
                            )}
                            <div>
                                <StyledProductParameter>
                                    {product.prefecture} Prefecture
                                </StyledProductParameter>
                                <StyledProductParameter>
                                    ABV: {product.abv}%
                                </StyledProductParameter>
                            </div>

                            <div>
                                <StyledProductParameter>
                                    Type: {product.type}
                                </StyledProductParameter>
                                <StyledProductParameter>
                                    Polish Ratio: {product.polishRatio}%
                                </StyledProductParameter>
                            </div>
                            <StyledParameterRow>
                                <StyledPrice>{product.displayPrice}</StyledPrice>
                                <StyledRatings>
                                    {getAvgRating(product)}<StyledStar /> ({product.reviewList.length} reviews)
                            </StyledRatings>
                            </StyledParameterRow>
                            <StyledButtonContainer>
                                <Link to={`/products/:${product.sku}`}><StyledATCButton><FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: "5px", fontSize: "11px" }} />DETAILS</StyledATCButton></Link>
                                <StyledATCButton onClick={() => cartCTX.addToCart(product)}>
                                    ADD TO CART
                                </StyledATCButton>
                            </StyledButtonContainer>
                        </StyledProductInfo>
                    </StyledProductContainer>
                ))}
            </StyledProductListGrid>
        </div>
    );
};

export default BrowseProducts;
