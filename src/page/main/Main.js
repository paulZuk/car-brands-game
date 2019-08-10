import React from 'react';
import { shuffleArray } from '../helper/shuffle';
import BrandEnum from '../enums/CarBrands';
import VoiceButton from './voiceButton/VoiceButton';
import SelectBrand from './selectBrand/SelectBrand';

export class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            correctAnswer: false,
            waiting: false,
        }

        this.winner = this.getWinnerBrand();
        this.brands = this.getBrandsArray();

        this.getWinnerBrand = this.getWinnerBrand.bind(this);
        this.clickBrand = this.clickBrand.bind(this);
    }

    componentDidUpdate() {
        if (this.state.correctAnswer) {
            setTimeout(() => {
                this.loadNew();
                this.getVoiceMessage(this.winner.name);
            }, 2000);
        }
    }

    getBrandsArray() {
        const brandsFiltered = BrandEnum.filter(elem => elem.id !== this.winner.id);
        const randomBrands = shuffleArray(brandsFiltered)
            .slice(0, 5);

        return shuffleArray([...randomBrands, this.winner]);
    }

    getWinnerBrand() {
        return BrandEnum[Math.floor(Math.random()*BrandEnum.length)];
    }

    clickBrand(id) {
        const { waiting } = this.state;
        
        if(waiting) {
            return;
        }

        if(this.winner.id === id) {
            this.setState({ 
                correctAnswer: true,
                waiting: true,
            });
            this.getVoiceMessage('Świetna odpowiedź Makusiu');
            return;
        }

        this.getVoiceMessage('Makusiu niestety to nie ta marka, spróbuj jeszcze raz');
        this.setState({ correctAnswer: false });
    }

    loadNew() {
        this.winner = this.getWinnerBrand();
        this.brands = this.getBrandsArray();

        this.setState({ 
            correctAnswer: false,
            waiting: false,
        });
    }

    getVoiceMessage(message, onEnd, onStart) {
        window.responsiveVoice.speak(
            message, 
            'Polish Male', 
            { 
                onend: () => onEnd, 
                onstart: () => onStart
            }
        );
    }

    render() {
        const { correctAnswer } = this.state;

        return (
            <div className="row">
                <VoiceButton 
                    message={this.winner.name} 
                />
                <SelectBrand
                    brands={this.brands}
                    winnerId={this.winner.id}
                    showWinner={correctAnswer}
                    clickBrand={this.clickBrand}
                />
            </div>
        )
    }
}

export default Main;