import React, { useState } from 'react';

import BorderBG from '../../../assets/images/bg/BorderBG';
import LogoIcon from '../../../assets/images/icons/LogoIcon';
import { BorderLogo, ExpandedMenu, IconsMenu, Logo, LogoContainer } from './style';

const SideMenuApp = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(null);

    const handleExpandIconMenu = () => {
        if (isMenuOpen === null) {
            setIsMenuOpen(true);
        } else if (isMenuOpen !== null) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return (
        <>
            <LogoContainer
                isMenuOpen={isMenuOpen}
                onClick={handleExpandIconMenu}
            >
                <BorderLogo>
                    <span />
                    <span />
                    <span />
                    <span />
                    <Logo>
                        <LogoIcon />
                    </Logo>
                </BorderLogo>
            </LogoContainer>
            <button onClick={() => setIsMenuOpen(false)}>
                Close Side Menu Close Side Menu Close Side Menu Close Side Menu
                Close Side Menu
            </button>
            <IconsMenu isMenuOpen={isMenuOpen}>
                <p style={{ color: '#fff' }}>ceva</p>
            </IconsMenu>
            <ExpandedMenu isMenuOpen={isMenuOpen}>
                <BorderBG></BorderBG>
            </ExpandedMenu>
        </>
    );
};

export default SideMenuApp;
