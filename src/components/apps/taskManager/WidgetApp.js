import React from 'react';
import PropTypes from 'prop-types';
import { Widget, TableRow } from './style';

const WidgetApp = props => {
    const {
        app,
        widgetIcon,
        iconDisplayName,
        handleSelectApp,
        getSelectedAppName
    } = props;

    const selected = getSelectedAppName(app);

    return (
        <TableRow
            tabIndex='0'
            onClick={() => handleSelectApp(app)}
            selectedApp={selected}
        >
            <Widget className='app-name'>
                <img
                    src={widgetIcon}
                    alt={iconDisplayName}
                    aria-label={iconDisplayName}
                    draggable='false'
                />
                <span>{iconDisplayName}</span>
            </Widget>
            <div className='stats'>1 MB</div>
            <div className='stats'>2 MB</div>
            <div className='stats'>3 MB</div>
        </TableRow>
    );
};

export default WidgetApp;

WidgetApp.propTypes = {
    app: PropTypes.string.isRequired,
    widgetIcon: PropTypes.node.isRequired,
    iconDisplayName: PropTypes.string.isRequired,
    handleSelectApp: PropTypes.func.isRequired,
    getSelectedAppName: PropTypes.func.isRequired
};
