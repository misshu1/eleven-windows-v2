import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSettingsContext } from '../../../contexts/settingsContext';
import Preview from './Preview';
import { Box, Spacer, Title } from './style';

const useStyles = makeStyles({
    bgButton: (theme) => ({
        cursor: 'default',
        border: 0,
        borderRadius: 3,
        backgroundColor: theme.material.accent.main,
        color: theme.material.accent.contrast.main,

        '&:hover': {
            backgroundColor: theme.material.accent.darker,
        },
    }),
    bgButtonTheme: (theme) => ({
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
});

const ITEM_HEIGHT = 48;

const Customize = () => {
    const {
        theme,
        background,
        getSelectedBackgroundName,
        selectLightTheme,
        selectDarkTheme,
        changeBackground,
    } = useSettingsContext();
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles(theme);

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

    return (
        <Spacer>
            <Title>{t('settings.title.customize')}</Title>
            <Box>
                <div className='buttons-container'>
                    {theme.id === 'light' && (
                        <Button
                            className={classes.bgButtonTheme}
                            onClick={selectDarkTheme}
                        >
                            {t('settings.themeButton')}
                        </Button>
                    )}
                    {theme.id === 'dark' && (
                        <Button
                            className={classes.bgButtonTheme}
                            onClick={selectLightTheme}
                        >
                            {t('settings.themeButton')}
                        </Button>
                    )}
                    <Button
                        className={classes.bgButton}
                        aria-haspopup='true'
                        aria-controls='background-menu'
                        onClick={handleClick}
                    >
                        {t('settings.backgroundButton')}
                    </Button>
                    <Menu
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
                                    item.name === getSelectedBackgroundName()
                                }
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <Preview />
            </Box>
        </Spacer>
    );
};

export default Customize;
