import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselContext, Dot, Slide, Slider } from 'pure-react-carousel';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import useMediaQuery from '../../../../../hooks/useMediaQuery';
import { Container, Image, Thumbnail } from './style';

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
            <Slider>
                {images.map((url, index) => (
                    <Slide key={index} index={index}>
                        <Image url={url} />
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
            {!isTablet && (
                <div className='thumbnail-container'>
                    {images.map((url, index) => (
                        <Dot
                            key={index}
                            slide={index}
                            className={`thumbnail ${
                                index === currentSlide && 'thumbnail-selected'
                            }`}
                        >
                            <Thumbnail
                                url={url}
                                onMouseEnter={() => changeSlide(index)}
                            />
                        </Dot>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default CarouselApp;
