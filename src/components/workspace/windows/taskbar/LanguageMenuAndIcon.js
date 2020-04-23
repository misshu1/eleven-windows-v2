import React, { lazy, Suspense, useRef } from 'react';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import SpinnerGlobalApp from '../../../style/SpinnerGlobalApp';
import { useLanguageContext } from './contexts/languageContext';
import LanguageIconApp from './icons/language/LanguageIconApp';

const LanguageApp = lazy(() => import('./apps/language/LanguageApp'));

const LanguageMenuAndIcon = () => {
    const { closeLanguage, isLanguageOpen } = useLanguageContext();
    const languageMenuRef = useRef(null);
    const languageIconRef = useRef(null);

    useOnClickOutside(
        [languageMenuRef, languageIconRef],
        () => isLanguageOpen && closeLanguage()
    );

    return (
        <>
            <LanguageIconApp languageIconRef={languageIconRef} />
            <Suspense fallback={<SpinnerGlobalApp delay={200} />}>
                {isLanguageOpen && (
                    <LanguageApp languageMenuRef={languageMenuRef} />
                )}
            </Suspense>
        </>
    );
};
export default LanguageMenuAndIcon;
