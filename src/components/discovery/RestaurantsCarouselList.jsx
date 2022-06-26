import { RestaurantsCarouselPreview } from './RestaurantsCarouselPreview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import { useState } from 'react';
import { CarouselNavButtons } from './buttons';

export const RestaurantsCarouselList = ({ restaurants }) => {

    const customeSlider = React.createRef();

    const gotoNext = () => {
        customeSlider.current.slickNext();
    };

    const gotoPrev = () => {
        customeSlider.current.slickPrev();
    };

    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    return (
        <section className="restaurant-list">
            <div className="restaurant-list-header">
                <h1>Restaurants</h1>
                <CarouselNavButtons preSlide={() => gotoPrev()} nextButton={() => gotoNext()} />
            </div>
            <Slider className="restaurant-list-slider"  {...sliderSettings} ref={customeSlider}>
                {restaurants && restaurants.map(restaurant =>
                    <RestaurantsCarouselPreview key={restaurant.results[0].id} restaurant={restaurant} />)}
            </Slider>
        </section>
    );
};