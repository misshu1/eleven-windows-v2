import React, { useRef, useCallback, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';

import { Container } from './style';
import {
    useFolderContext,
    ICON_LOCATION,
} from '../../../../../contexts/folderContext';
import MenuAppIcon from './MenuAppIcon';
import { useSideMenuContext } from '../../../contexts/sideMenuContext';

const AppsPreview = () => {
    const { folderState, sortByAppName } = useFolderContext();
    const { sideMenuState } = useSideMenuContext();
    const apps = useRef(folderState.apps.sort(sortByAppName));

    const menuIcons = useCallback(() => {
        return apps.current.map((app) => {
            return app.iconLocation.map(
                (location) =>
                    location === ICON_LOCATION.linuxMenu && (
                        <MenuAppIcon
                            key={app.id}
                            appId={app.id}
                            iconName={app.appName}
                            link={app.link}
                            widgetIcon={app.widgetIcon}
                        />
                    )
            );
        });
    }, []);

    const menuName = useMemo(() => {
        return sideMenuState.map((app) => app.id === 1 && app.name);
    }, [sideMenuState]);

    return (
        <>
            <Container>
                {' '}
                <Typography variant='h5' component='h2' className='title'>
                    {menuName}
                </Typography>
                {menuIcons()}
            </Container>
        </>
    );
};

export default AppsPreview;
