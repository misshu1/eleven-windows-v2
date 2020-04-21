import React, { createContext, useCallback, useContext, useState } from 'react';

const NotificationsTaskbarContext = createContext();
export const NotificationsTaskbarProvider = ({ children }) => {
    const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);

    const toggleNotificationMenu = useCallback(() => {
        setIsNotificationMenuOpen((prevState) => !prevState);
    }, [setIsNotificationMenuOpen]);

    const closeNotificationMenu = useCallback(() => {
        setIsNotificationMenuOpen(false);
    }, [setIsNotificationMenuOpen]);

    return (
        <NotificationsTaskbarContext.Provider
            value={{
                toggleNotificationMenu,
                closeNotificationMenu,
                isNotificationMenuOpen,
            }}
        >
            {children}
        </NotificationsTaskbarContext.Provider>
    );
};

export const useNotificationsTaskbarContext = () => {
    return useContext(NotificationsTaskbarContext);
};
