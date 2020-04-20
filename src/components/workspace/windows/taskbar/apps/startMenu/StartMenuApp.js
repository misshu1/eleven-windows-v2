import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

import LeftMenuApp from './leftMenu/LeftMenuApp';
import RightMenuApp from './rightMenu/RightMenuApp';
import { LoginContainer, Container } from './style';
import { useAuth } from '../../../../../../hooks/useAuth';

const StartMenuApp = (props) => {
    const { isStartMenuOpen, startMenuRef, closeStartMenu } = props;
    const auth = useAuth();

    return ReactDOM.createPortal(
        <>
            {/* TODO Animations with framer motion */}
            {isStartMenuOpen && (
                <Container ref={startMenuRef}>
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
                    <LeftMenuApp closeStartMenu={closeStartMenu} />
                    <RightMenuApp closeStartMenu={closeStartMenu} />
                </Container>
            )}
        </>,
        document.querySelector('#desktop')
    );
};

export default StartMenuApp;
