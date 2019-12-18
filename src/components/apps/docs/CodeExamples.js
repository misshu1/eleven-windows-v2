export const folderContextState = `
const [folder, setFolder] = useState({
  exampleOpen: isMobile ? 'open' : 'close',
  exampleMinimize: null
});
`.trim();

export const indexContextState = `
const [index, setIndex] = useState({
  example: 100
});
`.trim();

export const folderExample = `
import React, { useContext } from 'react';
// Make sure the import paths are correct
import { IndexContext } from 'src/contexts/indexContext';
import FolderApp from 'src/folder/FolderApp';

const ExampleApp = () => {
  const { index } = useContext(IndexContext);

  return (
    <FolderApp
      appMinimize={'exampleMinimize'}
      appOpen={'exampleOpen'}
      appIndexName='example'
      appIndexValue={index.example}
      folderName='Example folder name'
    >
    {/* Add folder content here */}
    </FolderApp>
  );
}

export default ExampleApp;
`.trim();

export const iconsExample = `
{
  id: 1234,
  iconDisplayName: 'Example icon name',
  widgetIcon: exampleIcon,
  linkMobile: '/exampleLink',
  appIndexName: 'example',
  appMinimize: 'exampleMinimize',
  appOpen: 'exampleOpen',
  // Choose icon location here
  iconLocation: [
    ICON_LOCATION.desktop,
    ICON_LOCATION.notificationsWindow,
    ICON_LOCATION.startMenuLeft
  ]
}
`.trim();

export const folderRouteExample = `
import React, { lazy } from 'react';
const ExampleApp  = lazy(() => import('../apps/example/ExampleApp '));

const COMPONENTS = [
  {
    /* The id should be identical
    with the id from appIconsContext.js */
    id: 1234,
    component: <ExampleApp />
  }
]
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
import React, { useRef } from 'react';
import { IndexContext } from 'src/contexts/indexContext';
import FolderApp from 'src/folder/FolderApp';
import folderIcon from 'src/assets/images/icons/folder.svg';
import logo from 'src/assets/images/logo/logo-red.svg';

const ExampleApp = () => {
  const { index } = useContext(IndexContext);
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
      appMinimize={'exampleMinimize'}
      appOpen={'exampleOpen'}
      appIndexName='example'
      appIndexValue={index.example}
      folderName='Example folder name'
      toolbarMenu={toolbarMenu()}
      ref={{
        createFolderRef,
        changeLoadingLogoRef,
        createNotificationsRef
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
