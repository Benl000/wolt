import { CategoriesPreview } from './CatergoriesPreview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CategoriesList = ({ categories }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 0,
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
