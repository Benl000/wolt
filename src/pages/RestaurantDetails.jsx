import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant, loadMenu } from '../store/actions/restaurantAction';
import walkingMenLogo from '../assets/svgs/detailsPage/walkinman.svg';
import bikeMenLogo from '../assets/svgs/detailsPage/bikeman.svg';
import { DetailsHero } from '../components/details/DetailsHero';
import { DetailsContact } from '../components/details/DetailsContact.jsx';


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
            <DetailsHero restaurant={restaurant} />
            <DetailsContact restaurant={restaurant} />
        </section>
    ) : null;
};
