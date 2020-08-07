import { THEME } from './theme';

const DarkTheme = {
    id: THEME.dark,

    // Global colors
    textColor: '#d6d8de',
    background: '#202020',
    hover: 'rgba(100, 100, 100, 0.3)',
    whiteBlack: '#fff',

    // Buttons
    accentBg: '#AF0138',
    accentBgLight: '#d7809b',
    disableBg: '#363636',
    switchColor: '#c80140',

    // Material colors
    material: {
        primary: {
            main: '#af0138',
            lighter: '#d7809b',
            darker: '#960124',
            contrast: {
                main: 'rgba(255, 255, 255, 0.9)',
                lighter: 'rgba(0, 0, 0, 0.8)',
                darker: 'rgba(255, 255, 255, 0.9)',
            },
        },
        accent: {
            main: '#14851E',
            lighter: '#B9DABC',
            darker: '#0B6812',
            contrast: {
                main: 'rgb(255, 255, 255)',
                lighter: 'rgba(0, 0, 0, 0.8)',
                darker: 'rgba(255, 255, 255, 0.9)',
            },
        },
        warn: {
            main: '#FF0352',
            lighter: '#FFB3CB',
            darker: '#FF0238',
            contrast: {
                main: 'rgba(0, 0, 0, 0.9)',
                lighter: 'rgba(0, 0, 0, 0.8)',
                darker: 'rgba(0, 0, 0, 0.8)',
            },
        },
    },

    // Folder
    folderNameBarBg: '#444',
    folderBorder: '#444',
    folderNameBarBtnHover: 'rgba(200, 200, 200, 0.2)',
    folderHoverBg: 'rgba(174, 192, 229, 0.1)',
    folderHoverOutline: 'rgb(220, 227, 242, 0.5)',
    folderFocusBg: 'rgba(174, 192, 229, 0.2)',
    folderFocusOutline: 'rgb(220, 227, 242, 0.7)',
    folderCloseBtn: '#AF0138',
    backButtonColor: '#26c11b',
    folderMenuBackdrop: 'rgba(0, 0, 0, 0.5)',
    folderLinuxButtonsBg: 'rgba(255, 255, 255, 0.1)',

    // Store
    cardBg: '#333030',
    ratingColorEmpty: 'rgba(255, 255, 255, 0.4)',
    tabsBg: 'rgba(255, 255, 255, 0.07)',
    reviewBorder: 'rgba(255, 255, 255, 0.1)',
    productCardBg: 'rgba(150, 150, 150, 0.1)',
    productCardBoxShadow: '0px 0px 10px -7px rgba(255, 255, 255, 0.3)',

    // Settings App
    settingsResizeIconBg: 'rgba(174, 192, 229, 0.2)',
    settingsResizeOutline: 'rgb(220, 227, 242, 0.5)',

    // Task Manager
    bottomBg: '#242424',

    // Calculator App
    calcNumButtonBg: '#000',
    calcOperatorButtonBg: '#0f0f0f',
    calcNumButtonHover: '#101010',
    calcOperatorButtonHover: '#212121',

    // Clock and Logo
    clockHover: 'rgba(100, 100, 100, 0.3)',
    logoHover: 'rgba(100, 100, 100, 0.3)',
    logoBorder: '#AF0138',

    // StartMenu
    startMenuBg: 'rgba(32, 32, 32, 0.95)',
    startMenuColor: '#d6d8de',
    startMenuBorder: '#444',
    startLeftMenuHover: 'rgba(100, 100, 100, 0.3)',

    // Taskbar Icons
    iconBg: 'rgba(255, 255, 255, 0.1)',
    iconBgHover: 'rgba(200, 200, 200, 0.2)',

    // Calendar
    calendarBg: 'rgba(32, 32, 32, 0.95)',
    calendarBorder: '#444',
    calendarColorDefault: '#d6d8de',
    calendarColorPrimary: '#fff',
    calendarColorSecondary: '#bababa',
    calendarColorCurrentDate: '#fff',
    calendarBgCurrentDate: '#AF0138',
    calendarTodayClock: '#d7809b',
    calendarColorNeighboringMonth: '#969696',

    // Notification Modal
    modalBg: 'rgba(32, 32, 32, 0.95)',
    modalColor: '#fff',

    // Notification App
    notificationBg: 'rgba(48, 48, 48, 0.96)',
    notificationColor: '#d6d8de',
    nottificationMessageBg: 'rgba(32, 32, 32, 0.95)',
    notificationBorder: '#444',
    notificationWidgetBg: 'rgb(32, 32, 32)',
    notificationWidgetColor: '#d6d8de',
    widgetHover: 'rgba(100, 100, 100, 0.01)',
};

export default DarkTheme;
