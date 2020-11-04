import PropTypes from 'prop-types';
import React from 'react';

import { useTimeSince } from 'hooks';
import { TableRow, Widget } from './style';

const WidgetApp = (props) => {
    const {
        appId,
        widgetIcon,
        iconDisplayName,
        handleSelectApp,
        getSelectedApp,
        openTime
    } = props;
    const selected = getSelectedApp(appId);
    const timeSince = useTimeSince(openTime);

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
            <div className='stats'>{timeSince}</div>
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
    getSelectedApp: PropTypes.func.isRequired
};
