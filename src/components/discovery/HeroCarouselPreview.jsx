import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroCarouselPreview = ({ item }) => {
    const navigate = useNavigate();

    return (
        <section className="hero-preview">
            <img src={item.img} />
            <div className="hero-preview-details">
                <h6>{item.category}</h6>
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
            </div>
        </section>
    );
};
