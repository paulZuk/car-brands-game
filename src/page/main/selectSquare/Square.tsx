import React from 'react';
import styled from 'styled-components';

const Square = styled.div<{ url: string }>`
    width: 150px;
    height: 150px;
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    background-image: url('${(props) => props.url}');
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    &:after {
        content:'';
        display: block;
        width:100%;
        height: 150px;
        background-color: rgba(0,0,0,0);
    }

    &:hover:after {
        background-color: rgba(0,0,0,.1);
    }
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

export interface ISquareComponent {
    clickEvent: any;
    showWinner: boolean;
    url: string;
}

const SquareComponent: React.SFC<ISquareComponent> = ({clickEvent, showWinner, url}) => (
    <Square
        url={url}
        onClick={clickEvent} 
    >
        {
            showWinner 
                ? <Mask>Brawo!</Mask> 
                : null
        }
    </Square>
);

export default SquareComponent;