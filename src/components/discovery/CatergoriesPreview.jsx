import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoriesPreview = ({ category }) => {
    const navigate = useNavigate();

    const goTo = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <>
            <div onClick={() => goTo('pizza')}>{category}</div>
        </>
    )
}
