import React from 'react';
import { getVoiceMessage } from '../../helper/voiceMessage';
import Circle from './Circle';
import ButtonWrapper from './ButtonWrapper';

export const VoiceButton = ({message, waiting}) => {

    const playSound = () => {
        if (!waiting) {
            getVoiceMessage(message);
        }
    }
    
    return (
        <ButtonWrapper>
            <Circle 
                clickEvent={playSound} 
            />
        </ButtonWrapper>
    )
}

export default VoiceButton;