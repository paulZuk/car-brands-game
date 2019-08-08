import React from 'react';
import PropTypes from 'prop-types';
import BrandWrapper from './BrandWrapper';
import Brand from './Brand';

export class SelectBrand extends React.Component {

    getBrands() {
        return [0,1,2,3,4,5].map(elem => <Brand key={elem} />)
    }

    render() {
        return (
            <BrandWrapper>
                {this.getBrands()}
            </BrandWrapper>
        )
    }
};

SelectBrand.propTypes = {
    
}

export default SelectBrand;