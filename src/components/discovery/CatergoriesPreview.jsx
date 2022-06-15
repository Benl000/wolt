import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoriesPreview = ({ category }) => {
    const navigate = useNavigate();

    const goTo = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <section className="category-preview">
            <img src={category.img} alt={category.name} />
            <div className="category-preview-header">
                <h3 onClick={() => goTo(category.id)}>{category.name}</h3>
            </div>
        </section>
    );
};
