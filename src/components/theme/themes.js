export const THEME_TYPE = {
    dark: 'DARK',
    light: 'LIGHT',
};

export const themes = [
    {
        id: 'theme1',
        name: 'Light Blue',
        isSelected: false,
        className: 'theme-light-blue',
        themeType: THEME_TYPE.light,
    },
    {
        id: 'theme2',
        name: 'Dark Blue',
        isSelected: true,
        className: 'theme-dark-blue',
        themeType: THEME_TYPE.dark,
    },
    {
        id: 'theme3',
        name: 'Not so Dark',
        isSelected: false,
        className: 'theme-not-so-dark',
        themeType: THEME_TYPE.dark,
    },
];
