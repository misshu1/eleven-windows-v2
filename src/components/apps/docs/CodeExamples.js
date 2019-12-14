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
