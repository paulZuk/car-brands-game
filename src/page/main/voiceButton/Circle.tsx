import React from 'react';
import styled from 'styled-components';
import mic from './images/mic.png';

const Circle = styled.div.attrs({
    className: "d-flex justify-content-center align-items-center",
})`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
`;

const Image = styled.div`
    width: 70px;
    height: 70px;
    background-image: url('${mic}');
    background-repeat: no-repeat;
    background-size: contain;
`;

interface ICircleComponent {
    clickEvent: () => void;
}

const CircleComponent: React.FC<ICircleComponent> = props => (
    <Circle onClick={props.clickEvent}>
        <Image />
    </Circle>
);

export default CircleComponent;