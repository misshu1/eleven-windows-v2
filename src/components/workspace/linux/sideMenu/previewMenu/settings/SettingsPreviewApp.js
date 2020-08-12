import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import i18n from 'i18next';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import { useDispatchSettingsContext, useSettingsContext } from '../../../../../../contexts/settingsContext';
import useMediaQuery from '../../../../../../hooks/useMediaQuery';
import { languages } from '../../../../../../services/translation/i18next';
import Preview from '../../../../../apps/settings/Preview';
import { FlagImgContainer } from '../../../../../apps/settings/style';
import ScrollbarApp from '../../../../../common/ScrollbarApp';
import { FlagImg } from '../../../../windows/taskbar/icons/language/style/FlagImg';
import { Box, Container } from './style';

const useStyles = makeStyles({
    btnStyle: {
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)',
        },
    },
    switchBase: {
        color: 'var(--primary)',
        '&$checked': {
            color: 'var(--primary)',
        },
        '&$checked + $track': {
            backgroundColor: 'var(--primary)',
        },
    },
    checked: {
        color: 'var(--primary)',
    },
    track: {
        color: 'var(--primary)',
    },
    thumb: {
        color: 'var(--primaryDark)',
    },
});

const ITEM_HEIGHT = 48;

const SettingsPreviewApp = () => {
    const {
        getBackgrounds,
        getSelectedBackgroundName,
        isVideoEnabledOnDesktop,
        isVideoBgEnabled,
        getVideoBackgrounds,
        getSelectedVideoBgName,
        getThemes,
        getSelectedThemeName,
    } = useSettingsContext();

    const {
        enableVideoBg,
        changeVideoBg,
        changeBackground,
        changeTheme,
    } = useDispatchSettingsContext();
    const {
        disable,
        disableNotifications,
        showSuccess,
    } = useNotificationsContext();
    const classes = useStyles();
    const { t } = useTranslation();
    const [bgMenuEl, setBgMenuEl] = useState(null);
    const [themeMenuEl, setThemeMenuEl] = useState(null);

    const [videoMenuEl, setVideoMenuEl] = useState(null);
    const isBgMenuOpen = Boolean(bgMenuEl);
    const isThemeMenuOpen = Boolean(themeMenuEl);
    const isVideoMenuOpen = Boolean(videoMenuEl);
    const containerRef = useRef(null);
    const isTablet = useMediaQuery('(max-width: 800px)');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleClickMenuTheme = (event) => {
        setThemeMenuEl(event.currentTarget);
    };

    const handleCloseMenuTheme = () => {
        setThemeMenuEl(null);
    };

    const handleClickMenuVideo = (event) => {
        setVideoMenuEl(event.currentTarget);
    };

    const handleCloseMenuVideo = () => {
        setVideoMenuEl(null);
    };

    const handleClickMenuBg = (event) => {
        setBgMenuEl(event.currentTarget);
    };

    const handleCloseMenuBg = () => {
        setBgMenuEl(null);
    };

    const changeCurrentTheme = useCallback(
        (selectedTheme) => {
            setThemeMenuEl(null);
            changeTheme(selectedTheme);
        },
        [changeTheme]
    );

    const changeBg = useCallback(
        (selectedBg) => {
            setBgMenuEl(null);
            changeBackground(selectedBg);
        },
        [changeBackground]
    );

    const changeVideo = useCallback(
        (selectedVideo) => {
            setVideoMenuEl(null);
            changeVideoBg(selectedVideo);
        },
        [changeVideoBg]
    );

    const renderImg = () => {
        return languages.map((item) => (
            <FlagImgContainer
                key={item.lang}
                style={{ height: '3.5rem' }}
                onClick={() => {
                    changeLanguage(item.lang);
                    showSuccess(
                        t('language.successTitle'),
                        t('language.successMessage')
                    );
                }}
            >
                <FlagImg
                    src={item.flag}
                    style={{ margin: '1px' }}
                    draggable='false'
                />
            </FlagImgContainer>
        ));
    };

    return (
        <ScrollbarApp>
            <Container ref={containerRef}>
                <Typography variant='h6' style={{ textAlign: 'center' }}>
                    {t('settings.title.customize')}
                </Typography>
                <Box>
                    <div className='buttons-container'>
                        <Button
                            className={classes.btnStyle}
                            aria-haspopup='true'
                            aria-controls='themes-menu'
                            onClick={handleClickMenuTheme}
                            aria-label='change theme'
                        >
                            {t('settings.themeButton')}
                        </Button>
                        <Menu
                            id='themes-menu'
                            anchorEl={themeMenuEl}
                            container={containerRef.current}
                            keepMounted
                            open={isThemeMenuOpen}
                            onClose={handleCloseMenuTheme}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 6.5,
                                    width: 220,
                                },
                            }}
                        >
                            {getThemes().map((item) => (
                                <MenuItem
                                    key={item.id}
                                    onClick={() => changeCurrentTheme(item.id)}
                                    selected={
                                        item.name === getSelectedThemeName()
                                    }
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Menu>
                        {!isVideoEnabledOnDesktop() && (
                            <>
                                <Button
                                    className={classes.btnStyle}
                                    aria-haspopup='true'
                                    aria-controls='background-menu'
                                    onClick={handleClickMenuBg}
                                    aria-label='change background'
                                >
                                    {t('settings.backgroundButton')}
                                </Button>
                                <Menu
                                    id='background-menu'
                                    container={containerRef.current}
                                    anchorEl={bgMenuEl}
                                    keepMounted
                                    open={isBgMenuOpen}
                                    onClose={handleCloseMenuBg}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 6.5,
                                            width: 220,
                                        },
                                    }}
                                >
                                    {getBackgrounds().map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            onClick={() => changeBg(item.id)}
                                            selected={
                                                item.name ===
                                                getSelectedBackgroundName()
                                            }
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        )}
                        {isVideoEnabledOnDesktop() && (
                            <>
                                <Button
                                    className={classes.btnStyle}
                                    aria-haspopup='true'
                                    aria-controls='video-menu'
                                    onClick={handleClickMenuVideo}
                                    aria-label='change video background'
                                >
                                    {t('settings.videoBgButton')}
                                </Button>
                                <Menu
                                    id='video-menu'
                                    container={containerRef.current}
                                    anchorEl={videoMenuEl}
                                    keepMounted
                                    open={isVideoMenuOpen}
                                    onClose={handleCloseMenuVideo}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 6.5,
                                            width: 220,
                                        },
                                    }}
                                >
                                    {getVideoBackgrounds().map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            onClick={() => changeVideo(item.id)}
                                            selected={
                                                item.name ===
                                                getSelectedVideoBgName()
                                            }
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        )}
                    </div>
                    <Preview />
                    {!isTablet && (
                        <div style={{ display: 'flex' }}>
                            <Switch
                                checked={isVideoBgEnabled()}
                                onChange={(e) =>
                                    enableVideoBg(e.target.checked)
                                }
                                value={isVideoBgEnabled()}
                                classes={{
                                    switchBase: classes.switchBase,
                                    track: classes.track,
                                    thumb: classes.thumb,
                                    checked: classes.checked,
                                }}
                            />
                            <h4
                                style={{
                                    display: 'inline-block',
                                    margin: 'auto 0',
                                }}
                            >
                                {t('settings.enableVideoBgButton')}
                            </h4>
                        </div>
                    )}
                </Box>
                <Typography
                    variant='h6'
                    style={{ textAlign: 'center', margin: '3rem 0 0 0' }}
                >
                    {t('settings.title.language')}
                </Typography>
                <Box style={{ justifyContent: 'center' }}>{renderImg()}</Box>
                <Typography
                    variant='h6'
                    style={{ textAlign: 'center', margin: '3rem 0 0 0' }}
                >
                    {t('settings.title.notifications')}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Switch
                        checked={disable}
                        onChange={(e) => disableNotifications(e.target.checked)}
                        value={disable}
                        classes={{
                            switchBase: classes.switchBase,
                            track: classes.track,
                            thumb: classes.thumb,
                            checked: classes.checked,
                        }}
                    />
                    <h4 style={{ display: 'inline-block', margin: 'auto 0' }}>
                        {t('settings.disableButton')}
                    </h4>
                </div>
                <p
                    style={{
                        margin: '0 0.5rem',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                    }}
                >
                    <strong style={{ color: 'red', fontSize: '1.1rem' }}>
                        *
                    </strong>
                    {t('settings.disableButtonInfo')}
                </p>
            </Container>
        </ScrollbarApp>
    );
};

export default SettingsPreviewApp;
