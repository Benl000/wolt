import { RestaurantsCarouselPreview } from '../discovery/RestaurantsCarouselPreview';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadCategory } from '../../store/actions/restaurantAction';

import React from 'react';

export const RestaurantsWrap = ({ categoryId, restaurants }) => {
    const { category } = useSelector((state) => state.restaurantModule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCategory(categoryId));
    }, []);

    return (
        <section className="restaurant-wrap">

            <div className="restaurant-wrap-header">
                <h1>{category && category.name}</h1>
            </div>
            <div className="restaurant-wrap-main">
                {restaurants && restaurants.map(restaurant =>
                    <RestaurantsCarouselPreview key={JSON.stringify(restaurant.results[0].id)} restaurant={restaurant} />)}
            </div>
        </section>
    );
};