import React from 'react';
import styled from 'styled-components';
import wallpaper from './images/wallpaper.jpg';

const StyledWrapper = styled.div`
    height: 800px;
    background-image: url('${wallpaper}');
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = props => (
    <StyledWrapper className="container-fluid">
        {props.children}
    </StyledWrapper>
)

export default Wrapper;