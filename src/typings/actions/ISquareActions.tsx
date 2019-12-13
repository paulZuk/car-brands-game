export interface ISetCorrectAnswer {
    type: string;
    answer: boolean;
}

export interface ISetWaiting {
    type: string;
    waiting: boolean;
}

export interface ISetWinner {
    type: string;
}

export interface ISetSquares {
    type: string;
}

export interface SquareActionsTypes {
    type: string,
    answer: boolean;
    waiting: boolean;
} 