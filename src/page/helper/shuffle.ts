export const shuffleArray = (array: Array<any>): Array<any> => array.sort(() => 0.5 - Math.random());

export default {
    shuffleArray,
}