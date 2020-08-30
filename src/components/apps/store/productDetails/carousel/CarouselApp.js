import 'pure-react-carousel/dist/react-carousel.es.css';

import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { CarouselContext, Dot, Image, Slide, Slider } from 'pure-react-carousel';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useMediaQuery from '../../../../../hooks/useMediaQuery';
import SpinnerApp from '../../../../common/SpinnerApp';
import { Container } from './style';

const useStyles = makeStyles({
    thumbnailsContainer: {
        width: '100%',
        marginTop: '1rem',
    },
    scroller: {
        display: 'flex',
    },
    flexContainer: { margin: '0 auto' },
    thumbnail: {
        height: '3rem',
        width: '3rem',
        minHeight: 0,
        minWidth: 0,
        padding: 0,
        margin: '0.5rem',
        cursor: 'default',
        backgroundColor: 'var(--backgroundActive)',
        backgroundPosition: 'center center !important',
        backgroundSize: 'cover !important',
    },
    selectedThumbnail: {
        boxShadow: `0px 0px 4px 2px var(--primary)`,
    },
    indicator: {
        display: 'none',
    },
});

const CarouselApp = ({ images }) => {
    const classes = useStyles();
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(
        carouselContext.state.currentSlide
    );
    const isTablet = useMediaQuery('(max-width: 800px)');
    const { t } = useTranslation();

    const changeSlide = useCallback(
        (slideValue) => {
            carouselContext.setStoreState({
                currentSlide: slideValue,
            });
        },
        [carouselContext]
    );

    useEffect(() => {
        function onChange() {
            setCurrentSlide(carouselContext.state.currentSlide);
        }

        carouselContext.subscribe(onChange);

        return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);

    return (
        <Container>
            <Slider spinner={() => <SpinnerApp style={{ color: 'inherit' }} />}>
                {images.map((url, index) => (
                    <Slide key={index} index={index}>
                        <Image
                            src={url}
                            hasMasterSpinner
                            isBgImage
                            tag='div'
                            className='slide-image'
                        />
                        {url === 'none' && (
                            <p className='no-images'>
                                {t('store.noImagesFound')}
                            </p>
                        )}
                    </Slide>
                ))}
            </Slider>
            {isTablet && (
                <div className='dots-container'>
                    {images.map((_, index) => (
                        <Dot
                            key={index}
                            slide={index}
                            className={`custom-dot ${
                                index === currentSlide && 'custom-dot-selected'
                            }`}
                        />
                    ))}
                </div>
            )}
            {!isTablet && images.length !== 0 && (
                <Tabs
                    value={currentSlide}
                    variant='scrollable'
                    scrollButtons='on'
                    classes={{
                        root: classes.thumbnailsContainer,
                        indicator: classes.indicator,
                        scroller: classes.scroller,
                        flexContainer: classes.flexContainer,
                    }}
                >
                    {images.map((url, index) => (
                        <Tab
                            key={index}
                            value={index}
                            disableRipple
                            onMouseEnter={() => changeSlide(index)}
                            classes={{
                                root: classes.thumbnail,
                                selected: classes.selectedThumbnail,
                            }}
                            style={{ backgroundImage: `url(${url})` }}
                        />
                    ))}
                </Tabs>
            )}
        </Container>
    );
};

export default CarouselApp;
