import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

const SpinnerApp = props => {
    const { delay } = props;
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const time = setTimeout(() => setReady(true), delay);
        return clearTimeout(time);
    }, [delay]);

    return (
        <React.Fragment>
            {ready && (
                <SpinnerContainer>
                    <FontAwesomeIcon icon='spinner' size='2x' pulse />
                </SpinnerContainer>
            )}
        </React.Fragment>
    );
};

export default SpinnerApp;

SpinnerApp.propTypes = {
    delay: PropTypes.number
};
