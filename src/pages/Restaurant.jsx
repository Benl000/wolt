import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant } from '../store/actions/restaurantAction';
import { RestaurantsWrap } from '../components/category/RestaurantsWrap';
import { SubNavigation } from '../components/discovery/SubNavigation';

export const Restaurant = () => {
    const { restaurant } = useSelector((state) => state.restaurantModule);
    const { name } = useParams()
    const dispatch = useDispatch();
   
    useEffect(() => {
        try {
            dispatch(loadRestaurant(name));
        } catch (err) {
            console.log(err);
        }
    }, []);

    return restaurant?(
        <section className="restaurant-page">
            <h1>{restaurant.results[0].slug}</h1>
        </section>
    ):null
}
