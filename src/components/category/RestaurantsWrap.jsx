import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RestaurantsCarouselPreview } from '../discovery/RestaurantsCarouselPreview';
import { loadCategory } from '../../store/actions/restaurantAction';

export const RestaurantsWrap = ({ categoryId, restaurants }) => {
    
    const { category } = useSelector((state) => state.restaurantModule);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(restaurants);
        dispatch(loadCategory(categoryId));
    }, []);

    return (
        <section className="restaurant-wrap">

            <div className="restaurant-wrap-header">
                <h1>{category && category.name}</h1>
            </div>
            <div className="restaurant-wrap-main">
                {restaurants && restaurants.map(restaurant =>
                    <RestaurantsCarouselPreview key={JSON.stringify(restaurant.id)} restaurant={restaurant} />)}
            </div>
        </section>
    );
};