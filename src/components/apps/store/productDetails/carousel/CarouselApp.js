import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselContext, Dot, Image, Slide, Slider } from 'pure-react-carousel';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import useMediaQuery from '../../../../../hooks/useMediaQuery';
import ScrollbarApp from '../../../../common/ScrollbarApp';
import SpinnerApp from '../../../../common/SpinnerApp';
import { Container } from './style';

const CarouselApp = ({ images }) => {
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
                <ScrollbarApp
                    style={{ width: '100%', height: '6rem' }}
                    contentProps={{
                        style: {
                            padding: 0,
                            width: 'fit-content',
                        },
                    }}
                >
                    <div className='thumbnail-container'>
                        {images.map((url, index) => (
                            <Dot
                                key={index}
                                slide={index}
                                className={`thumbnail ${
                                    index === currentSlide &&
                                    'thumbnail-selected'
                                }`}
                                onMouseEnter={() => changeSlide(index)}
                            >
                                <Image
                                    src={url}
                                    hasMasterSpinner
                                    isBgImage
                                    tag='div'
                                    className='thumbnail-img'
                                />
                            </Dot>
                        ))}
                    </div>
                </ScrollbarApp>
            )}
        </Container>
    );
};

export default CarouselApp;
