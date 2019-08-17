import BrandEnum from '../enums/CarBrands';
import { shuffleArray } from '../helper/shuffle';

const getWinnerBrand = () => {
    return BrandEnum[Math.floor(Math.random()*BrandEnum.length)];
}

const getBrandsArray = (winner, optionsNumber = 6) => {
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

export const carBrandReducer = (state, action) => {
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
                winner: getWinnerBrand(),
            }
        case 'SET_BRANDS':
            const brands = getBrandsArray(state.winner);

            return {
                ...state,
                brands,
            }
        default:
            return state;
    }
}

export default {
    carBrandReducer,
    initState,
}