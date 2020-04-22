import React from 'react';

import OpenApps from './apps/openApps/OpenApps';
import CartMenuAndIcon from './CartMenuAndIcon';
import ClockAndCalendar from './ClockAndCalendar';
import { CartProvider } from './contexts/cartContext';
import { ClockCalendarProvider } from './contexts/clockCalendarContext';
import { LanguageProvider } from './contexts/languageContext';
import { NotificationsTaskbarProvider } from './contexts/notificationsTaskbarContext';
import { StartMenuProvider } from './contexts/startMenuContext';
import LanguageMenuAndIcon from './LanguageMenuAndIcon';
import NotificationMenuAndIcon from './NotificationMenuAndIcon';
import StartMenuAndLogo from './StartMenuAndLogo';
import { Container } from './style';

const TaskbarWindowsApp = () => {
    return (
        <Container>
            <StartMenuProvider>
                <StartMenuAndLogo />
            </StartMenuProvider>
            <OpenApps />
            <CartProvider>
                <CartMenuAndIcon />
            </CartProvider>
            <LanguageProvider>
                <LanguageMenuAndIcon />
            </LanguageProvider>
            <ClockCalendarProvider>
                <ClockAndCalendar />
            </ClockCalendarProvider>
            <NotificationsTaskbarProvider>
                <NotificationMenuAndIcon />
            </NotificationsTaskbarProvider>
        </Container>
    );
};

export default TaskbarWindowsApp;
