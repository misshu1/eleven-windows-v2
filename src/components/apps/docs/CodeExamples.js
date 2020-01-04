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
    isOpen: isMobile ? 'open' : 'close',
    isMinimize: null,
    appIndex: 100,
    iconLocation: [
      ICON_LOCATION.desktop,
      ICON_LOCATION.notificationsWindow,
      ICON_LOCATION.startMenuLeft
    ]
  }
]
`.trim();

export const folderExample = `
import React from 'react';
// Make sure the import paths are correct
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
import { NotificationContext } from 'src/contexts/notificationContext';

const ExampleApp = () => {
  const { 
    createNotificationSuccess, 
    createNotificationWarn, 
    createNotificationError 
  } = useContext(NotificationContext);

  return (
    <button 
      onClick={() => {
        createNotificationSuccess(
          'Success Title',
          'Notification success info.'
        );
      }}
    >
      show success
    </button>

    <button 
      onClick={() => {
        createNotificationWarn(
          'Warn Title',
          'Notification warn info.',
          400
        );
      }}
    >
      show warn
    </button>

    <button                         
      onClick={() => {
        createNotificationError(
          'Error Title',
          'Notification error info.',
          503
        );
      }}
    >
      show error
    </button>
  )
}

export default ExampleApp;
`.trim();

export const folderMenuExample = `
import React, { useRef, useCallback } from 'react';
import FolderApp from 'src/components/folder/FolderApp';
import folderIcon from 'src/assets/images/icons/folder.svg';
import logo from 'src/assets/images/logo/logo-red.svg';

const ExampleApp = () => {
  const myFirstElementRef = useRef(null);
  const mySecondElementRef = useRef(null);
  const andSoOnRef = useRef(null);

  const toolbarMenu = useCallback(() => {
    return [
      {
        name: 'My first element',
        widgetIcon: folderIcon,
        // FontAwesome icon
        fontIcon: null,
        // React router Link
        link: null,
        // Name of a ref element
        scrollToRef: 'myFirstElementRef',
        // If you don't need a Link or ref, pass a function here
        onClick: null
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
  }, []);

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
