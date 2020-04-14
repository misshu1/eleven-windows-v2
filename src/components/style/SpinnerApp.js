import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    color: #d6d8de;
    z-index: 300;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SpinnerApp = (props) => {
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
        <>
            {ready && (
                <SpinnerContainer>
                    <FontAwesomeIcon icon='spinner' size='2x' pulse />
                </SpinnerContainer>
            )}
        </>
    );
};

export default SpinnerApp;

SpinnerApp.propTypes = {
    delay: PropTypes.number,
};
