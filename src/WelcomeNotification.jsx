import React, { useEffect, useRef } from 'react';
import { Emoji } from './components/common';
import { useNotificationsContext } from './contexts';

const WelcomeTitle = () => (
    <span>
        Welcome <Emoji symbol='🌞' label='happy sun' />
    </span>
);

const WelcomeMessage = () => (
    <span>If you want to buy this React template please visit our store</span>
);

export function WelcomeNotification() {
    const { showInfo } = useNotificationsContext();
    const notification = useRef(() =>
        showInfo(<WelcomeTitle />, <WelcomeMessage />)
    );

    useEffect(() => {
        notification.current();
    }, []);

    return null;
}
