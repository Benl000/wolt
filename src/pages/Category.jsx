import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../store/actions/restaurantAction';

import { RestaurantsWrap } from '../components/category/RestaurantsWrap';
import { SubNavigation } from '../components/discovery/SubNavigation';

export const Category = () => {
    
    const { restaurants } = useSelector((state) => state.restaurantModule);
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(loadRestaurants(type));
        } catch (err) {
            console.log(err);
        }
    }, [type]);

    return (
        <>
            <SubNavigation />
            <section className="category-page">
                {restaurants ?
                    <RestaurantsWrap restaurants={restaurants} categoryId={type} /> :
                    <h4>The categoryis empty</h4>}
            </section>
        </>
    );
};
