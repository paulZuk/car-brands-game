import React from 'react';
import styled from 'styled-components';

const Brand = ({className}) => (
    <div className={className}></div>
);

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