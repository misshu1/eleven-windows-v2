import { AnimatePresence } from 'framer-motion';
import React, { lazy, Suspense, useRef, useState } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import SpinnerApp from '../style/SpinnerApp';
import OpenButton from './OpenButton';

const Toolbar = lazy(() => import('./Toolbar'));

const QuickAccessApp = () => {
    const toolbarRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useOnClickOutside([toolbarRef], () => closeToolbar());

    const openToolbar = () => {
        setIsOpen(true);
    };

    const closeToolbar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {!isOpen && (
                <OpenButton openToolbar={openToolbar} isOpen={isOpen} />
            )}
            <Suspense fallback={<SpinnerApp delay={200} />}>
                <AnimatePresence>
                    {isOpen && (
                        <Toolbar
                            closeToolbar={closeToolbar}
                            toolbarRef={toolbarRef}
                            isOpen={isOpen}
                        />
                    )}
                </AnimatePresence>
            </Suspense>
        </>
    );
};

export default QuickAccessApp;
