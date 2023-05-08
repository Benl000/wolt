import { useRef } from "react";
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import { CategoriesPreview } from './CatergoriesPreview';
import { CarouselNavButtons } from './Buttons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    swipeToSlide: true,
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
};

export const CategoriesList = ({ restaurants }) => {

    const categories = useSelector((state) => state.restaurantModule.categories.slice(0, 10));

    const customeSlider = useRef();

    const goToNext = () => {
        customeSlider.current.slickNext();
    };

    const goToPrev = () => {
        customeSlider.current.slickPrev();
    };

    return (
        <section className="category-list">
            <div className="category-list-header">
                <h1> Categories</h1>
                <CarouselNavButtons preSlide={goToPrev} nextButton={goToNext} />
            </div>
            <Slider className="category-list-slider" {...sliderSettings} ref={customeSlider}>
                {categories.map(category =>
                    <CategoriesPreview key={category.id} category={category} restaurants={restaurants} />)}
            </Slider>
        </section>
    );
};
