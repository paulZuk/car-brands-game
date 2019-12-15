import { IWinner } from './enums/CarBrands';

export interface ISelectSquare {
    brands: Array<IWinner>;
    clickBrand: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void;
    showWinner: boolean;
    winnerId: number;
}