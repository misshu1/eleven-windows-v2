import React, { useState, useCallback, useContext } from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Title, Box, BackgroundPreview } from './style';
import { ThemeContext } from '../../../contexts/themeContext';

const useStyles = makeStyles({
    bgButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 2rem',
        margin: 'auto 0'
    }
});

const ITEM_HEIGHT = 48;

const Background = () => {
    const { background, changeBackground, getSelectedBackground } = useContext(
        ThemeContext
    );
    const selectedBg = getSelectedBackground()[0].bg;
    const selectedBgName = getSelectedBackground()[0].name;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeBg = useCallback(
        selectedBg => {
            setAnchorEl(null);
            changeBackground(selectedBg);
        },
        [changeBackground]
    );

    return (
        <React.Fragment>
            <Title>Background</Title>
            <Box>
                <Button
                    className={classes.bgButton}
                    aria-haspopup='true'
                    aria-controls='background-menu'
                    onClick={handleClick}
                >
                    Select Background
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
                <BackgroundPreview background={selectedBg}>
                    <h4>{selectedBgName}</h4>
                </BackgroundPreview>
            </Box>
        </React.Fragment>
    );
};

export default Background;
