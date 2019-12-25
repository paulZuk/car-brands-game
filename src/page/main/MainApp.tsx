import React, { useEffect, useReducer } from 'react';
import BrandEnum from '../enums/CarBrands';
import { setCorrectAnswer, setWaiting, setWinner, setSquares } from './actions/SquareActions';
import { squareReducer, initState } from './reducers/squareReducer';
import { getVoiceMessage } from '../helper/voiceMessage'
import VoiceButton from './voiceButton/VoiceButton';
import SelectSquare from './selectSquare/SelectSquare';

const getItemFromEnum = (id: number) => {
    return BrandEnum.find(item => item.id === id);
}

export const MainApp: React.FC = () => {

    const [state, dispatch] = useReducer(squareReducer, initState);
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

    const clickBrand = (id: number) => {
        const wrongItem = getItemFromEnum(id);
        
        if(waiting || !wrongItem) {
            return;
        }

        dispatch(setWaiting(true));

        if(winner.id === id) {
            dispatch(setCorrectAnswer(true));
            getVoiceMessage('Świetna odpowiedź Makusiu');
            return;
        }

        getVoiceMessage(`To jest ${wrongItem.name}, znajdź ${winner.name}`, () => {
            dispatch(setWaiting(false));
            dispatch(setCorrectAnswer(false));
        });
    }

     function loadNew() {
        dispatch(setWinner());
        dispatch(setSquares());
        dispatch(setCorrectAnswer(false));
        dispatch(setWaiting(false));
    }

    return (
        <div className="row">
            <VoiceButton 
                message={winner.name}
                waiting={waiting}
            />
            <SelectSquare
                brands={brands}
                winnerId={winner.id}
                showWinner={correctAnswer}
                clickBrand={clickBrand}
            />
        </div>
    )
}

export default MainApp;