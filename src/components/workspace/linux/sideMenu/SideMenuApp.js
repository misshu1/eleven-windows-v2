import { AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import BorderBG from '../../../../assets/images/bg/BorderBG';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { SVGMenuAnimations } from '../../../animations';
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
                            <BorderBG></BorderBG>
                        </SvgContainer>
                    </MenuContainer>
                )}
            </AnimatePresence>
        </>,
        document.querySelector('#desktop')
    );
};

export default SideMenuApp;
