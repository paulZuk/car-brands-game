import React from 'react';
import BrandWrapper from './BrandWrapper';
import Brand from './Brand';

export class SelectBrand extends React.Component {
    isWinnerId(id) {
        const { winnerId, showWinner } = this.props;
        return winnerId === id && showWinner;
    }

    generateBrands() {
        const { 
            brands, 
            clickBrand,
        } = this.props;

        return brands
            .map(elem => (
                <Brand
                    key={elem.id} 
                    url={`${process.env.PUBLIC_URL}/resources/carBrands/${elem.id}.jpg`}
                    clickEvent={e => clickBrand(elem.id, e)}
                    showWinner={this.isWinnerId(elem.id)}
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