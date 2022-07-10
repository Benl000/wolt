import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant } from '../store/actions/restaurantAction';
// import { RestaurantsWrap } from '../components/category/RestaurantsWrap';
// import { SubNavigation } from '../components/discovery/SubNavigation';

export const RestaurantDetails = () => {
    const { restaurant } = useSelector((state) => state.restaurantModule);
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(loadRestaurant(name));
        } catch (err) {
            console.log(err);
        }
    }, []);

    return restaurant ? (
        <section className="restaurant-page">
            <section className="restaurant-hero">
                <div className="restaurant-hero_background">
                    <img src={restaurant.results[0].mainimage} alt="" />
                    <div className="restaurant-hero_background--darker"></div>
                </div>
                <div className="restaurant-hero_titles">
                    <div className="restaurant-hero_titles--main">
                        <h1>{restaurant.results[0].slug}</h1>
                        <p>{restaurant.results[0].short_description[0].value}</p>
                    </div>
                    <button>MIN. ORDER: 50.00</button>
                </div>
                {/* <div></div> */}
            </section>
        </section>
    ) : null;
};
