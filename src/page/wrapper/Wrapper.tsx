import React from 'react';
import styled from 'styled-components';
import IWrapper from '../../typings/IWrapper';
import wallpaper from './images/wallpaper.jpg';

const StyledWrapper = styled.div`
    height: 100vh;
    background-image: url('${wallpaper}');
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper: React.SFC<IWrapper> = props => (
    <StyledWrapper className="container-fluid">
        {props.children}
    </StyledWrapper>
)

export default Wrapper;