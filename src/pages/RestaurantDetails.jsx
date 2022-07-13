import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant, loadMenu } from '../store/actions/restaurantAction';
import walkingMenLogo from '../assets/svgs/detailsPage/walkinman.svg';
import bikeMenLogo from '../assets/svgs/detailsPage/bikeman.svg';
import smileyLogo from '../assets/svgs/detailsPage/smiley.svg';


export const RestaurantDetails = () => {
    const { restaurant, menu } = useSelector((state) => state.restaurantModule);
    const { name } = useParams();
    const dispatch = useDispatch();
    console.log(':)', menu);

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

    return restaurant && menu ? (
        <section className="restaurantDetails-page">
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
            <section className="restaurant-hero">
                <div className="restaurant-hero_background">
                    <img src={restaurant.mainimage} alt="" />
                    <div className="restaurant-hero_background--darker"></div>
                </div>
                <div className="restaurant-hero_titles">
                    <div className="restaurant-hero_titles--main">
                        <h1>{restaurant.slug.charAt(0).toUpperCase() + restaurant.slug.slice(1)}</h1>
                        <h4>{restaurant.short_description[0].value}</h4>
                    </div>
                    <p>MIN. ORDER: 50.00</p>
                </div>
            </section>
            <section className="contact">
                <div className="contact-seprator">
                    <div className="contact-seprator_module">
                        <div className="contact-seprator_module--description">
                            <div className="rating">
                                <img src={smileyLogo} alt="" />
                                <span className="score">{restaurant.rating.score}</span>
                                <span className="outOf"> out of 10</span>
                            </div>
                            <div className="favourite"></div>
                        </div>
                        <div className="contact-seprator_module--search">
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="contact-menu"></div>
            </section>
        </section>
    ) : null;
};
