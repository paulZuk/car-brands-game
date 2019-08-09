import React from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
    max-width: 620px;
`;

const Wrapper = styled.div`
    height: 300px;
`;

const BrandWrapper = ({ children }) => (
    <Wrapper className={`col-md-12 d-flex justify-content-center align-items-center`}>
        <RowWrapper className="d-flex justify-content-center flex-wrap">
            {children}
        </RowWrapper>
    </Wrapper>
);

export default BrandWrapper;