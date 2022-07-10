import { CategoriesPreview } from './CatergoriesPreview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import { useState } from 'react';
import { CarouselNavButtons } from './Buttons';

export const CategoriesList = ({ categories, restaurants }) => {

    const customeSlider = React.createRef();

    const goToNext = () => {
        customeSlider.current.slickNext();
    };

    const goToPrev = () => {
        customeSlider.current.slickPrev();
    };

    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    return (
        <section className="category-list">
            <div className="category-list-header">
                <h1> Categories</h1>
                <CarouselNavButtons preSlide={() => goToPrev()} nextButton={() => goToNext()} />
            </div>
            <Slider className="category-list-slider" {...sliderSettings} ref={customeSlider}>
                {categories && categories.map(category =>
                    <CategoriesPreview key={category.id} category={category} restaurants={restaurants} />)}
            </Slider>
        </section>
    );
};
