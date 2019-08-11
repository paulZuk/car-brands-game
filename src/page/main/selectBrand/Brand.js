import React from 'react';
import styled from 'styled-components';

const Brand = styled.div`
    width: 150px;
    height: 150px;
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    background-image: url('${props => props.url}');
    background-repeat: no-repeat;
    background-size: contain;
`;

const Mask = styled.div`
    color: red;
    width: 150px;
    height: 150px;
    line-height:150px;
    text-align: center;
    background-color: lightgreen;
    font-size: 30px;
`;

const BrandComponent = ({clickEvent, showWinner, url}) => (
    <Brand
        url={url}
        onClick={clickEvent} 
    >
        {
            showWinner 
                ? <Mask>Brawo!</Mask> 
                : null
        }
    </Brand>
);

export default BrandComponent;