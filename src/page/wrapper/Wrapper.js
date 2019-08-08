import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    height: 100vh;
    background-color: black;
`

const Wrapper = props => (
    <StyledWrapper className="container-fluid">
        {props.children}
    </StyledWrapper>
)

export default Wrapper;