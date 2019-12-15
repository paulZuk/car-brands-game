import React from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div.attrs({
    className: "d-flex justify-content-center flex-wrap",
})`
    max-width: 620px;
`;

const Wrapper = styled.div.attrs({
    className: 'col-md-12 d-flex justify-content-center align-items-center',
})`
    height: 300px;
`;

const BrandWrapper: React.FC = ({ children }) => (
    <Wrapper>
        <RowWrapper>
            {children}
        </RowWrapper>
    </Wrapper>
);

export default BrandWrapper;