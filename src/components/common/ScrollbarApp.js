import React, { Children, cloneElement, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { useSettingsContext } from '../../contexts/settingsContext';

const ScrollbarWrapper = ({ children }) => {
    return children;
};

const ScrollbarApp = ({ children, requireChildrenProps }) => {
    const [scrollTop, setScrollTop] = useState(null);
    const { theme } = useSettingsContext();

    const childrenWithProps = Children.map(children, (child) => {
        return cloneElement(child, {
            scrollTop,
            setScrollTop,
        });
    });

    const handleScroll = (scrollValues, prevScrollState) => {
        if (scrollValues.scrollTop !== 0 && prevScrollState.scrollTop !== 0) {
            setScrollTop(scrollValues.scrollTop);
        }
    };

    return (
        <Scrollbar
            style={{ width: '100%', height: '100%' }}
            thumbYProps={{
                style: { background: theme.accentBg, cursor: 'default' },
            }}
            thumbXProps={{
                style: { background: theme.accentBg, cursor: 'default' },
            }}
            trackYProps={{
                style: {
                    width: '5px',
                },
            }}
            trackXProps={{
                style: {
                    height: '5px',
                },
            }}
            contentProps={{
                style: {
                    position: 'relative',
                    padding: 0,
                },
            }}
            onScroll={handleScroll}
            scrollTop={scrollTop}
        >
            {!requireChildrenProps && (
                <ScrollbarWrapper>{children}</ScrollbarWrapper>
            )}
            {requireChildrenProps && childrenWithProps}
        </Scrollbar>
    );
};

export default ScrollbarApp;
