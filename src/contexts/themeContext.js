import React, {
    useState,
    createContext,
    useLayoutEffect,
    useCallback
} from 'react';
import DarkTheme from '../components/theme/DarkTheme';
import LightTheme from '../components/theme/LightTheme';
import DesktopBackground from '../components/theme/DesktopBackground';

const createBackgroundObject = () => {
    const obj = Object.keys(DesktopBackground).map((item, index) => ({
        name: `Backgorund ${index + 1}`,
        bg: item,
        isSelected: false
    }));

    const setDefault = obj.map(item => {
        if (item.bg === 'bg11') {
            return { ...item, isSelected: true };
        } else {
            return item;
        }
    });

    return setDefault;
};

export const ThemeContext = createContext();
export const ThemeStateProvider = props => {
    const [theme, setTheme] = useState(DarkTheme);
    const [background, setBackground] = useState(createBackgroundObject());

    const getSelectedBackground = () => {
        return background.filter(item => item.isSelected === true);
    };

    const changeBackground = useCallback(
        selected => {
            localStorage.setItem('background', selected);

            const filterBg = background.map(item =>
                item.bg === selected
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            );

            const checkBackground = background
                .filter(item => item.bg === selected)
                .map(item => item.isSelected);

            if (!checkBackground[0]) {
                setBackground(filterBg);
            }
        },
        [background]
    );

    const checkLocalStorageBackground = useCallback(() => {
        const bg = localStorage.getItem('background');
        if (!bg || bg === undefined || bg === null || bg === '') {
            localStorage.setItem('background', 'bg11');
            changeBackground('bg11');
        } else {
            changeBackground(bg);
        }
    }, [changeBackground]);

    const checkLocalStorageTheme = useCallback(() => {
        const theme = localStorage.getItem('theme');
        if (!theme || theme === undefined || theme === null || theme === '') {
            localStorage.setItem('theme', 'dark');
            setTheme(DarkTheme);
        }
        if (theme === 'dark') {
            setTheme(DarkTheme);
        } else if (theme === 'light') {
            setTheme(LightTheme);
        }
    }, []);

    const changeTheme = useCallback(themeName => {
        localStorage.setItem('theme', themeName);
        setTheme(() => {
            if (themeName === 'dark') {
                return DarkTheme;
            } else if (themeName === 'light') {
                return LightTheme;
            }
        });
    }, []);

    useLayoutEffect(() => {
        checkLocalStorageTheme();
        checkLocalStorageBackground();
    }, [checkLocalStorageBackground, checkLocalStorageTheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
                background,
                changeBackground,
                getSelectedBackground
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};
