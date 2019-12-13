import BrandEnum from '../../enums/CarBrands';
import { shuffleArray } from '../../helper/shuffle';
import { SquareActionsTypes } from '../../../typings/actions/ISquareActions';
import { IInitState } from '../../../typings/reducers/ISquareReducer';

const getWinner = () => {
    return BrandEnum[Math.floor(Math.random()*BrandEnum.length)];
}

const getSubjectArray = (winner, optionsNumber = 6) => {
    const brandsFiltered = BrandEnum.filter(elem => elem.id !== winner.id);
    const randomBrands = shuffleArray(brandsFiltered)
        .slice(0, optionsNumber - 1);

    return shuffleArray([...randomBrands, winner]);
}

export const initState = {
    waiting: false,
    correctAnswer: false,
    winner: {},
    brands: [],
};

export const squareReducer = (state: IInitState, action: SquareActionsTypes) : IInitState => {
    switch(action.type) {
        case 'SET_CORRECT_ANSWER':
            return {
                ...state,
                correctAnswer: action.answer,
            }
        case 'SET_WAITING':
            return {
                ...state,
                waiting: action.waiting,
            }
        case 'SET_WINNER_BRAND':
            return {
                ...state,
                winner: getWinner(),
            }
        case 'SET_BRANDS':
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