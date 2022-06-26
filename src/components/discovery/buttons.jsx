import React from 'react';
import { ReactComponent as NextArrow } from '../../assets/svgs/discovery/HeroCarousel/carouselNextArrow.svg';
import { ReactComponent as PreArrow } from '../../assets/svgs/discovery/HeroCarousel/carouselPrevArrow.svg';

export const CarouselNavButtons = ({ preSlide, nextButton }) => {

    return (
        <section className="carouselNavButtons">
            <button className="PreButton" onClick={preSlide}>
                <PreArrow />
            </button>
            <button className="NextButton" onClick={nextButton}>
                <NextArrow />
            </button>
        </section>
    );
};
