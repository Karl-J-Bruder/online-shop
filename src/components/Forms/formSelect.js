import React from 'react';
import products from "../../data/products";
import { StyledFilterH2, StyledSortSelector } from "./StyledFormSelect";


const FormSelect = ({ searchValue, handleChangeValue }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    let prefectures = [];
    products.map(product => {
        if (!prefectures.includes(product.prefecture)) {
            prefectures = [...prefectures, product.prefecture];
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <StyledFilterH2>Sort by prefecture</StyledFilterH2>
            <StyledSortSelector onChange={handleChangeValue} name="prefecture" value={searchValue.prefecture}>
                <option>Select Prefecture</option>
                {prefectures.map(prefecture => (
                    <option value={`${prefecture}`}>{`${prefecture}`}</option>
                ))}
            </StyledSortSelector>
        </form>
    )
}
export default FormSelect;