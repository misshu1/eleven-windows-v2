import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpinnerContainer = styled.div`
    color: #d6d8de;
    z-index: 200;
    position: absolute;
    top: calc(50% - 1.75rem);
    left: 50%;
    transform: translate(50%, calc(50% - 1.75rem));
`;

const SpinnerApp = () => {
    return (
        <SpinnerContainer>
            <FontAwesomeIcon icon='spinner' size='2x' pulse />
        </SpinnerContainer>
    );
};

export default SpinnerApp;
