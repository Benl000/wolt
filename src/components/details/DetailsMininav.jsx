import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, animateScroll as scroll } from 'react-scroll';


export const DetailsMininav = ({ restaurant, menu }) => {

    var settings = {
        dots: false,
        autoplay: false,
        swipeToSlide: true,
        // draggable: true,
        variableWidth: true,
        infinite: false,
        // focusOnSelect: true,
        // centerMode: true,
    };

    return (
        <section className="DetailsMininav">
            <Slider className="DetailsMininav-slider" {...settings}>
                {menu.categories.slice(1).map(category => {
                    return <li key={category.id}>
                        <Link offset={-69} className={'link' + category.id} activeClass="underline" to={category.id} spy={true} smooth={true} duration={500}>{category.name}</Link>
                    </li>;
                })}
            </Slider>
        </section>
    );
};


