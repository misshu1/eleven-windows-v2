import React, { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { GlobalAppContext } from '../../../contexts/GlobalContext';
import { FolderContext } from '../../../contexts/FolderContext';
import { IndexContext } from '../../../contexts/indexContext';
import { Widget } from './style';

const WidgetApp = memo(props => {
    const {
        linkMobile,
        widgetIcon,
        iconDisplayame,
        appIndexName,
        appMinimize,
        appOpen,
        animationDuration
    } = props;
    const { globalApp } = useContext(GlobalAppContext);
    const { startApp } = useContext(FolderContext);
    const { activeWindow } = useContext(IndexContext);

    return (
        <React.Fragment>
            {globalApp.isMobile ? (
                <Widget>
                    <Link to={linkMobile}>
                        <img
                            src={widgetIcon}
                            alt={iconDisplayame}
                            aria-label={iconDisplayame}
                        />
                        <span>{iconDisplayame}</span>
                    </Link>
                </Widget>
            ) : (
                <Widget
                    animationDuration={animationDuration}
                    onClick={() => {
                        startApp(
                            appOpen,
                            widgetIcon,
                            appIndexName,
                            appMinimize
                        );
                        activeWindow(appIndexName);
                    }}
                >
                    <img
                        src={widgetIcon}
                        alt={iconDisplayame}
                        aria-label={iconDisplayame}
                    />
                    <span>{iconDisplayame}</span>
                </Widget>
            )}
        </React.Fragment>
    );
});

export default WidgetApp;
