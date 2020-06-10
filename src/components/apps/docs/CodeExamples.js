export const folderContextState = `
import React, { lazy } from 'react';
import exampleIcon from 'src/assets/images/icons/your_icon.svg';
const ExampleApp = lazy(() =>
  import('src/components/apps/example/ExampleApp')
);

const APPS_STATE = [
  {
    id: 1234,
    appName: 'Example app name',
    widgetIcon: exampleIcon,
    link: '/example',
    component: <ExampleApp />,
    isOpen: null,
    isMinimize: null,
    appIndex: 100,
    iconLocation: [
      ICON_LOCATION.windows.desktop,
      ICON_LOCATION.windows.startMenu.right,
      ICON_LOCATION.mobile.homeScreen,
      ICON_LOCATION.mobile.appsMenu,
      ICON_LOCATION.linux.appsMenu
    ]
  }
]
`.trim();

export const folderExample = `
import React from 'react';
import FolderApp from 'src/components/folder/FolderApp';

const ExampleApp = () => {
  return (
    <FolderApp
      appId={1234}
    >
    {/* Add folder content here */}
    </FolderApp>
  );
}

export default ExampleApp;
`.trim();

export const loadingLogoExample = `
<div class="loading">
  <img
    src="./your-logo.svg"
    width="200"
    height="200"
    alt="Logo"
  />
</div>
`.trim();

export const notificationExample = `
import React, { useContext } from 'react';
import { 
  useNotificationsContext
} from 'src/contexts/notificationContext';

const ExampleApp = () => {
  const { showSuccess, showWarning } = useNotificationsContext();

  return (
    <button 
      onClick={() => {
        showSuccess(
          'Success Title',
          'Notification success info.'
        );
      }}
    >
      show success
    </button>

    <button 
      onClick={() => {
        showWarning(
          'Warn Title',
          'Notification warn info.',
          400
        );
      }}
    >
      show warn
    </button>
  )
}

export default ExampleApp;
`.trim();

export const folderMenuExample = `
import React, { useRef } from 'react';
import FolderApp from 'src/components/folder/FolderApp';
import folderIcon from 'src/assets/images/icons/folder.svg';
import logo from 'src/assets/images/logo/logo-red.svg';

const toolbarMenu = () => {
  return [
    {
      name: 'My first element',
      widgetIcon: folderIcon, // SVG Icon
      fontIcon: null, // FontAwesome Icon
      link: null, // React router Link
      scrollToRef: 'myFirstElementRef', // Name of a ref element
      onClick: null // If you don't need a Link or ref
                    // pass a function here
    },
    {
      name: 'My second element',
      widgetIcon: logo,
      fontIcon: null,
      link: null,
      scrollToRef: 'mySecondElementRef',
      onClick: null
    },
    {
      name: 'And so on',
      widgetIcon: null,
      fontIcon: ['far', 'comment-alt'],
      link: null,
      scrollToRef: 'andSoOnRef',
      onClick: null
    }
  ];
}

const ExampleApp = () => {
  const myFirstElementRef = useRef(null);
  const mySecondElementRef = useRef(null);
  const andSoOnRef = useRef(null);

  return (
    <FolderApp
      appId={1234}
      toolbarMenu={toolbarMenu()}
      ref={{
        myFirstElementRef,
        mySecondElementRef,
        andSoOnRef
      }}
    >
      {/* Add folder content here */}
      <h2 ref={myFirstElementRef}>My first element</h2>
      <h2 ref={mySecondElementRef}>My second element</h2>
      <h2 ref={andSoOnRef}>And so on</h2>
    </FolderApp>
  )
}

export default ExampleApp;
`.trim();

export const zIndexExample = `
zIndex = {
  Pages: 500, // section id='pages' inside index.html
  Taskbar: 300, // header id='taskbar' inside index.html
  Notification: 200, // div id='modal' inside index.html
  Video: -100, // div id='video' inside index.html
  SpinnerApp: 1000,
  FolderApp: {
    default: 100,
    actived: 104,
    DrawerApp: {
      Menu: 1000,
      Backdrop: 500
    }
  },
  windows: {
    StartMenuApp: 250,
    CartApp: 250,
    LanguageApp: 250,
    CalendarApp: 250,
    NotificationsApp: 250
  },
  mobile: {
    AppsMenu: 250,
    CartApp: 250,
    NotificationsApp: 250
  },
  linux: {
    SideMenuIcon: 150, // The logo
    SideMenuApp: 400 
  }
}
`.trim();

export const folderStructureExample = `
- src/
-- assets
-- contexts
-- hooks
-- services
-- components/
---- animations // Framer motion animations
---- apps // All folder apps are here
---- folder/ // Folder component
------ drawer
------ style
------ toolbar
---- login
---- notification 
---- pages // 401, 404
---- routes // App routes 
---- style // Global styles
---- theme
---- video
---- workspace/ 
------ linux/ // Only for Desktop
-------- contexts
-------- desktop
-------- sideMenu
-------- taskbar
------ mobile/
-------- desktop
-------- taskbar
------ windows/ // Only for Desktop
-------- desktop
-------- taskbar
`.trim();
