import React from 'react';

export const DetailsHero = ({ restaurant, menu }) => {


    return restaurant && menu ? (
        <section className="restaurant-hero">
            <div className="restaurant-hero_background">
                <img src={restaurant.mainimage} alt="" />
                <div className="restaurant-hero_background--darker"></div>
            </div>
            <div className="restaurant-hero_titles">
                <div className="restaurant-hero_titles--main">
                    <h1>{menu.name}</h1>
                    <h4>{restaurant.short_description[0].value}</h4>
                </div>
                <p>MIN. ORDER: 50.00</p>
            </div>
        </section>
    ) : null;
};
