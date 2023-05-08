import Slider from "react-slick";
import { Link } from 'react-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DetailsMininav = ({  menu }) => {

    var settings = {
        dots: false,
        autoplay: false,
        swipeToSlide: true,
        variableWidth: true,
        infinite: false,
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


