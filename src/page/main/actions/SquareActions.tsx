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

export const setCorrectAnswer = (answer: boolean) : ISetCorrectAnswer => {
    return {
        type: SET_CORRECT_ANSWER,
        payload: answer,
    }
}

export const setWaiting = (waiting: boolean) : ISetWaiting => {
    return {
        type: SET_WAITING,
        payload: waiting,
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