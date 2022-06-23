import { RestaurantsCarouselPreview } from './RestaurantsCarouselPreview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const RestaurantsCarouselList = ({ restaurants }) => {
    var settings = {
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
    };
    return (
        <section className="restaurant-list">
            <div className="restaurant-list-header">
                <h1>Restaurants</h1>
            </div>
            <Slider className="restaurant-list-slider" {...settings}>
                {restaurants && restaurants.map(restaurant =>
                    <RestaurantsCarouselPreview key={restaurant.id} restaurant={restaurant} />)}
            </Slider>
        </section>
    );
};