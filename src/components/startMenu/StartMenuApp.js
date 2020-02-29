import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { StartMenu, LoginContainer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RightMenuApp from './rightMenu/RightMenuApp';
import LeftMenuApp from './leftMenu/LeftMenuApp';
import { useAuth } from '../../hooks/useAuth';

const StartMenuApp = () => {
    const {
        taskbar: { startMenuOpen }
    } = useContext(TaskbarContext);
    const auth = useAuth();

    return ReactDOM.createPortal(
        <>
            {startMenuOpen && (
                <StartMenu>
                    <LoginContainer>
                        <span>
                            <FontAwesomeIcon
                                icon={['fas', 'user-circle']}
                                size='2x'
                            />
                        </span>
                        <h4>
                            Loged in as{' '}
                            {auth.user ? auth.user.displayName : 'Guest'}.
                        </h4>
                    </LoginContainer>
                    <LeftMenuApp />
                    <RightMenuApp />
                </StartMenu>
            )}
        </>,
        document.querySelector('#desktop')
    );
};

export default StartMenuApp;
