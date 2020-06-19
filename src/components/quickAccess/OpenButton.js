import React from 'react';

import IconApp from './IconApp';
import { Container } from './style';

const OpenButton = ({ openToolbar, isOpen }) => {
    return (
        <Container isOpen={isOpen}>
            <IconApp
                tooltip={'tooltip.open'}
                fontIcon={['fas', 'angle-double-left']}
                onClick={openToolbar}
            />
        </Container>
    );
};

export default OpenButton;
