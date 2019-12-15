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
import React, { lazy, Suspense } from 'react';
const ExampleApp  = lazy(() => import('../apps/example/ExampleApp '));

const COMPONENTS = [
  {
      /* This id should be identical
      with the id from appIconsContext.js */
      id: 1234,
      component: <ExampleApp />
  }
]
`.trim();
