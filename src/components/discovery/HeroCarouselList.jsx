import Slider from "react-slick";

import { HeroCarouselPreview } from './HeroCarouselPreview';
import { SampleNextArrow, SamplePrevArrow } from './Buttons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroCarouselList = () => {
    var heroitems = [
        { id: 0, category: '', title: '', description: 'Supermarkets near you', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/2d60937a-f2f6-11ec-b0a0-6a2215c87ca3_banners_master_3_with_yuho.png?w=960' },
        { id: 2, category: 'ARTICLE', title: 'Are you up for this?', description: 'Special offers. All night long.', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/1fff2702-4c50-11ec-a195-f61f93fd120c_wolt0517_min.jpg?w=960' },
        { id: 4, category: '', title: 'Earn Wolt credits', description: 'Share your code here!', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/9fbc7f7c-e796-11eb-9b3a-46a96bdfc4c2__________.jpeg?w=960' },
        { id: 8, category: '', title: '', description: '', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/abd4d57c-31a4-11ec-bd86-561275932094_______min.jpg?w=960' },
    ];

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 2,
        speed: 3000,
        swipeToSlide: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <section className="hero-list">
            <Slider className="hero-list-slider" {...settings}>
                {heroitems && heroitems.map(item =>
                    <HeroCarouselPreview key={item.id} item={item} />)}
            </Slider>
        </section>
    );
};
