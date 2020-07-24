import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useNotificationsContext } from '../../contexts/notificationsContext';
import { useDispatchSettingsContext, useSettingsContext } from '../../contexts/settingsContext';
import { useAuth } from '../../hooks/useAuth';
import { quickAccessToolbarAnimation, quickAccessToolbarCloseBtnAnimation } from '../animations';
import IconApp from './IconApp';
import { Container } from './style';

const Toolbar = ({ toolbarRef, closeToolbar, isOpen }) => {
    const { logout, user } = useAuth();
    const {
        isLinuxSelected,
        isWindowsSelected,
        isDarkThemeSelected,
        isLightThemeSelected,
    } = useSettingsContext();
    const {
        selectLightTheme,
        selectDarkTheme,
        selectWindowsOS,
        selectLinuxOS,
    } = useDispatchSettingsContext();
    const {
        areNotificationsDisabled,
        disableNotifications,
    } = useNotificationsContext();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container
            ref={toolbarRef}
            isOpen={isOpen}
            style={{ zIndex: '150' }}
            key='quickAccessToolbarAnimation'
            initial='initial'
            animate='open'
            exit='close'
            variants={quickAccessToolbarAnimation}
        >
            <IconApp
                tooltip={'tooltip.close'}
                fontIcon={['fas', 'angle-double-right']}
                onClick={closeToolbar}
                motionProps={{
                    key: 'quickAccessToolbarCloseBtnAnimation',
                    animate: 'open',
                    exit: 'close',
                    variants: quickAccessToolbarCloseBtnAnimation,
                }}
            />
            {isLinuxSelected() && (
                <IconApp
                    tooltip={'tooltip.selectWindows'}
                    fontIcon={['fab', 'windows']}
                    onClick={selectWindowsOS}
                />
            )}
            {isWindowsSelected() && (
                <IconApp
                    tooltip={'tooltip.selectLinux'}
                    fontIcon={['fab', 'ubuntu']}
                    onClick={selectLinuxOS}
                />
            )}
            {isLightThemeSelected() && (
                <IconApp
                    tooltip={'tooltip.darkTheme'}
                    fontIcon={['fas', 'moon']}
                    onClick={selectDarkTheme}
                />
            )}
            {isDarkThemeSelected() && (
                <IconApp
                    tooltip={'tooltip.lightTheme'}
                    fontIcon={['fas', 'sun']}
                    onClick={selectLightTheme}
                />
            )}
            {areNotificationsDisabled() && (
                <IconApp
                    tooltip={'tooltip.enableNotifications'}
                    fontIcon={['fas', 'bell-slash']}
                    onClick={() => disableNotifications(false)}
                />
            )}
            {!areNotificationsDisabled() && (
                <IconApp
                    tooltip={'tooltip.disableNotifications'}
                    fontIcon={['fas', 'bell']}
                    onClick={() => disableNotifications(true)}
                />
            )}
            {user && (
                <IconApp
                    tooltip={'tooltip.logout'}
                    fontIcon={['fas', 'power-off']}
                    onClick={logout}
                />
            )}
            {!user && (
                <IconApp
                    tooltip={'tooltip.login'}
                    fontIcon={['fas', 'sign-in-alt']}
                    onClick={() =>
                        navigate('/login', {
                            state: {
                                nextPathname: location.pathname,
                            },
                        })
                    }
                />
            )}
        </Container>
    );
};

export default Toolbar;
