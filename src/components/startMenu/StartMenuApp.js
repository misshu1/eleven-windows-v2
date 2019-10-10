import React, { lazy, Suspense, useContext } from 'react';
import ReactDOM from 'react-dom';
import { TaskbarContext } from '../../contexts/taskbarContext';
import { StartMenu, LoginContainer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RightMenuApp from './rightMenu/RightMenuApp';

const LeftMenuApp = lazy(() => import('./leftMenu/LeftMenuApp'));

const StartMenuApp = () => {
    const { taskbar } = useContext(TaskbarContext);
    const { startMenuOpen } = taskbar;
    return ReactDOM.createPortal(
        <React.Fragment>
            {startMenuOpen && (
                <StartMenu>
                    <LoginContainer>
                        <FontAwesomeIcon
                            icon={['fas', 'user-circle']}
                            size='2x'
                        />
                        <span>Loged in as Guest.</span>
                    </LoginContainer>
                    <Suspense
                        fallback={<div style={{ width: '4.5rem' }}></div>}
                    >
                        <LeftMenuApp />
                    </Suspense>
                    <RightMenuApp />
                </StartMenu>
            )}
        </React.Fragment>,
        document.querySelector('#desktop')
    );
};

export default StartMenuApp;
