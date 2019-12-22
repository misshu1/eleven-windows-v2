import React, { useContext, useState, useEffect, useCallback } from 'react';
import { FolderContext, FOLDER_ACTIONS } from '../../../contexts/folderContext';
import FolderApp from '../../folder/FolderApp';
import WidgetApp from './WidgetApp';
import ButtonApp from './ButtonApp';
import { Container, Table, TableHead } from './style';

const TaskManagerApp = () => {
    const [selectedApp, setSelectedApp] = useState([]);
    const [disableBtn, setDisableBtn] = useState(true);
    const { folderState, folderDispatch } = useContext(FolderContext);

    const timeSince = previous => {
        const msPerMinute = 60000;
        const msPerHour = 3600000;
        const msPerDay = 86400000;
        const msPerMonth = 2592000000;
        const msPerYear = 946080000000;

        const currentDay = new Date().getTime();
        const elapsed = currentDay - new Date(previous).getTime();

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' secodns';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours';
        } else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + ' days';
        } else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ' months';
        } else {
            return Math.round(elapsed / msPerYear) + ' years';
        }
    };

    const closeSelectedApp = useCallback(() => {
        const noneSelected = selectedApp.every(
            item => item.isSelected === false
        );
        if (noneSelected) {
            return;
        }

        const app = selectedApp.filter(item => item.isSelected === true);

        folderDispatch({
            type: FOLDER_ACTIONS.close,
            id: app[0].id
        });
    }, [selectedApp, folderDispatch]);

    const getSelectedApp = id => {
        const findApp = selectedApp.find(
            item => item.id === id && item.isSelected === true
        );

        if (findApp) {
            setDisableBtn(false);
            return findApp.isSelected;
        }
    };

    const handleSelectApp = id => {
        setSelectedApp(
            selectedApp.map(item =>
                item.id === id
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            )
        );
    };

    const createSelectedAppObj = useCallback(() => {
        return folderState.openApps.map(item => {
            setDisableBtn(true);
            return { ...item, isSelected: false };
        });
    }, [folderState.openApps]);

    useEffect(() => {
        setSelectedApp(createSelectedAppObj());
    }, [createSelectedAppObj, folderState.openApps]);

    const showApps = () => {
        const widget = folderState.openApps.map(item => {
            return (
                <WidgetApp
                    key={item.id}
                    appId={item.id}
                    widgetIcon={item.widgetIcon}
                    getSelectedApp={getSelectedApp}
                    handleSelectApp={handleSelectApp}
                    iconDisplayName={item.appName}
                    openTime={item.openSince}
                    timeSince={timeSince}
                />
            );
        });
        return widget;
    };

    return (
        <FolderApp appId={5} marginLeft='7rem' marginTop='7rem'>
            <Container>
                <Table>
                    <TableHead>
                        <div className='app-name'>Name</div>
                        <div className='category'>Open Time</div>
                    </TableHead>
                    {showApps()}
                </Table>
                <ButtonApp
                    closeSelectedApp={closeSelectedApp}
                    disableBtn={disableBtn}
                />
            </Container>
        </FolderApp>
    );
};
export default TaskManagerApp;
