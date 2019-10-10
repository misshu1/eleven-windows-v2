import React from 'react';
import { Container, Widget } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftMenuApp = () => {
    return (
        <Container>
            <Widget>
                <FontAwesomeIcon icon={['fas', 'cog']} />
            </Widget>
            <Widget>
                <FontAwesomeIcon icon={['fas', 'power-off']} />
            </Widget>
        </Container>
    );
};

export default LeftMenuApp;
