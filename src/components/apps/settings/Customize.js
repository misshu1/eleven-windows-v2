import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    useDispatchSettingsContext,
    useSettingsContext,
} from '../../../contexts/settingsContext';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Preview from './Preview';
import { Box, Spacer, Title } from './style';

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

const Customize = () => {
    const {
        getBackgrounds,
        getSelectedBackgroundName,
        isVideoEnabledOnDesktop,
        isVideoBgEnabled,
        getVideoBackgrounds,
        getSelectedVideo,
        getThemes,
        getSelectedTheme,
    } = useSettingsContext();
    const {
        changeBackground,
        changeVideoBg,
        enableVideoBg,
        changeTheme,
    } = useDispatchSettingsContext();
    const { t } = useTranslation();
    const [bgMenuEl, setBgMenuEl] = useState(null);
    const [themeMenuEl, setThemeMenuEl] = useState(null);
    const [videoMenuEl, setVideoMenuEl] = useState(null);
    const isBgMenuOpen = Boolean(bgMenuEl);
    const isThemeMenuOpen = Boolean(themeMenuEl);
    const isVideoMenuOpen = Boolean(videoMenuEl);
    const classes = useStyles();
    const isTablet = useMediaQuery('(max-width: 800px)');

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

    return (
        <Spacer>
            <Title>{t('settings.title.customize')}</Title>
            <Box>
                <div className='buttons-container'>
                    <Button
                        className={classes.btnStyle}
                        aria-haspopup='true'
                        aria-controls='themes-menu'
                        aria-label='change theme'
                        onClick={handleClickMenuTheme}
                    >
                        {t('settings.themeButton')}
                    </Button>
                    <Menu
                        id='themes-menu'
                        anchorEl={themeMenuEl}
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
                                selected={item.name === getSelectedTheme().name}
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
                                aria-label='change background'
                                onClick={handleClickMenuBg}
                            >
                                {t('settings.backgroundButton')}
                            </Button>
                            <Menu
                                id='background-menu'
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
                                aria-label='change video background'
                                onClick={handleClickMenuVideo}
                            >
                                {t('settings.videoBgButton')}
                            </Button>
                            <Menu
                                id='video-menu'
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
                                            getSelectedVideo().name
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
            </Box>
            {!isTablet && (
                <div style={{ display: 'flex' }}>
                    <Switch
                        checked={isVideoBgEnabled()}
                        onChange={(e) => enableVideoBg(e.target.checked)}
                        value={isVideoBgEnabled()}
                        classes={{
                            switchBase: classes.switchBase,
                            track: classes.track,
                            thumb: classes.thumb,
                            checked: classes.checked,
                        }}
                    />
                    <h4 style={{ display: 'inline-block', margin: 'auto 0' }}>
                        {t('settings.enableVideoBgButton')}
                    </h4>
                </div>
            )}
        </Spacer>
    );
};

export default Customize;
