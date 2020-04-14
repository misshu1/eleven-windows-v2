import React, { useState } from 'react';

import LogoIcon from '../../../assets/images/icons/LogoIcon';
import { BorderLogo, ExpandedMenuIcons, Logo, MenuIcon } from './style';

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
            <MenuIcon isMenuOpen={isMenuOpen} onClick={handleExpandIconMenu}>
                <BorderLogo>
                    <span />
                    <span />
                    <span />
                    <span />
                    <Logo>
                        <LogoIcon />
                    </Logo>
                </BorderLogo>
            </MenuIcon>
            <button onClick={() => setIsMenuOpen(false)}>
                Close Side Menu
            </button>
            <ExpandedMenuIcons isMenuOpen={isMenuOpen}></ExpandedMenuIcons>
        </>
    );
};

export default SideMenuApp;
