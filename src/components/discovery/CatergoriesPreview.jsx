import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoriesPreview = ({ category }) => {
    const navigate = useNavigate();

    const goTo = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <>
            <li>
                <img src={category.img} alt="" />
                <div onClick={() => goTo(category.id)}>{category.name}</div>
            </li>
        </>
    )
}
