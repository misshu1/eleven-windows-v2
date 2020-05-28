import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';

import { ICON_LOCATION, useFolderContext } from '../../../../../../contexts/folderContext';
import { useAuth } from '../../../../../../hooks/useAuth';
import { useStartMenuContext } from '../../../../windows/taskbar/contexts/startMenuContext';
import { Container, LoginContainer, Widget } from './style';

const widgetsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 5.5rem)',
    gridTemplateRows: 'repeat(auto-fill, 5.5rem)',
    gridAutoFlow: 'row',
    gridGap: '2rem',
    justifyContent: 'center',
    alignContent: 'start',
    userSelect: 'none',
    color: '#d6d8de',
    height: '100%',
    width: '100%',
    padding: '1rem',
};

const AppsMenu = () => {
    const { closeStartMenu } = useStartMenuContext();
    const { folderState, sortByAppName } = useFolderContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));
    const auth = useAuth();

    const widgetIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map((location) => {
                if (location === ICON_LOCATION.mobile.appsMenu) {
                    return (
                        <Widget onClick={closeStartMenu} key={app.id}>
                            <Link to={app.link}>
                                {app.widgetIcon}
                                <div className='app-name'>{app.appName}</div>
                            </Link>
                        </Widget>
                    );
                }
                return undefined;
            });
        });
    }, [closeStartMenu]);

    return ReactDOM.createPortal(
        <Container>
            <LoginContainer>
                <span>
                    <FontAwesomeIcon icon={['fas', 'user-circle']} size='2x' />
                </span>
                <h4>
                    Loged in as {auth.user ? auth.user.displayName : 'Guest'}.
                </h4>
            </LoginContainer>
            <div style={{ width: '100%', height: '100%' }}>
                <Scrollbar
                    contentProps={{
                        style: widgetsContainerStyles,
                    }}
                >
                    {widgetIcons()}
                </Scrollbar>
            </div>
        </Container>,
        document.querySelector('#desktop')
    );
};

export default AppsMenu;
