import React from 'react';
import { Widget, Table } from './style';

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
        <Table
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
        </Table>
    );
};

export default WidgetApp;
