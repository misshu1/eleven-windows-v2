import { AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { BorderBG } from 'assets/images/bg/BorderBG';
import { useOnClickOutside } from 'hooks';
import { SVGMenuAnimations } from 'components/animations';
import { useSideMenuContext } from '../contexts/sideMenuContext';
import { IconsMenuApp } from './iconsMenu/IconsMenuApp';
import { PreviewMenuApp } from './previewMenu/PreviewMenuApp';
import { MenuContainer, SvgContainer } from './style';

const SideMenuApp = () => {
    const menuRef = useRef(null);
    const { closeSideMenu, isMenuOpen } = useSideMenuContext();
    useOnClickOutside([menuRef], () => closeSideMenu());

    return ReactDOM.createPortal(
        <>
            <AnimatePresence>
                {isMenuOpen && (
                    <MenuContainer ref={menuRef}>
                        <IconsMenuApp />
                        <PreviewMenuApp />
                        <SvgContainer
                            key='svg'
                            initial='initial'
                            animate='open'
                            exit='close'
                            variants={SVGMenuAnimations}
                        >
                            <BorderBG />
                        </SvgContainer>
                    </MenuContainer>
                )}
            </AnimatePresence>
        </>,
        document.getElementById('desktop')
    );
};

export default SideMenuApp;
