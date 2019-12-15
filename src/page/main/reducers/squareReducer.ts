import BrandEnum from '../../enums/CarBrands';
import { IWinner, CarBrands } from '../../../typings/enums/CarBrands';
import { 
    SET_CORRECT_ANSWER, 
    SET_WAITING, 
    SET_WINNER, 
    SET_SQUARES
} from '../actions/constants';
import { shuffleArray } from '../../helper/shuffle';
import { SquareActionsTypes } from '../../../typings/actions/ISquareActions';
import { IInitState } from '../../../typings/reducers/ISquareReducer';

const getWinner = (): IWinner => {
    return BrandEnum[Math.floor(Math.random()*BrandEnum.length)];
}

const getSubjectArray = (winner: IWinner, optionsNumber = 6) : CarBrands => {
    const brandsFiltered = BrandEnum.filter(elem => elem.id !== winner.id);
    const randomBrands = shuffleArray(brandsFiltered)
        .slice(0, optionsNumber - 1);

    return shuffleArray([...randomBrands, winner]);
}

export const initState: IInitState = {
    waiting: false,
    correctAnswer: false,
    winner: { id: 0, name: '' },
    brands: [],
};

export const squareReducer = (state: IInitState, action: SquareActionsTypes) : IInitState => {
    switch(action.type) {
        case SET_CORRECT_ANSWER:
            return {
                ...state,
                correctAnswer: action.payload,
            }
        case SET_WAITING:
            return {
                ...state,
                waiting: action.payload,
            }
        case SET_WINNER:
            return {
                ...state,
                winner: getWinner(),
            }
        case SET_SQUARES:
            const brands = getSubjectArray(state.winner);

            return {
                ...state,
                brands,
            }
        default:
            return state;
    }
}

export default {
    squareReducer,
    initState,
}