import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import FolderApp from '../../components/folder/FolderApp';
import { IndexContext } from '../../contexts/indexContext';
import { FolderContext } from '../../contexts/FolderContext';
import { GlobalAppContext } from '../../contexts/GlobalContext';

const RoutesApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { globalApp } = useContext(GlobalAppContext);
    return (
        <React.Fragment>
            <Route
                exact
                path={globalApp.isMobile ? '/settings' : '/'}
                render={() =>
                    folder.settingsOpen === 'open' && (
                        <FolderApp
                            appMinimize={'settingsMinimize'}
                            appOpen={'settingsOpen'}
                            appIndexName='settings'
                            appIndexValue={index.settings}
                            folderName='Settings'
                            width='20rem'
                            linkMobile='settings'
                            open={folder.settingsOpen}
                        >
                            lasdorasdeasdasasd
                        </FolderApp>
                    )
                }
            />
        </React.Fragment>
    );
};

export default RoutesApp;
