import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = ({className, children}) => (
    <div className={`col-md-12 d-flex justify-content-center align-items-center ${className}`}>
        {children}
    </div>
);

const StyledWrapper = styled(ButtonWrapper)`
    height: 300px;
`;

export default StyledWrapper;