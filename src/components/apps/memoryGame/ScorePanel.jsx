import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, makeStyles } from '@material-ui/core';
import { ScorePanelContainer } from './style';

const useStyles = makeStyles({
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        }
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '2.5rem',
        transition: 'background 0.2s ease-in-out',
        borderTopRightRadius: '0 0',
        borderBottomRightRadius: '37% 100%',
        background: 'var(--secondary)'
    }
});

export function ScorePanel({ moves, restartGame, formatTime, timer }) {
    const classes = useStyles();

    return (
        <ScorePanelContainer moves={moves}>
            <span className='stars'>
                <FontAwesomeIcon className='icon' icon={['fas', 'star']} />
                <FontAwesomeIcon className='icon' icon={['fas', 'star']} />
                <FontAwesomeIcon className='icon' icon={['fas', 'star']} />
            </span>
            <span>{moves} Moves</span>
            <span>{formatTime(timer)}</span>
            <Button
                aria-label='Restart game'
                classes={{ root: classes.btnStyle }}
                onClick={restartGame}
            >
                <div className={classes.icon}>
                    <FontAwesomeIcon icon={['fas', 'redo']} size='lg' />
                </div>
                Play again!
            </Button>
        </ScorePanelContainer>
    );
}
