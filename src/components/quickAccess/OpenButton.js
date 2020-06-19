import React from 'react';

import { quickAccessToolbarOpenBtnAnimation } from '../animations';
import IconApp from './IconApp';
import { Container } from './style';

const OpenButton = ({ openToolbar, isOpen }) => {
    return (
        <Container isOpen={isOpen}>
            <IconApp
                tooltip={'tooltip.open'}
                fontIcon={['fas', 'angle-double-left']}
                onClick={openToolbar}
                motionProps={{
                    key: 'quickAccessToolbarOpenBtnAnimation',
                    initial: 'initial',
                    animate: 'open',
                    variants: quickAccessToolbarOpenBtnAnimation,
                }}
            />
        </Container>
    );
};

export default OpenButton;
