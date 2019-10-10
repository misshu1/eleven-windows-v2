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

    const toggleAppVisibility = app => {
        setTaskbar(prevState => ({
            ...prevState,
            [app]: !taskbar[app]
        }));
    };

    // Toggle app visibility on "Enter" key press
    const handleKeyPress = (e, app) => {
        if (e.charCode === 13) {
            toggleAppVisibility(app);
        }
    };

    return (
        <TaskbarContext.Provider
            value={{
                taskbar,
                setTaskbar,
                closeApp,
                toggleAppVisibility,
                handleKeyPress,
                closeAllApps
            }}
        >
            {props.children}
        </TaskbarContext.Provider>
    );
};
