import { CategoriesPreview } from './CatergoriesPreview';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CategoriesList = ({ categories }) => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        useTransform: false,
        adaptiveHeight: true
    };
    return (
        <section className="category-list">
            <div className="header">
                <h1> Categories</h1>
            </div>
            <Slider className="category-list-slider" {...settings}>
                {categories && categories.map(category =>
                    <CategoriesPreview key={category.id} category={category} />)}
            </Slider>
        </section>
    );
};
