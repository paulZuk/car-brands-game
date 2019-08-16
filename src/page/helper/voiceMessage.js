export const getVoiceMessage = (message, onEnd) => {
    window.responsiveVoice.speak(
        message, 
        'Polish Male',
        {
            onend: onEnd,
        }
    );
}

export default {
    getVoiceMessage,
};