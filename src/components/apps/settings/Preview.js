import React, { useContext } from 'react';
import { ThemePreview } from './style';
import { ThemeContext } from '../../../contexts/themeContext';
import FolderIcon from '../../../assets/images/icons/FolderIcon';
import LogoIcon from '../../../assets/images/icons/LogoIcon';
import CalculatorIcon from '../../../assets/images/icons/CalculatorIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import globeIcon from '../../../assets/images/flags/globe.svg';
import CartIcon from '../../../assets/images/icons/CartIcon';

const calculatorButtons = () => {
    let arr = [];
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
    const { getSelectedBackground } = useContext(ThemeContext);
    const desktopBg = getSelectedBackground().bg;

    return (
        <ThemePreview bg={desktopBg}>
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
                    <CartIcon width='0.3rem' height='0.3rem' />
                    <img src={globeIcon} alt='language' draggable={false} />
                    <FontAwesomeIcon icon={['far', 'comment-alt']} />
                </span>
            </div>
        </ThemePreview>
    );
};

export default Preview;
