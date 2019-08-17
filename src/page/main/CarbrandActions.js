export const setCorrectAnswer = answer => {
    return {
        type: 'SET_CORRECT_ANSWER',
        answer,
    }
}

export const setWaiting = waiting => {
    return {
        type: 'SET_WAITING',
        waiting,
    }
}

export const setWinnerBrand = () => {
    return {
        type: 'SET_WINNER_BRAND',
    }
}

export const setBrands = () => {
    return {
        type: 'SET_BRANDS',
    }
}

export default {
    setCorrectAnswer,
    setWaiting,
    setWinnerBrand,
    setBrands,
}