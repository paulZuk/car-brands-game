import React from 'react';
import styled from 'styled-components';
import mic from './images/mic.png';

const StyledCircle = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    
    &:hover {
        background-color: lightblue;
    }
`;

const StyledImage = styled.div`
    width: 70px;
    height: 70px;
    background-image: url('${mic}');
    background-repeat: no-repeat;
    background-size: contain;
`;

const Circle = props => (
    <StyledCircle 
        className="d-flex justify-content-center align-items-center"
        onClick={props.clickEvent}
    >
        <StyledImage />
    </StyledCircle>
);

export default Circle;