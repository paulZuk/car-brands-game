import React from 'react';
import styled from 'styled-components';

const Brand = ({className, clickEvent, showWinner}) => (
    <div 
        onClick={clickEvent} 
        className={className}
    >
        {
            showWinner 
                ? <StyledMask>Brawo!</StyledMask> 
                : null
        }
    </div>
);

const StyledMask = styled.div`
    color: red;
    width: 150px;
    height: 150px;
    text-align: center;
    background-color: lightgreen;
    font-size: 30px;
`

const StyledBrand = styled(Brand)`
    width: 150px;
    height: 150px;
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    background-image: url('${props => props.url}');
    background-repeat: no-repeat;
    background-size: contain;
`;

export default StyledBrand;