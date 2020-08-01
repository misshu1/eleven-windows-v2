import React, { Children, cloneElement, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { useSettingsContext } from '../../contexts/settingsContext';

const ScrollbarWrapper = ({ children }) => {
    return <>{children}</>;
};

const ScrollbarApp = ({ children, requireChildrenProps, ...props }) => {
    // You might be wondering why is this initial state set to 1 instead of 0
    // The folder menu 'DrawerApp' will not work unless you scroll down at least 1px
    const [scrollTop, setScrollTop] = useState(1);
    const { getTheme } = useSettingsContext();

    const handleScroll = (scrollValues, prevScrollState) => {
        // There is a strange bug when content is loaded asynchronously
        // The 'scrollTop' will reset back to 0
        if (scrollValues.scrollTop !== 0 && prevScrollState.scrollTop !== 0) {
            setScrollTop(scrollValues.scrollTop);
        }
    };

    const checkChildren = () => {
        if (requireChildrenProps) {
            const childrenWithProps = Children.map(children, (child) => {
                return cloneElement(child, {
                    scrollTop,
                    setScrollTop,
                });
            });

            return childrenWithProps;
        } else {
            return <ScrollbarWrapper>{children}</ScrollbarWrapper>;
        }
    };

    return (
        <Scrollbar
            style={{ width: '100%', height: '100%' }}
            thumbYProps={{
                style: { background: getTheme().accentBg, cursor: 'default' },
            }}
            thumbXProps={{
                style: { background: getTheme().accentBg, cursor: 'default' },
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
            {...props}
        >
            {checkChildren()}
        </Scrollbar>
    );
};

export default ScrollbarApp;
