import Slider from "react-slick";
import { useRef } from "react";

import { RestaurantsCarouselPreview } from './RestaurantsCarouselPreview';
import { CarouselNavButtons } from './Buttons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
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
};

export const RestaurantsCarouselList = ({ restaurants }) => {

    const customeSlider = useRef();

    const gotoNext = () => {
        customeSlider.current.slickNext();
    };

    const gotoPrev = () => {
        customeSlider.current.slickPrev();
    };
    
    return (
        <section className="restaurant-list">
            <div className="restaurant-list-header">
                <h1>Restaurants</h1>
                <CarouselNavButtons preSlide={gotoPrev} nextButton={gotoNext} />
            </div>
            <Slider className="restaurant-list-slider"  {...sliderSettings} ref={customeSlider}>
                {restaurants && restaurants.map(restaurant =>
                    <RestaurantsCarouselPreview key={restaurant._id} restaurant={restaurant} />)}
            </Slider>
        </section>
    );
};