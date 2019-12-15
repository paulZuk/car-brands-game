declare global {
    interface Window {
        responsiveVoice:any;
    }
}

export const getVoiceMessage = (message: string): void => {
    window.responsiveVoice.speak(
        message, 
        'Polish Male',
    );
}

export default {
    getVoiceMessage,
};