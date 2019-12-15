import React from 'react';
import { getVoiceMessage } from '../../helper/voiceMessage';
import Circle from './Circle';
import ButtonWrapper from './ButtonWrapper';

interface IVoiceButton {
    message: string;
    waiting: boolean;
}

export const VoiceButton: React.FC<IVoiceButton> = ({message, waiting}) => {

    const playSound = (): void => {
        if (!waiting) {
            getVoiceMessage(message);
        }
    }
    
    return (
        <ButtonWrapper>
            <Circle clickEvent={playSound} />
        </ButtonWrapper>
    )
}

export default VoiceButton;