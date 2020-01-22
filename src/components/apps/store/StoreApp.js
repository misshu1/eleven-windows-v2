import React, { useState, useContext } from 'react';
import { Card, ReviewsContainer } from './style';
import { ThemeContext } from '../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import Scrollbar from 'react-scrollbars-custom';
import FolderApp from '../../folder/FolderApp';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CommentApp from './CommentApp';
import DetailsApp from './DetailsApp';

const useStyles = makeStyles({
    tabIndicator: theme => ({
        backgroundColor: theme.material.primary.main
    }),
    tabs: {
        cursor: 'default',
        minWidth: 'fit-content',
        minHeight: '3rem'
    },
    root: {
        minHeight: '3rem'
    },
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

const StoreApp = () => {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);
    const [tab, setTab] = useState(0);

    const handleTabsChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <FolderApp appId={4} marginLeft='4rem' marginTop='4rem'>
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
                        title='Eleven Windows'
                        image='https://via.placeholder.com/240'
                        content='asdasd asd as das'
                        price={49.99}
                        discount={24.99}
                    />
                )}
                {tab === 1 && (
                    <ReviewsContainer>
                        <Scrollbar
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <CommentApp
                                username='Arnold Shisad'
                                rating={4}
                                date='Wed Jan 22 2020 16:36:50 GMT+0200 (Eastern European Standard Time)'
                                content='something here'
                            />
                        </Scrollbar>
                    </ReviewsContainer>
                )}
                {tab === 2 && 'asdas dsadas'}
            </Card>
        </FolderApp>
    );
};
export default StoreApp;
