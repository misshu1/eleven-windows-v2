import background from './DesktopBackground';

const LightTheme = {
    id: 'light',

    // Desktop
    desktopBg: background,

    // Global colors
    textColor: '#212121',
    background: '#c4d9fc',
    hover: 'rgba(150, 189, 255, 0.5)',
    whiteBlack: '#000',

    // Buttons
    accentBg: '#009BCE',
    accentBgLight: '#006edc',
    disableBg: '#99aeff',
    switchColor: '#006edc',

    // Material colors
    material: {
        primary: {
            main: '#009BCE',
            lighter: '#B3E1F0',
            darker: '#006edc',
            contrast: {
                main: 'rgba(0, 0, 0, 0.8)',
                lighter: 'rgba(0, 0, 0, 0.7)',
                darker: 'rgb(255, 255, 255)'
            }
        },
        accent: {
            main: '#CF6900',
            lighter: '#F1D2B3',
            darker: '#BD4C00',
            contrast: {
                main: 'rgb(255, 255, 255)',
                lighter: 'rgba(0, 0, 0, 0.8)',
                darker: 'rgb(255, 255, 255)'
            }
        },
        warn: {
            main: '#D71547',
            lighter: '#F3B9C8',
            darker: '#C70C2F',
            contrast: {
                main: 'rgb(255, 255, 255)',
                lighter: 'rgba(0, 0, 0, 0.8)',
                darker: 'rgb(255, 255, 255)'
            }
        }
    },

    // Folder
    folderNameBarBg: '#b2b7f7',
    folderBorder: '#202020',
    folderNameBarBtnHover: 'rgba(0, 21, 255, 0.2)',
    folderHoverBg: 'rgba(0, 0, 0, 0.1)',
    folderHoverOutline: 'rgb(0, 0, 0, 0.3)',
    folderFocusBg: 'rgba(0, 0, 0, 0.2)',
    folderFocusOutline: 'rgb(0, 0, 0, 0.4)',
    folderCloseBtn: '#009BCE',
    backButtonColor: '#41a83a',
    folderMenuBackdrop: 'rgba(0, 0, 0, 0.5)',

    // Store
    cardBg: '#B3E1F0',
    ratingColorEmpty: 'rgba(0, 0, 0, 0.4)',

    // Settings App
    settingsResizeIconBg: 'rgba(0, 0, 0, 0.1)',
    settingsResizeOutline: 'rgb(0, 0, 0, 0.3)',

    // Task Manager
    bottomBg: '#b0c0ff',

    // Calculator App
    calcNumButtonBg: 'rgba(0, 21, 255, 0.1)',
    calcOperatorButtonBg: 'rgba(150, 189, 255, 0.5)',
    calcNumButtonHover: 'rgba(0, 21, 255, 0.2)',
    calcOperatorButtonHover: 'rgba(0, 21, 255, 0.3)',

    // Clock and Lgogo
    clockHover: 'rgba(150, 189, 255, 0.5)',
    logoHover: 'rgba(150, 189, 255, 0.5)',
    logoBorder: '#009BCE',

    // StartMenu
    startMenuBg: 'rgba(196, 217, 252, 0.95)',
    startMenuColor: '#212121',
    startMenuBorder: '#202020',
    startLeftMenuHover: 'rgba(150, 189, 255, 0.5)',

    // Taskbar Icons
    iconBg: 'rgba(0, 21, 255, 0.1)',
    iconBgHover: 'rgba(0, 21, 255, 0.2)',

    // Calendar
    calendarBg: 'rgba(196, 217, 252, 0.95)',
    calendarBorder: '#202020',
    calendarColorDefault: '#212121',
    calendarColorPrimary: '#000',
    calendarColorSecondary: '#595959',
    calendarColorCurrentDate: '#fff',
    calendarBgCurrentDate: '#009BCE',
    calendarTodayClock: '#006edc',
    calendarColorNeighboringMonth: '#828282',

    // Notification Modal
    modalBg: 'rgba(196, 217, 252, 0.95)',
    modalColor: '#fff',

    // Notification App
    notificationBg: 'rgba(225, 235, 252, 0.96)',
    notificationColor: '#212121',
    nottificationMessageBg: 'rgba(196, 217, 252, 0.95)',
    notificationBorder: '#202020',
    notificationWidgetBg: 'rgb(196, 217, 252)',
    notificationWidgetColor: '#212121',
    widgetHover: 'rgba(150, 189, 255, 0.5)'
};

export default LightTheme;
