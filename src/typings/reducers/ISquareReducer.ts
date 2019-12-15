import { IWinner } from '../enums/CarBrands';

export interface IInitState {
    waiting: boolean;
    correctAnswer: boolean;
    winner: IWinner;
    brands: Array<IWinner>;
}
