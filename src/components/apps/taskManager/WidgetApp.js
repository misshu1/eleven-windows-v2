import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Widget, TableRow } from './style';

const WidgetApp = props => {
    const [openSince, setOpenSince] = useState();
    const {
        appId,
        widgetIcon,
        iconDisplayName,
        handleSelectApp,
        getSelectedApp,
        openTime,
        timeSince
    } = props;
    const selected = getSelectedApp(appId);

    useEffect(() => {
        const time = setTimeout(() => {
            setOpenSince(timeSince(openTime));
        }, 1000);

        return () => {
            clearInterval(time);
        };
    }, [openSince, setOpenSince, openTime, timeSince]);

    return (
        <TableRow
            tabIndex='0'
            onClick={() => handleSelectApp(appId)}
            selectedApp={selected}
        >
            <Widget className='app-name'>
                {widgetIcon}
                <span>{iconDisplayName}</span>
            </Widget>
            <div className='stats'>{openSince}</div>
        </TableRow>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    appId: PropTypes.number.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconDisplayName: PropTypes.string.isRequired,
    handleSelectApp: PropTypes.func.isRequired,
    openTime: PropTypes.number.isRequired,
    timeSince: PropTypes.func.isRequired,
    getSelectedApp: PropTypes.func.isRequired
};
