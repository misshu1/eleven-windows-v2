import React from 'react';

import { NotificationProvider } from '../../../../contexts/notificationContext';
import OpenApps from './apps/openApps/OpenApps';
import CartMenuAndIcon from './CartMenuAndIcon';
import { CartProvider } from './contexts/cartContext';
import { ClockCalendarProvider } from './contexts/clockCalendarContext';
import { LanguageProvider } from './contexts/languageContext';
import { StartMenuProvider } from './contexts/startMenuContext';
import StartMenuAndLogo from './StartMenuAndLogo';
import { Container } from './style';

const TaskbarWindowsApp = () => {
    return (
        <Container>
            <StartMenuProvider>
                <StartMenuAndLogo></StartMenuAndLogo>
            </StartMenuProvider>
            <OpenApps />
            <CartProvider>
                <CartMenuAndIcon />
            </CartProvider>
            <LanguageProvider></LanguageProvider>
            <ClockCalendarProvider></ClockCalendarProvider>
            <NotificationProvider></NotificationProvider>
        </Container>
    );
};

export default TaskbarWindowsApp;
