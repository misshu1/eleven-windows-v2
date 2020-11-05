import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

const Container = styled.div`
    color: #d6d8de;
    z-index: ${zIndex.spinner};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SpinerLocal = ({ ready, style }) => {
    return (
        <>
            {ready && (
                <Container style={style}>
                    <FontAwesomeIcon icon='spinner' size='2x' pulse />
                </Container>
            )}
        </>
    );
};
const SpinerGlobal = ({ ready, style }) => {
    return ReactDOM.createPortal(
        <>
            {ready && (
                <Container style={style}>
                    <FontAwesomeIcon icon='spinner' size='2x' pulse />
                </Container>
            )}
        </>,
        document.getElementById('desktop')
    );
};

export function SpinnerApp({ delay = 0, global, style }) {
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
            {global && <SpinerGlobal ready={ready} style={style} />}
            {!global && <SpinerLocal ready={ready} style={style} />}
        </>
    );
}

SpinnerApp.propTypes = {
    delay: PropTypes.number
};
