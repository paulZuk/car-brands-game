export const getVoiceMessage = (message) => {
    window.responsiveVoice.speak(
        message, 
        'Polish Male',
    );
}

export default {
    getVoiceMessage,
};