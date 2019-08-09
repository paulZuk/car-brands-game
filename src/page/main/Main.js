import React from 'react';
import BrandEnum from '../enums/CarBrands';
import VoiceButton from './voiceButton/VoiceButton';
import SelectBrand from './selectBrand/SelectBrand';

export class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            correctAnswer: false,
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
                this.getVoiceMessage(`Czy odgadniesz kolejną markę?`, this.winner.name);

            }, 2000);
        }
    }

    getBrandsArray() {
        const brandsFiltered = BrandEnum.filter(elem => elem.id !== this.winner.id);
        const randomBrands = brandsFiltered
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);

        return [...randomBrands, this.winner]
            .sort(() => 0.5 - Math.random());
    }

    getWinnerBrand() {
        return BrandEnum[Math.floor(Math.random()*BrandEnum.length)];
    }

    clickBrand(id) {
        if(this.winner.id === id) {
            this.setState({ correctAnswer: true });
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
            correctAnswer: false 
        });
    }

    getVoiceMessage(message, second) {
        window.responsiveVoice.speak(
            message, 
            'Polish Male', 
            { onend: () => this.getVoiceMessage(second)}
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