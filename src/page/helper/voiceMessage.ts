declare global {
    interface Window {
        responsiveVoice:any;
    }
}

export const getVoiceMessage = (message: string, callback: () => void = () => {}): void => {
    window.responsiveVoice.speak(
        message, 
        'Polish Male',
        { onend: callback}
    );
}

export default {
    getVoiceMessage,
};