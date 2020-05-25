import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import CartIcon from '../../../../../assets/images/icons/CartIcon';
import { useSettingsContext } from '../../../../../contexts/settingsContext';
import { DetailsContainer } from './style';

const useStyles = makeStyles({
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
});

const DetailsApp = (props) => {
    const { theme } = useSettingsContext();
    const classes = useStyles(theme);
    const { title, image, content, price, discount } = props;

    return (
        <DetailsContainer>
            <img src={image} alt={title} />
            <div className='card-content'>
                <Typography variant='h5' component='h2' className='title'>
                    {title}
                </Typography>
                <Typography variant='subtitle2' component='h2'>
                    {content}
                </Typography>
            </div>

            <div className='buttons'>
                <span className='price-container'>
                    <span className='full-price'>
                        <Typography variant='h5' component='h2'>
                            <span className='currency'>$</span>
                            {price}
                        </Typography>
                    </span>

                    <span className='price'>
                        <Typography variant='h4' component='h2'>
                            <span className='currency'>$</span>
                            {discount}
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
    );
};

export default DetailsApp;
