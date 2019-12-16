import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpinnerContainer = styled.div`
    color: #d6d8de;
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SpinnerApp = props => {
    const { delay } = props;
    const [ready, setReady] = useState(false);

    // Here we set a delay, so if the app loads faster then the specified delay, we will not display a loading indicator
    useEffect(() => {
        const time = setTimeout(() => {
            setReady(true);
        }, delay);

        return () => {
            clearTimeout(time);
        };
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
