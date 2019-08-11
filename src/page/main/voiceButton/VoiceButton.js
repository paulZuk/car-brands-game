import React from 'react';
import PropTypes from 'prop-types';
import { getVoiceMessage } from '../../helper/voiceMessage';
import Circle from './Circle';
import ButtonWrapper from './ButtonWrapper';

export class VoiceButton extends React.Component {
    constructor() {
        super();

        this.playSound = this.playSound.bind(this);
    }

    playSound() {
        const { message } = this.props;
        getVoiceMessage(message);
    }

    render() {
        return (
            <ButtonWrapper>
                <Circle 
                    clickEvent={this.playSound} 
                />
            </ButtonWrapper>
        )
    }
};

VoiceButton.propTypes = {
    message: PropTypes.string.isRequired,
}

export default VoiceButton;