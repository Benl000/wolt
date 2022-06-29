import { RestaurantsCarouselPreview } from '../discovery/RestaurantsCarouselPreview';
import React from 'react';
import { useState } from 'react';

export const RestaurantsWrap = ({category, restaurants }) => {

    return (
        <section className="restaurant-wrap">
            <div className="restaurant-wrap-header">
                <h1>{category}</h1>
            </div>
            <div className="restaurant-wrap-main">
                {restaurants && restaurants.map(restaurant =>
                    <RestaurantsCarouselPreview key={JSON.stringify(restaurant.results[0].id)} restaurant={restaurant} />)}
            </div>
        </section>
    );
};