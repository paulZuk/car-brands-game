import React from 'react';
import BrandWrapper from './BrandWrapper';
import Brand from './Brand';

export class SelectBrand extends React.Component {
    isWinnerId(id) {
        const { winnerId, showWinner } = this.props;
        return winnerId === id && showWinner;
    }

    getUrl(item) {
        return `${process.env.PUBLIC_URL}/resources/carBrands/${item.id}.jpg`;
    }

    generateBrands() {
        const { 
            brands, 
            clickBrand,
        } = this.props;

        return brands
            .map(item => (
                <Brand
                    key={item.id} 
                    url={this.getUrl(item)}
                    clickEvent={e => clickBrand(item.id, e)}
                    showWinner={this.isWinnerId(item.id)}
                />
            ));
    }
    render() {
        return (
            <BrandWrapper>
                {this.generateBrands()}
            </BrandWrapper>
        )
    }
};

export default SelectBrand;