import React from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
    max-width: 620px;
`;

const BrandWrapper = ({className, children}) => (
    <div className={`col-md-12 d-flex justify-content-center align-items-center ${className}`}>
        <RowWrapper className="d-flex justify-content-center flex-wrap">
            {children}
        </RowWrapper>
    </div>
);

const StyledWrapper = styled(BrandWrapper)`
    height: 300px;
`;

export default StyledWrapper;