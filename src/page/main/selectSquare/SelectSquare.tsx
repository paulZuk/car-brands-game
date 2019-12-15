import React from 'react';
import SquareWrapper from './SquareWrapper';
import Square from './Square';
import { IWinner } from '../../../typings/enums/CarBrands';
import { ISelectSquare } from '../../../typings/ISelectSquare';

export const SelectSquare: React.SFC<ISelectSquare> = (props) => {

    const { brands, clickBrand, showWinner, winnerId } = props;

    const isWinnerId = (id: number): boolean => {
        return winnerId === id && showWinner;
    }

    const getUrl = (item: IWinner): string => {
        return `${process.env.PUBLIC_URL}/resources/carBrands/${item.id}.jpg`;
    }

    const generateBrands = () => {
        return brands
            .map(item => (
                <Square
                    key={item.id} 
                    url={getUrl(item)}
                    clickEvent={(e: React.MouseEvent<HTMLButtonElement>) => clickBrand(item.id, e)}
                    showWinner={isWinnerId(item.id)}
                />
            ));
    }

    return (
        <SquareWrapper>
            {generateBrands()}
        </SquareWrapper>
    )
}

export default SelectSquare;