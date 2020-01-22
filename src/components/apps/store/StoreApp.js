import React, { useState, useContext } from 'react';
import { DetailsContainer, Card } from './style';
import { ThemeContext } from '../../../contexts/themeContext';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FolderApp from '../../folder/FolderApp';
import PropTypes from 'prop-types';
import CartIcon from '../../../assets/images/icons/CartIcon';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
    const { children, tabValue, index, ...rest } = props;

    return tabValue === index && children;
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    tabValue: PropTypes.any.isRequired
};

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
                <TabPanel tabValue={tab} index={0}>
                    <DetailsContainer>
                        <img src='https://via.placeholder.com/240' alt='img' />
                        <div className='card-content'>
                            <Typography variant='h5' component='h2'>
                                Eleven Windows
                            </Typography>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel facere quo quisquam quod
                                ratione, placeat a inventore iusto magnam minus!
                            </p>
                        </div>

                        <div className='buttons'>
                            <span className='price-container'>
                                <span className='full-price'>
                                    <Typography variant='h5' component='h2'>
                                        <span className='currency'>$</span>
                                        49.99
                                    </Typography>
                                </span>

                                <span className='price'>
                                    <Typography variant='h4' component='h2'>
                                        <span className='currency'>$</span>
                                        24.99
                                    </Typography>
                                </span>
                            </span>
                            <Button className={classes.cartButton}>
                                <div className='svg-bg'>
                                    <CartIcon width='1.5rem' height='1.5rem' />
                                </div>
                                Add to cart
                            </Button>
                        </div>
                    </DetailsContainer>
                </TabPanel>
                <TabPanel tabValue={tab} index={1}>
                    lorem500
                </TabPanel>
                <TabPanel tabValue={tab} index={2}>
                    Item Three
                </TabPanel>
            </Card>
        </FolderApp>
    );
};
export default StoreApp;
