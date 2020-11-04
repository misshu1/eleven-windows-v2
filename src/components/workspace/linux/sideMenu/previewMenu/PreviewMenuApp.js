import React, { Suspense } from 'react';

import { expandedMenuAnimations } from 'components/animations';
import SpinnerApp from 'components/common/SpinnerApp';
import { useSideMenuContext } from '../../contexts/sideMenuContext';
import { Container } from './style';

export const PreviewMenuApp = () => {
    const { sideMenuState } = useSideMenuContext();

    return (
        <Container
            key='Container'
            initial='close'
            animate='open'
            exit='close'
            variants={expandedMenuAnimations}
        >
            {sideMenuState.map((app) => (
                <Suspense key={app.id} fallback={<SpinnerApp delay={200} />}>
                    {app.isActive && app.component}
                </Suspense>
            ))}
        </Container>
    );
};
