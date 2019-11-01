import React, { useContext } from 'react';
import { Container, Title, ThemesImg, Box } from './style';
import { FolderContext } from '../../../contexts/FolderContext';
import { ThemeContext } from '../../../contexts/themeContext';
import { IndexContext } from '../../../contexts/indexContext';
import Resize from './Resize';
import FolderApp from '../../folder/FolderApp';
import darkImg from '../../../assets/images/apps/settings/dark-preview.jpg';
import lightImg from '../../../assets/images/apps/settings/light-preview.jpg';

import Language from './Language';
const SettingsApp = () => {
    const { folder } = useContext(FolderContext);
    const { index } = useContext(IndexContext);
    const { changeTheme } = useContext(ThemeContext);
    return (
        <FolderApp
            appMinimize={'settingsMinimize'}
            appOpen={'settingsOpen'}
            appIndexName='settings'
            appIndexValue={index.settings}
            folderName='Settings'
            marginLeft='6rem'
            marginTop='6rem'
            linkMobile='settings'
            open={folder.settingsOpen}
        >
            <Container>
                <Title>Themes</Title>
                <Box>
                    <ThemesImg
                        src={darkImg}
                        onClick={() => changeTheme('dark')}
                        alt='dark theme'
                        loading='lazy'
                        draggable='false'
                    />
                    <ThemesImg
                        src={lightImg}
                        onClick={() => changeTheme('light')}
                        alt='light theme'
                        loading='lazy'
                        draggable='false'
                    />
                </Box>
                <Language />
                <Title>Background</Title>

                <Resize />
                <Title>Notifications</Title>
            </Container>
        </FolderApp>
    );
};
export default SettingsApp;
