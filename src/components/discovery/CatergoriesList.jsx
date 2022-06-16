import { CategoriesPreview } from './CatergoriesPreview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CategoriesList = ({ categories }) => {
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        swipeToSlide: true,
        arrows: true,
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
    return (
        <section className="category-list">
            <div className="category-list-header">
                <h1> Categories</h1>
            </div>
            <Slider className="category-list-slider" {...settings}>
                {categories && categories.map(category =>
                    <CategoriesPreview key={category.id} category={category} />)}
            </Slider>
        </section>
    );
};
