import React, { useEffect, useReducer } from 'react';
import BrandEnum from '../enums/CarBrands';
import { setCorrectAnswer, setWaiting, setWinnerBrand, setBrands } from './actions/SquareActions';
import { carBrandReducer, initState } from './reducers/squareReducer';
import { getVoiceMessage } from '../helper/voiceMessage'
import VoiceButton from './voiceButton/VoiceButton';
import SelectBrand from './selectBrand/SelectBrand';

function getItemFromEnum(id) {
    return BrandEnum.find(item => item.id === id);
}

export const CarBrandContainer = () => {

    const [state, dispatch] = useReducer(carBrandReducer, initState);
    const { 
        correctAnswer,
        waiting, 
        brands, 
        winner 
    } = state;

    useEffect(() => {
        loadNew();
    }, []);

    useEffect(() => {
        getVoiceMessage(winner.name);
    }, [winner]);

    useEffect(() => {
        if (correctAnswer) {
            setTimeout(() => {
                loadNew();
            }, 2000);
        }
    }, [correctAnswer]);

    function clickBrand(id) {
        const wrongItem = getItemFromEnum(id);
        
        if(waiting) {
            return;
        }

        if(winner.id === id) {
            dispatch(setWaiting(true));
            dispatch(setCorrectAnswer(true));
            getVoiceMessage('Świetna odpowiedź Makusiu');
            return;
        }

        getVoiceMessage(`To jest ${wrongItem.name}, znajdź ${winner.name}`);
        dispatch(setCorrectAnswer(false));
    }

     function loadNew() {
        dispatch(setWinnerBrand());
        dispatch(setBrands());
        dispatch(setCorrectAnswer(false));
        dispatch(setWaiting(false));
    }

    return (
        <div className="row">
            <VoiceButton 
                message={winner.name}
                waiting={waiting}
            />
            <SelectBrand
                brands={brands}
                winnerId={winner.id}
                showWinner={correctAnswer}
                clickBrand={clickBrand}
            />
        </div>
    )
}

export default CarBrandContainer;