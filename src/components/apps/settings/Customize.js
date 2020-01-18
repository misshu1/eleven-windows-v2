import React, { useState, useCallback, useContext } from 'react';
import { Title, Box, Spacer } from './style';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Preview from './Preview';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({
    bgButton: theme => ({
        backgroundColor: theme.accentBg,
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: '3rem',
        padding: '0 2rem',
        margin: 'auto 0',
        cursor: 'default',
        '&:hover': {
            backgroundColor: theme.accentBg
        }
    })
});

const ITEM_HEIGHT = 48;

const Customize = () => {
    const {
        theme,
        background,
        changeBackground,
        getSelectedBackground,
        changeTheme
    } = useContext(ThemeContext);
    const { t } = useTranslation();
    const selectedBgName = getSelectedBackground().name;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles(theme);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const updateTheme = useCallback(
        theme => {
            changeTheme(theme);
        },
        [changeTheme]
    );

    const changeBg = useCallback(
        selectedBg => {
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
                            className={classes.bgButton}
                            onClick={() => updateTheme('dark')}
                        >
                            {t('settings.themeButton')}
                        </Button>
                    )}
                    {theme.id === 'dark' && (
                        <Button
                            className={classes.bgButton}
                            onClick={() => updateTheme('light')}
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
                                width: 220
                            }
                        }}
                    >
                        {background.map(item => (
                            <MenuItem
                                key={item.name}
                                onClick={() => changeBg(item.bg)}
                                selected={item.name === selectedBgName}
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
