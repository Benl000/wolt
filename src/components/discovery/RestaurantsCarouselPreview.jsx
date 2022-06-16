import React from "react";
import { useNavigate } from "react-router-dom";
// import restaurant from "../../data/restaurant";

export const RestaurantsCarouselPreview = ({ restaurant }) => {
    const navigate = useNavigate();

    // const goTo = (categoryId) => {
    //     navigate(`/category/${categoryId}`);
    // };

    return (
        <section className="restaurant-preview">
            <img src={restaurant.results[0].mainimage} alt={restaurant.results[0].name[0].value} />
            <h1>{restaurant.results[0].name[0].value}</h1>
            <h6>{restaurant.results[0].short_description[0].value}</h6>
            {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
            {/* <h2>{restaurant.results.name[0].value}</h2> */}
        </section>
    );
};
