import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatchSettingsContext, useSettingsContext } from '../../../contexts/settingsContext';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { THEME } from '../../theme/theme';
import Preview from './Preview';
import { Box, Spacer, Title } from './style';

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        cursor: 'default',
        backgroundColor: theme().material.primary.main,
        color: theme().material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme().material.primary.darker,
        },
    }),
    switchBase: (theme) => ({
        color: theme().accentBg,
        '&$checked': {
            color: theme().accentBg,
        },
        '&$checked + $track': {
            backgroundColor: theme().accentBg,
        },
    }),
    checked: (theme) => ({
        color: theme().accentBg,
    }),
    track: (theme) => ({
        color: theme().accentBg,
    }),
    thumb: (theme) => ({
        color: theme().switchColor,
    }),
});

const ITEM_HEIGHT = 48;

const Customize = () => {
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
        selectLightTheme,
        selectDarkTheme,
        changeBackground,
        changeVideoBg,
        enableVideoBg,
    } = useDispatchSettingsContext();
    const { t } = useTranslation();
    const [bgMenuEl, setBgMenuEl] = useState(null);
    const [videoMenuEl, setVideoMenuEl] = useState(null);
    const isBgMenuOpen = Boolean(bgMenuEl);
    const isVideoMenuOpen = Boolean(videoMenuEl);
    const classes = useStyles(getTheme);
    const isTablet = useMediaQuery('(max-width: 800px)');

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

    return (
        <Spacer>
            <Title>{t('settings.title.customize')}</Title>
            <Box>
                <div className='buttons-container'>
                    {getTheme().id === THEME.light && (
                        <Button
                            className={classes.btnStyle}
                            onClick={selectDarkTheme}
                        >
                            {t('settings.themeButton')}
                        </Button>
                    )}
                    {getTheme().id === THEME.dark && (
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
