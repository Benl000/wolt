import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant, loadMenu } from '../store/actions/restaurantAction';
import walkingMenLogo from '../assets/svgs/detailsPage/walkinman.svg';
import bikeMenLogo from '../assets/svgs/detailsPage/bikeman.svg';
import { DetailsHero } from '../components/details/DetailsHero';
import { DetailsContact } from '../components/details/DetailsContact.jsx';
import { useScrollPosition } from '../hooks/scrollPosition';
import arrowLogo from '../assets/svgs/detailsPage/arrow.svg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export const RestaurantDetails = () => {
    const { restaurant, menu } = useSelector((state) => state.restaurantModule);
    const scrollPosition = useScrollPosition();
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const restaurantData = await dispatch(loadRestaurant(name));
                dispatch(loadMenu(restaurantData.active_menu));
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return restaurant && menu ? (
        <section className="restaurantDetails-page">
            <section className={(scrollPosition < 90) ? "sub-header" : "sub-header white"}>
                <section className="restaurant-takeaway">
                    <div className="restaurant-takeaway__left">
                        <img className='logo' src={bikeMenLogo} />
                        <span>
                            The average takeaway in {restaurant.completion_estimates.delivery} min
                        </span>
                    </div>
                    <div className="restaurant-takeaway__center">
                        Open today:
                        <span>
                            09:00-24:00
                        </span>
                    </div>
                    <div className="restaurant-takeaway__right">
                    </div>
                </section>
            </section>
            <DetailsHero restaurant={restaurant} menu={menu} />
            <DetailsContact restaurant={restaurant} menu={menu} />
            <section className={(scrollPosition < 500) ? "scroll-to-top" : "scroll-to-top up"}
                onClick={scrollToTop}>
                <span>
                    <img className='arrowLogo' src={arrowLogo} />
                </span>
            </section>
        </section>
    ) : null;
};
