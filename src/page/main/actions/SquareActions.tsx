import { 
    SET_CORRECT_ANSWER, 
    SET_WAITING, 
    SET_WINNER, 
    SET_SQUARES
} from './constants';

import { 
    ISetCorrectAnswer,
    ISetWaiting,
    ISetWinner,
    ISetSquares,
} from '../../../typings/actions/ISquareActions';

export const setCorrectAnswer = (a: boolean) : ISetCorrectAnswer => {
    return {
        type: SET_CORRECT_ANSWER,
        answer: a,
    }
}

export const setWaiting = (w: boolean) : ISetWaiting => {
    return {
        type: SET_WAITING,
        waiting: w,
    }
}

export const setWinner = () : ISetWinner => {
    return {
        type: SET_WINNER,
    }
}

export const setSquares = () : ISetSquares => {
    return {
        type: SET_SQUARES,
    }
}

export default {
    setCorrectAnswer,
    setWaiting,
    setWinner,
    setSquares,
}