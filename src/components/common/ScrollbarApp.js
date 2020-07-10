import React, { Children, cloneElement, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';

import { useSettingsContext } from '../../contexts/settingsContext';

const ScrollbarWrapper = ({ children }) => {
    return <>{children}</>;
};

const ScrollbarApp = ({ children, requireChildrenProps }) => {
    const [scrollTop, setScrollTop] = useState(1);
    const { theme } = useSettingsContext();

    const handleScroll = (scrollValues, prevScrollState) => {
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
            {checkChildren()}
        </Scrollbar>
    );
};

export default ScrollbarApp;
