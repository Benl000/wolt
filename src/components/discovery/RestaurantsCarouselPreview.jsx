import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RestaurantsCarouselPreview = ({ restaurant }) => {

    const navigate = useNavigate();
    const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
    const [clientYonMouseDown, setClientYonMouseDown] = useState(null);

    const handleOnMouseDown = (ev) => {
        setClientXonMouseDown(ev.clientX);
        setClientYonMouseDown(ev.clientY);
        ev.preventDefault();
    };

    const handleOnClick = (ev, { slug }) => {
        ev.stopPropagation();
        if (clientXonMouseDown !== ev.clientX || clientYonMouseDown !== ev.clientY) {
            ev.preventDefault();
            return;
        }
        navigate(`/restaurant/${slug}`);
    };

    return (
        <section className="restaurant-preview" onMouseDown={(ev) => handleOnMouseDown(ev)} onClick={(ev) => handleOnClick(ev, restaurant)}>
            <img src={restaurant.listimage} alt={restaurant.name[0].value} />
            <div className="restaurant-preview-header">
                <div className="headlines">
                    <h3>{restaurant.name[0].value}</h3>
                    <h6>{restaurant.short_description[0].value}</h6>
                </div>
                <div className="time">
                    <h4>{restaurant.completion_estimates.delivery}</h4>
                    <h6>min</h6>
                </div>
            </div>
            <div className="restaurant-preview-footer">
                <div className="footer-container">
                    <span className="footer-container_deliveryCost">
                        <span>🚴‍♀️</span>
                        {(restaurant.delivery_specs.delivery_pricing.base_price / 100).toLocaleString('en-US', {
                            style: 'currency',
                            currency: (restaurant.currency),
                        })} ·
                    </span>
                    <span className="footer-container_cost">
                        $$$$ ·
                    </span>
                    <span className="footer-container_rating">
                        <span>🙂 </span>
                        <span>{restaurant.rating.score}</span>
                    </span>
                </div>
            </div>
        </section>
    );
};
