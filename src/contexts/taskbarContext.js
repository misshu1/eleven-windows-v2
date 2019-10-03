import React, { useState, createContext } from 'react';

export const TaskbarContext = createContext();
export const TaskbarProvider = props => {
    const [taskbar, setTaskbar] = useState({
        calendarOpen: false,
        startMenuOpen: false,
        languagesOpen: false,
        notificationsOpen: false
    });

    // Run closeApp function for every element inside taskbar object
    const closeAllApps = () => {
        Object.keys(taskbar).forEach(item => closeApp(item));
    };

    // Check to see if "app" is open(true) then is closed
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
