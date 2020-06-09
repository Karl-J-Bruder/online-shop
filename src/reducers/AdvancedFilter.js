import React, { Fragment } from 'react';
import { StyledFilterH2, StyledFilterForm, StyledFilterInput } from "./StyledAdvancedFilter";

const AdvancedFilter = ({ searchValue, handleChangeValue }) => {
    return (
        <Fragment>
            <StyledFilterH2>Search by name or prefecture</StyledFilterH2>
            <StyledFilterForm>
                <StyledFilterInput
                    type="text"
                    name="name"
                    value={searchValue.name}
                    onChange={e => handleChangeValue(e)}
                    placeholder="Enter name"
                />
                <StyledFilterInput
                    type="text"
                    name="prefecture"
                    value={searchValue.prefecture}
                    onChange={e => handleChangeValue(e)}
                    placeholder="Enter prefecture"
                />
            </StyledFilterForm>
        </Fragment>
    )
}

export default AdvancedFilter;