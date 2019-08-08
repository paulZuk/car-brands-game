import React from 'react';
import VoiceButton from './voiceButton/VoiceButton';
import SelectBrand from './selectBrand/SelectBrand';

const Main = () => (
    <div className="row">
        <VoiceButton message="Cześć Makusiu!!" />
        <SelectBrand />
    </div>
);

export default Main;