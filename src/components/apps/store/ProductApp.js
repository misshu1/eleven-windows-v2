import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';

import { useSettingsContext } from '../../../contexts/settingsContext';
import DetailsApp from './components/details/DetailsApp';
import DownloadApp from './components/download/DownloadApp';
import ReviewsApp from './components/reviews/ReviewsApp';
import { Card } from './style';

const BadgeIcon = (props) => {
    const { classes, badgeNumber } = props;
    return (
        <Badge
            className={classes.badge}
            badgeContent={badgeNumber}
            color='error'
            showZero={false}
        ></Badge>
    );
};

const useStyles = makeStyles({
    tabIndicator: (theme) => ({
        backgroundColor: theme.material.primary.main,
        height: '3px',
        maxWidth: 'inherit',
    }),
    tabs: {
        cursor: 'default',
        minHeight: '3rem',
        padding: '0 0.5rem',
    },
    tabIcon: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    root: (theme) => ({
        minHeight: '3rem',
        background: theme.tabsBg,
    }),
    cartButton: (theme) => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker,
        },
    }),
    ratingColor: (theme) => ({
        color: theme.ratingColorEmpty,
    }),
    badge: {
        margin: '0 1rem !important',
    },
});

const ProductApp = (props) => {
    const { product } = props;
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const [tab, setTab] = useState(0);

    const handleTabsChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Card>
            <Tabs
                classes={{
                    indicator: classes.tabIndicator,
                    root: classes.root,
                }}
                value={tab}
                onChange={handleTabsChange}
                variant='fullWidth'
            >
                <Tab
                    label={tab !== 0 ? product.title : 'Details'}
                    className={classes.tabs}
                />
                <Tab
                    classes={{ wrapper: classes.tabIcon }}
                    label='Reviews'
                    className={classes.tabs}
                    icon={
                        <BadgeIcon
                            classes={classes}
                            theme={theme}
                            badgeNumber={product.reviews.length}
                        />
                    }
                />
                <Tab label='Download' className={classes.tabs} />
            </Tabs>
            {tab === 0 && (
                <DetailsApp
                    title={product.title}
                    image={product.image}
                    content={product.description}
                    price={product.price}
                    discount={product.discount}
                />
            )}
            {tab === 1 && <ReviewsApp reviews={product.reviews} />}
            {tab === 2 && <DownloadApp />}
        </Card>
    );
};

export default ProductApp;
