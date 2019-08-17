import React from 'react';
import BrandWrapper from './BrandWrapper';
import Brand from './Brand';

export const SelectBrand = props => {

    const { brands, clickBrand, showWinner, winnerId } = props;

    const isWinnerId = id => {
        return winnerId === id && showWinner;
    }

    const getUrl = item => {
        return `${process.env.PUBLIC_URL}/resources/carBrands/${item.id}.jpg`;
    }

    const generateBrands = () => {
        return brands
            .map(item => (
                <Brand
                    key={item.id} 
                    url={getUrl(item)}
                    clickEvent={e => clickBrand(item.id, e)}
                    showWinner={isWinnerId(item.id)}
                />
            ));
    }

    return (
        <BrandWrapper>
            {generateBrands()}
        </BrandWrapper>
    )
}

export default SelectBrand;