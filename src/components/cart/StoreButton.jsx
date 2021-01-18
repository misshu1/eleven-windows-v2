import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { StoreIcon } from 'assets/images/icons';
import { useDispatchFolderContext, useFolderContext } from 'contexts';
import { useMediaQuery } from 'hooks';
import { ICON_LOCATION } from 'components/common';
import { PrimaryButton } from 'components/common/Buttons';

const StoreButton = ({ onClick }) => {
    const { openFolder, activeFolder, minimizeUp } = useDispatchFolderContext();
    const { checkUserPermisions, folderState } = useFolderContext();
    const apps = useRef(folderState.apps);
    const isMobile = useMediaQuery('(max-width: 450px)');
    const navigate = useNavigate();

    const openApp = (appId) => {
        openFolder(appId);
        activeFolder(appId);
        minimizeUp(appId);
        onClick && onClick();
    };

    const handleClick = (app) => {
        if (isMobile) {
            navigate(app.link);
            onClick();
        } else {
            onClick && openApp(app.id);
        }
    };

    return (
        <>
            {apps.current.map((app) => {
                return app.iconLocation.map(
                    (location) =>
                        location === ICON_LOCATION.cart.cartApp &&
                        checkUserPermisions(app) && (
                            <PrimaryButton
                                key={app.id}
                                aria-label={`go to ${app.appName}`}
                                onClick={() => handleClick(app)}
                                svgIcon={
                                    <StoreIcon width='1.5rem' height='1.5rem' />
                                }
                            >
                                Go to {app.appName}
                            </PrimaryButton>
                        )
                );
            })}
        </>
    );
};

export default StoreButton;
