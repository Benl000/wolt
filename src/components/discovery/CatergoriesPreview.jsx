import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { utilService } from "../../services/util.service.js";

export const CategoriesPreview = ({ category, restaurants }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(null);

    const goTo = (ev, categoryId) => {
        console.log(ev);
        ev.stopPropagation();
        navigate(`/category/${categoryId}`);
    };

    useEffect(() => {
        setCount(utilService.getRestaurantsCount(category.id, restaurants));
    }, []);

    return (
        <section className="category-preview" onClick={(ev) => goTo(ev, category.id)}>
            <img src={category.img} alt={category.name} />
            <div className="category-preview-header" >
                <h3>{category.name}</h3>
                <h4>{count} places</h4>
            </div>
        </section>
    );
};
