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

export const desktopIconExample = `
// Upload an image for your Icon
import exampleIcon from '.../your/icon_path.svg'

const [icons] = useState([
  {
    iconDisplayName: 'Example icon name',
    widgetIcon: exampleIcon,
    linkMobile: '/exampleLink',
    appIndexName: 'example',
    appMinimize: 'exampleMinimize',
    appOpen: 'exampleOpen'
  }
]);
`.trim();

export const notificationIconExample = `
// Upload an image for your Icon
import exampleIcon from '.../your/icon_path.svg'

const [widget] = useState([
  {
    iconDisplayName: 'Example icon name',
    useWidgetIcon: true,
    widgetIcon: exampleIcon,
    fontIcon: ['fas', 'cog'],
    appIndexName: 'example',
    appMinimize: 'exampleMinimize',
    appOpen: 'exampleOpen'
  }
]);
`.trim();
