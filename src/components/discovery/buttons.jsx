import React from 'react';
import { ReactComponent as NextArrowSvg } from '../../assets/svgs/discovery/HeroCarousel/carouselNextArrow.svg';
import { ReactComponent as PrevArrowSvg } from '../../assets/svgs/discovery/HeroCarousel/carouselPrevArrow.svg';

export const CarouselNavButtons = ({ preSlide, nextButton }) => {

    return (
        <section className="carouselNavButtons">
            <button className="PreButton" onClick={preSlide}>
                <PrevArrowSvg />
            </button>
            <button className="NextButton" onClick={nextButton}>
                <NextArrowSvg />
            </button>
        </section>
    );
};

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block" }}
        >
            <button
                className="heroNavButtons"
                onClick={onClick}>
                <NextArrowSvg />
            </button>
        </div>
    );
};

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block" }}
        >
            <button
                className="heroNavButtons"
                onClick={onClick}>
                <PrevArrowSvg />
            </button>
        </div>
    );
};
