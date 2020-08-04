import 'pure-react-carousel/dist/react-carousel.es.css';

import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { CarouselContext, Dot, Image, Slide, Slider } from 'pure-react-carousel';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { useSettingsContext } from '../../../../../contexts/settingsContext';
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
        padding: 0,
        minWidth: 0,
        width: '3rem',
        height: '3rem',
        backgroundSize: 'cover !important',
        backgroundPosition: 'center center !important',
        margin: '0.5rem',
        cursor: 'default',
    },
    selectedThumbnail: (theme) => ({
        boxShadow: `0px 0px 4px 2px ${theme().accentBg}`,
    }),
    indicator: {
        display: 'none',
    },
});

const CarouselApp = ({ images }) => {
    const { getTheme } = useSettingsContext();
    const classes = useStyles(getTheme);
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(
        carouselContext.state.currentSlide
    );
    const isTablet = useMediaQuery('(max-width: 800px)');

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
                            style={{ background: `url(${url})` }}
                        />
                    ))}
                </Tabs>
            )}
        </Container>
    );
};

export default CarouselApp;
