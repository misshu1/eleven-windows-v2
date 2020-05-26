import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import i18n from 'i18next';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';

import { useNotificationsContext } from '../../../../../../contexts/notificationsContext';
import { useSettingsContext } from '../../../../../../contexts/settingsContext';
import { languages } from '../../../../../../services/translation/i18next';
import Preview from '../../../../../apps/settings/Preview';
import { FlagImgContainer } from '../../../../../apps/settings/style';
import { FlagImg } from '../../../../windows/taskbar/icons/language/style/FlagImg';
import { Box, Container } from './style';

const useStyles = makeStyles({
    btnStyle: (theme) => ({
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
    switchBase: (theme) => ({
        color: theme.accentBg,
        '&$checked': {
            color: theme.accentBg,
        },
        '&$checked + $track': {
            backgroundColor: theme.accentBg,
        },
    }),
    checked: (theme) => ({
        color: theme.accentBg,
    }),
    track: (theme) => ({
        color: theme.accentBg,
    }),
    thumb: (theme) => ({
        color: theme.switchColor,
    }),
});

const ITEM_HEIGHT = 48;

const SettingsPreviewApp = () => {
    const {
        theme,
        background,
        getSelectedBackgroundName,
        selectLightTheme,
        selectDarkTheme,
        changeBackground,
    } = useSettingsContext();
    const {
        disable,
        disableNotifications,
        showSuccess,
    } = useNotificationsContext();
    const classes = useStyles(theme);
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const containerRef = useRef(null);
    const open = Boolean(anchorEl);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeBg = useCallback(
        (selectedBg) => {
            setAnchorEl(null);
            changeBackground(selectedBg);
        },
        [changeBackground]
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
        <Container ref={containerRef}>
            <Typography variant='h5' component='h2' className='heading-name'>
                {t('settings.title.name')}
            </Typography>
            <Scrollbar>
                <Typography variant='h6' style={{ textAlign: 'center' }}>
                    {t('settings.title.customize')}
                </Typography>
                <Box>
                    <div className='buttons-container'>
                        {theme.id === 'light' && (
                            <Button
                                className={classes.btnStyle}
                                onClick={selectDarkTheme}
                            >
                                {t('settings.themeButton')}
                            </Button>
                        )}
                        {theme.id === 'dark' && (
                            <Button
                                className={classes.btnStyle}
                                onClick={selectLightTheme}
                            >
                                {t('settings.themeButton')}
                            </Button>
                        )}
                        <Button
                            className={classes.btnStyle}
                            aria-haspopup='true'
                            aria-controls='background-menu'
                            onClick={handleClick}
                        >
                            {t('settings.backgroundButton')}
                        </Button>
                        <Menu
                            container={containerRef.current}
                            id='background-menu'
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 6.5,
                                    width: 220,
                                },
                            }}
                        >
                            {background.map((item) => (
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
                    </div>
                    <Preview />
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
                        onChange={disableNotifications}
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
            </Scrollbar>
        </Container>
    );
};

export default SettingsPreviewApp;
