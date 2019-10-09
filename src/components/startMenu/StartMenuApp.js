import React from 'react';
import ReactDOM from 'react-dom';
import { StartMenu, LoginContainer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StartMenuApp = () => {
    return ReactDOM.createPortal(
        <StartMenu>
            <LoginContainer>
                <FontAwesomeIcon icon={['fas', 'user-circle']} size='2x' />
                <span>Loged in as Guest.</span>
            </LoginContainer>
        </StartMenu>,
        document.querySelector('#desktop')
    );
};

export default StartMenuApp;
