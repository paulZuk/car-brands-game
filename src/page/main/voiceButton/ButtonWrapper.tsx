import React from 'react';
import styled from 'styled-components';

interface IButtonWrapper {
    className: string;
}

const ButtonWrapper: React.FC<IButtonWrapper> = ({className, children}) => (
    <div className={`col-md-12 d-flex justify-content-center align-items-center ${className}`}>
        {children}
    </div>
);

const StyledWrapper = styled(({active, ...rest}) => <ButtonWrapper {...rest} />)<{ className: string }>`
    height: 300px;
`;

export default StyledWrapper;