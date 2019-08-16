import React, { useEffect, useReducer } from 'react';
import BrandEnum from '../enums/CarBrands';
import { setCorrectAnswer, setWaiting, setWinnerBrand, setBrands } from './CarbrandActions';
import { carBrandReducer, initState } from './carBrandReducer';
import { getVoiceMessage } from '../helper/voiceMessage'
import VoiceButton from './voiceButton/VoiceButton';
import SelectBrand from './selectBrand/SelectBrand';

function getItemFromEnum(id) {
    return BrandEnum.find(item => item.id === id);
}

export const CarBrandContainer = () => {

    const [state, dispatch] = useReducer(carBrandReducer, initState)
    const { 
        correctAnswer,
        waiting, 
        brands, 
        winner 
    } = state;

    // useEffect(() => {
    //     if (correctAnswer) {
    //         setTimeout(() => {
    //             loadNew();
    //             getVoiceMessage(winner.name);
    //         }, 2000);
    //     }
    // }, [correctAnswer]);

    console.log({winner, brands});
    

    useEffect(() => {
        loadNew()
    }, []);

    useEffect(() => {
        if (correctAnswer) {
            loadNew();
            getVoiceMessage(winner.name);
        }
    }, [correctAnswer, winner.name, waiting]);


    function clickBrand(id) {
        const wrongItem = getItemFromEnum(id);
        
        if(waiting) {
            return;
        }

        if(winner.id === id) {
            dispatch(setWaiting(true));
            dispatch(setCorrectAnswer(true));
            getVoiceMessage('Świetna odpowiedź Makusiu');
            return;
        }

        getVoiceMessage(`To jest ${wrongItem.name}, znajdź ${winner.name}`);
        dispatch(setCorrectAnswer(false));
    }

     function loadNew() {
        dispatch(setCorrectAnswer(false));
        dispatch(setWaiting(false));
         
        setTimeout(() => {
            dispatch(setWinnerBrand());
            dispatch(setBrands());
        }, 2000);
    }

    return (
        <div className="row">
            <VoiceButton 
                message={winner.name} 
            />
            <SelectBrand
                brands={brands}
                winnerId={winner.id}
                showWinner={correctAnswer}
                clickBrand={clickBrand}
            />
        </div>
    )
}

// export class CarBrandContainer extends React.Component {

//     constructor() {
//         super();

//         this.state = {
//             correctAnswer: false,
//             waiting: false,
//         }

//         this.winner = this.getWinnerBrand();
//         this.brands = this.getBrandsArray();

//         this.getWinnerBrand = this.getWinnerBrand.bind(this);
//         this.clickBrand = this.clickBrand.bind(this);
//     }

//     componentDidUpdate() {
//         if (this.state.correctAnswer) {
//             setTimeout(() => {
//                 this.loadNew();
//                 getVoiceMessage(this.winner.name);
//             }, 2000);
//         }
//     }

//     getBrandsArray() {
//         const brandsFiltered = BrandEnum.filter(elem => elem.id !== this.winner.id);
//         const randomBrands = shuffleArray(brandsFiltered)
//             .slice(0, 5);

//         return shuffleArray([...randomBrands, this.winner]);
//     }

//     getWinnerBrand() {
//         return BrandEnum[Math.floor(Math.random()*BrandEnum.length)];
//     }

//     getItemFromEnum(id) {
//         return BrandEnum.find(item => item.id === id);
//     }

//     clickBrand(id) {
//         const { waiting } = this.state;
//         const wrongItem = this.getItemFromEnum(id);
        
//         if(waiting) {
//             return;
//         }

//         if(this.winner.id === id) {
//             this.setState({ 
//                 correctAnswer: true,
//                 waiting: true,
//             });
//             getVoiceMessage('Świetna odpowiedź Makusiu');
//             return;
//         }

//         getVoiceMessage(`To jest ${wrongItem.name}, znajdź ${this.winner.name}`);
//         this.setState({ correctAnswer: false });
//     }

//     loadNew() {
//         this.winner = this.getWinnerBrand();
//         this.brands = this.getBrandsArray();

//         this.setState({ 
//             correctAnswer: false,
//             waiting: false,
//         });
//     }

//     render() {
//         const { correctAnswer } = this.state;

//         return (
//             <div className="row">
//                 <VoiceButton 
//                     message={this.winner.name} 
//                 />
//                 <SelectBrand
//                     brands={this.brands}
//                     winnerId={this.winner.id}
//                     showWinner={correctAnswer}
//                     clickBrand={this.clickBrand}
//                 />
//             </div>
//         )
//     }
// }

export default CarBrandContainer;