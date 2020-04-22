import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

import { useAuth } from '../../../../../../hooks/useAuth';
import { useStartMenuContext } from '../../contexts/startMenuContext';
import LeftMenuApp from './leftMenu/LeftMenuApp';
import RightMenuApp from './rightMenu/RightMenuApp';
import { Container, LoginContainer } from './style';

const StartMenuApp = ({ startMenuRef }) => {
    const { closeStartMenu } = useStartMenuContext();

    const auth = useAuth();

    return ReactDOM.createPortal(
        <Container ref={startMenuRef}>
            <LoginContainer>
                <span>
                    <FontAwesomeIcon icon={['fas', 'user-circle']} size='2x' />
                </span>
                <h4>
                    Loged in as {auth.user ? auth.user.displayName : 'Guest'}.
                </h4>
            </LoginContainer>
            <LeftMenuApp closeStartMenu={closeStartMenu} />
            <RightMenuApp closeStartMenu={closeStartMenu} />
        </Container>,
        document.querySelector('#desktop')
    );
};

export default StartMenuApp;
