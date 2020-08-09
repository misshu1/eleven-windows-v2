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
import { THEME } from '../../../../../theme/theme';
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
        getTheme,
        getBackgrounds,
        getSelectedBackgroundName,
        isVideoEnabledOnDesktop,
        isVideoBgEnabled,
        getVideoBackgrounds,
        getSelectedVideoBgName,
    } = useSettingsContext();

    const {
        enableVideoBg,
        changeVideoBg,
        selectLightTheme,
        selectDarkTheme,
        changeBackground,
    } = useDispatchSettingsContext();
    const {
        disable,
        disableNotifications,
        showSuccess,
    } = useNotificationsContext();
    const classes = useStyles();
    const { t } = useTranslation();
    const [bgMenuEl, setBgMenuEl] = useState(null);
    const [videoMenuEl, setVideoMenuEl] = useState(null);
    const isBgMenuOpen = Boolean(bgMenuEl);
    const isVideoMenuOpen = Boolean(videoMenuEl);
    const containerRef = useRef(null);
    const isTablet = useMediaQuery('(max-width: 800px)');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
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
                        {getTheme() === THEME.light && (
                            <Button
                                className={classes.btnStyle}
                                onClick={selectDarkTheme}
                            >
                                {t('settings.themeButton')}
                            </Button>
                        )}
                        {getTheme() === THEME.dark && (
                            <Button
                                className={classes.btnStyle}
                                onClick={selectLightTheme}
                            >
                                {t('settings.themeButton')}
                            </Button>
                        )}
                        {!isVideoEnabledOnDesktop() && (
                            <>
                                <Button
                                    className={classes.btnStyle}
                                    aria-haspopup='true'
                                    aria-controls='background-menu'
                                    onClick={handleClickMenuBg}
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
