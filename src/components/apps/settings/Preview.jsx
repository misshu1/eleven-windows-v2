import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import globeIcon from 'assets/images/flags/globe.svg';
import {
    CalculatorIcon,
    CartIcon,
    FolderIcon,
    LogoIcon
} from 'assets/images/icons';
import { useSettingsContext } from 'contexts';
import { ThemePreview } from './style';

const calculatorButtons = () => {
    const arr = [];
    for (let i = 0; i < 16; i++) {
        arr.push(
            <span key={i}>
                <FontAwesomeIcon icon={['fas', 'times']} />
            </span>
        );
    }

    return arr;
};

const Preview = () => {
    const {
        getSelectedBackground,
        getSelectedVideo,
        isVideoEnabledOnDesktop
    } = useSettingsContext();

    return (
        <ThemePreview
            background={getSelectedBackground()}
            getSelectedVideoPreview={getSelectedVideo().preview}
            isVideoEnabledOnDesktop={isVideoEnabledOnDesktop()}
        >
            <div className='calculator'>
                <div className='calculator-title'>
                    <span className='folder-name'></span>
                </div>
                <div className='buttons'>{calculatorButtons()}</div>
            </div>
            <div className='folders-container'>
                <FolderIcon width='0.6rem' height='0.6rem' />
                <FolderIcon width='0.6rem' height='0.6rem' />
                <FolderIcon width='0.6rem' height='0.6rem' />
            </div>
            <div className='taskbar'>
                <span className='left'>
                    <LogoIcon width='0.4rem' height='0.4rem' />
                    <CalculatorIcon width='0.4rem' height='0.4rem' />
                </span>
                <span className='right'>
                    <CartIcon
                        width='0.3rem'
                        height='0.3rem'
                        color='var(--colorDefault)'
                    />
                    <img src={globeIcon} alt='language' draggable={false} />
                    <FontAwesomeIcon icon={['far', 'comment-alt']} />
                </span>
            </div>
        </ThemePreview>
    );
};

export default Preview;
