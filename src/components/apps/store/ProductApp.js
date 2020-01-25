import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from './style';
import DownloadApp from './components/download/DownloadApp';
import ReviewsApp from './components/reviews/ReviewsApp';
import DetailsApp from './components/details/DetailsApp';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    tabIndicator: theme => ({
        backgroundColor: theme.material.primary.main,
        height: '3px',
        maxWidth: 'inherit'
    }),
    tabs: {
        cursor: 'default',
        minWidth: 'fit-content',
        minHeight: '3rem',
        padding: 0
    },
    root: theme => ({
        minHeight: '3rem',
        background: theme.tabsBg
    }),
    cartButton: theme => ({
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: theme.material.primary.main,
        color: theme.material.primary.contrast.darker,

        '&:hover': {
            backgroundColor: theme.material.primary.darker
        }
    }),
    ratingColor: theme => ({
        color: theme.ratingColorEmpty
    })
});
const ProductApp = props => {
    const { product } = props;
    const { theme } = useContext(ThemeContext);
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
                    root: classes.root
                }}
                value={tab}
                onChange={handleTabsChange}
                variant='fullWidth'
            >
                <Tab label='Details' className={classes.tabs} />
                <Tab label='Reviews' className={classes.tabs} />
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
