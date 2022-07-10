import React from "react";
import { useNavigate } from "react-router-dom";

export const RestaurantsCarouselPreview = ({ restaurant }) => {
    const navigate = useNavigate();
    const currResturant = restaurant.results[0];
    const resturantName = currResturant.name[0].value;

    const goTo = (slug) => {
        navigate(`/restaurant/${slug}`);
    };


    return (
        <section className="restaurant-preview" onClick={() => goTo(currResturant.slug)}>
            <img src={currResturant.listimage} alt={currResturant.name[0].value} />
            <div className="restaurant-preview-header">
                <div className="headlines">
                    <h3>{currResturant.name[0].value}</h3>
                    <h6>{currResturant.short_description[0].value}</h6>
                </div>
                <div className="time">
                    <h4>{currResturant.completion_estimates.delivery}</h4>
                    <h6>min</h6>
                </div>
            </div>
            <div className="restaurant-preview-footer">
                <div className="footer-container">
                    <span className="footer-container_deliveryCost">
                        <span>🚴‍♀️</span>
                        {(currResturant.delivery_specs.delivery_pricing.base_price / 100).toLocaleString('en-US', {
                            style: 'currency',
                            currency: (currResturant.currency),
                        })} ·
                    </span>
                    <span className="footer-container_cost">
                        $$$$ ·
                    </span>
                    <span className="footer-container_rating">
                        <span>🙂 </span>
                        <span>{currResturant.rating.score}</span>
                    </span>
                </div>
            </div>
        </section>
    );
};
