import React, { useState, createContext } from 'react';

export const TaskbarContext = createContext();
export const TaskbarProvider = props => {
    const [taskbar, setTaskbar] = useState({
        calendarOpen: false,
        startMenuOpen: false,
        languagesOpen: false,
        notificationsOpen: false
    });

    // Find The currenty open app and close it
    const closeAllApps = () => {
        Object.keys(taskbar).forEach(item => {
            if (taskbar[item]) {
                closeApp(item);
            }
        });
    };

    const closeApp = app => {
        if (taskbar[app]) {
            setTaskbar(prevState => ({
                ...prevState,
                [app]: false
            }));
        }
    };

    const startTaskbarApp = app => {
        if (taskbar[app] === false) {
            setTaskbar(prevState => ({
                ...prevState,
                [app]: true
            }));
        }
    };

    const handleKeyPress = (e, app) => {
        if (e.charCode === 13) {
            closeAllApps();
            startTaskbarApp(app);
        }
    };

    return (
        <TaskbarContext.Provider
            value={{
                taskbar,
                setTaskbar,
                closeApp,
                startTaskbarApp,
                handleKeyPress,
                closeAllApps
            }}
        >
            {props.children}
        </TaskbarContext.Provider>
    );
};