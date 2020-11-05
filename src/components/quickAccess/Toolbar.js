import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    useDispatchSettingsContext,
    useSettingsContext,
    useNotificationsContext
} from 'contexts';
import {
    quickAccessToolbarAnimation,
    quickAccessToolbarCloseBtnAnimation
} from 'components/animations';
import { useAuth } from 'hooks';
import IconApp from './IconApp';
import { Container } from './style';
import { zIndex } from 'components/theme/zIndex';

const ITEM_HEIGHT = 48;

const Toolbar = ({ toolbarRef, closeToolbar, isOpen }) => {
    const { logout, user } = useAuth();
    const [themeMenuEl, setThemeMenuEl] = useState(null);
    const isThemeMenuOpen = Boolean(themeMenuEl);

    const {
        isLinuxSelected,
        isWindowsSelected,
        getThemes,
        getSelectedTheme
    } = useSettingsContext();
    const {
        selectWindowsOS,
        selectLinuxOS,
        changeTheme
    } = useDispatchSettingsContext();
    const {
        areNotificationsDisabled,
        disableNotifications
    } = useNotificationsContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClickMenuTheme = (event) => {
        setThemeMenuEl(event.currentTarget);
    };

    const handleCloseMenuTheme = () => {
        setThemeMenuEl(null);
    };

    const changeCurrentTheme = useCallback(
        (selectedTheme) => {
            setThemeMenuEl(null);
            changeTheme(selectedTheme);
        },
        [changeTheme]
    );

    return (
        <Container
            ref={toolbarRef}
            isOpen={isOpen}
            style={{ zIndex: zIndex.quickAccessToolbar }}
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
                    variants: quickAccessToolbarCloseBtnAnimation
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
            <IconApp
                tooltip={'tooltip.theme'}
                fontIcon={['fas', 'palette']}
                onClick={handleClickMenuTheme}
                aria-haspopup='true'
                aria-controls='themes-menu'
            />
            <Menu
                id='themes-menu'
                anchorEl={themeMenuEl}
                keepMounted
                container={toolbarRef.current}
                open={isThemeMenuOpen}
                onClose={handleCloseMenuTheme}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 6.5,
                        width: 220
                    }
                }}
            >
                {getThemes().map((item) => (
                    <MenuItem
                        key={item.id}
                        onClick={() => changeCurrentTheme(item.id)}
                        selected={item.name === getSelectedTheme().name}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
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
                                nextPathname: location.pathname
                            }
                        })
                    }
                />
            )}
        </Container>
    );
};

export default Toolbar;
