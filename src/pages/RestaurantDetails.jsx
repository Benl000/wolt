import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant, loadMenu } from '../store/actions/restaurantAction';
import walkingMenLogo from '../assets/svgs/detailsPage/walkinman.svg';
import bikeMenLogo from '../assets/svgs/detailsPage/bikeman.svg';
import { DetailsHero } from '../components/details/DetailsHero';
import { DetailsItemModal } from '../components/details/DetailsItemModal';
import { DetailsContact } from '../components/details/DetailsContact.jsx';
import { useScrollPosition } from '../hooks/scrollPosition';
import arrowLogo from '../assets/svgs/detailsPage/arrow.svg';
import { animateScroll as scroll } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

export const RestaurantDetails = () => {
    const { restaurant, menu } = useSelector((state) => state.restaurantModule);
    // const [restaurant, menu] = useSelector((state) => [state.restaurantModule.restaurant, state.restaurantModule.menu]);
    const scrollPosition = useScrollPosition();
    const { name, item } = useParams();
    const dispatch = useDispatch();

    const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });

    // console.log('name', name);
    // console.log('restaurant', restaurant);
    // console.log('menu', menu);
    // console.log('restaurant', restaurant);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const restaurantData = await dispatch(loadRestaurant(name));
                // await dispatch(loadRestaurant(name));
                console.log("restaurantData", restaurantData);
                // console.log("restaurantData.active_menu", restaurant.active_menu);
                // dispatch(loadMenu(restaurantData.active_menu));
                if (restaurantData) {
                    const x = await dispatch(loadMenu(restaurantData.active_menu));
                    console.log('xxxxx', x);
                }
                // console.log(restaurantData);
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
            <DetailsContact restaurant={restaurant} menu={menu} isBigScreen={isBigScreen} />
            <section className={(scrollPosition < 500) ? "scroll-to-top" : "scroll-to-top up"}
                onClick={scrollToTop}>
                <span>
                    <img className='arrowLogo' src={arrowLogo} />
                </span>
            </section>
            {item ? <DetailsItemModal itemId={item} menu={menu} /> : null}
        </section>
    ) : null;
};
