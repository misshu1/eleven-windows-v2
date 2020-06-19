import React, { useCallback } from 'react';

import PowerOffIcon from '../../assets/images/icons/PowerOffIcon';
import { useNotificationsContext } from '../../contexts/notificationsContext';
import { useSettingsContext } from '../../contexts/settingsContext';
import { useAuth } from '../../hooks/useAuth';
import IconApp from './IconApp';
import { Container } from './style';

const QuickAccessApp = () => {
    const auth = useAuth();
    const {
        isLinuxSelected,
        isWindowsSelected,
        isDarkThemeSelected,
        isLightThemeSelected,
        selectLightTheme,
        selectDarkTheme,
        selectWindowsOS,
        selectLinuxOS,
    } = useSettingsContext();
    const {
        areNotificationsDisabled,
        disableNotifications,
    } = useNotificationsContext();

    return (
        <Container>
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
            {auth.user && (
                <IconApp
                    tooltip={'tooltip.logout'}
                    icon={<PowerOffIcon />}
                    onClick={auth.logout}
                />
            )}
        </Container>
    );
};

export default QuickAccessApp;
