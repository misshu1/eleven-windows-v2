import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScorePanelContainer } from './style';
import { PrimaryButton } from 'components/common/Buttons';

export function ScorePanel({ moves, restartGame, formatTime, timer }) {
    return (
        <ScorePanelContainer moves={moves}>
            <span className='stars'>
                <FontAwesomeIcon className='icon' icon={['fas', 'star']} />
                <FontAwesomeIcon className='icon' icon={['fas', 'star']} />
                <FontAwesomeIcon className='icon' icon={['fas', 'star']} />
            </span>
            <span>{moves} Moves</span>
            <span>{formatTime(timer)}</span>
            <PrimaryButton
                aria-label='Restart game'
                onClick={restartGame}
                fontIcon={['fas', 'redo']}
            >
                Play again!
            </PrimaryButton>
        </ScorePanelContainer>
    );
}
