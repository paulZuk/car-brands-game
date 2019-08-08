import React from 'react';
import styled from 'styled-components';

const BrandWrapper = ({className, children}) => (
    <div className={`col-md-12 d-flex justify-content-center align-items-center ${className}`}>
        <div className="d-flex flex-wrap justify-content-center">
            {children}
        </div> 
    </div>
);

const StyledWrapper = styled(BrandWrapper)`
    height: 300px;
`;

export default StyledWrapper;