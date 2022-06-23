import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoriesPreview = ({ category }) => {
    const navigate = useNavigate();

    const goTo = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <section className="category-preview" onClick={() => goTo(category.id)}>
            <img src={category.img} alt={category.name} />
            <div className="category-preview-header">
                <h3>{category.name}</h3>
                <h4>xxx places</h4>
            </div>
        </section>
    );
};
