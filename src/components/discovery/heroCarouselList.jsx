import { HeroCarouselPreview } from './HeroCarouselPreview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const HeroCarouselList = () => {

    var heroitems = [
        { id: 0, category: '', title: '', description: 'Supermarkets near you', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/2d60937a-f2f6-11ec-b0a0-6a2215c87ca3_banners_master_3_with_yuho.png?w=960' },
        // { id: 1, category: '', title: 'Taste like weekend!', description: 'The new places that will open your appetite', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/042f3b9e-d4f8-11ec-a730-96df735ac1a1_shutterstock_1914202471.jpg?w=960' },
        { id: 2, category: 'ARTICLE', title: 'Are you up for this?', description: 'Special offers. All night long.', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/1fff2702-4c50-11ec-a195-f61f93fd120c_wolt0517_min.jpg?w=960' },
        { id: 3, category: 'ARTICLE', title: 'Out of milk?', description: 'Your Wolt is on the way!', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/8c0685c6-687f-11ec-88a3-ea801cca9de4_46577_h_banner_1400x810__sg5__1_.jpg?w=960' },
        { id: 4, category: '', title: 'Earn Wolt credits', description: 'Share your code here!', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/9fbc7f7c-e796-11eb-9b3a-46a96bdfc4c2__________.jpeg?w=960' },
        { id: 5, category: 'ARTICLE', title: 'Non-Stop Deliveries', description: 'Every day, All day.', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/2f395c0c-03e8-11ec-873a-124c0c19d32d_whatsapp_image_2021_08_23_at_10.26.37_min.jpeg?w=960' },
        { id: 6, category: 'GIFT CARD', title: 'Wolt Gift Cards', description: '', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/151b9792-2cdb-11ec-97b9-22cfd44ac649_________.jpeg?w=960' },
        { id: 7, category: 'ARTICLE', title: 'Q&A', description: 'Common questions & answers', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/5cab40fe-3266-11ec-a930-822863df41b5_1_min.jpg?w=960' },
        { id: 8, category: '', title: '', description: '', img: 'https://imageproxy.wolt.com/wolt-frontpage-images/cities/tel-aviv/sections/abd4d57c-31a4-11ec-bd86-561275932094_______min.jpg?w=960' },
    ];
    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 2,
        speed: 3000,
        swipeToSlide: true,
        arrows: false,
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