import { 
    SET_CORRECT_ANSWER, 
    SET_WAITING, 
    SET_WINNER, 
    SET_SQUARES
} from '../../page/main/actions/constants';

export interface ISetCorrectAnswer {
    type: SET_CORRECT_ANSWER;
    payload: boolean;
}

export interface ISetWaiting {
    type: SET_WAITING;
    payload: boolean;
}

export interface ISetWinner {
    type: SET_WINNER;
}

export interface ISetSquares {
    type: SET_SQUARES;
}

export type SquareActionsTypes = ISetCorrectAnswer | ISetWaiting | ISetWinner | ISetSquares;
