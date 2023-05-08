import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { utilService } from "../../services/util.service.js";

export const CategoriesPreview = ({ category, restaurants }) => {
    
    const navigate = useNavigate();
    const [count, setCount] = useState(null);
    const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
    const [clientYonMouseDown, setClientYonMouseDown] = useState(null);

    useEffect(() => {
        setCount(utilService.getRestaurantsCount(category.id, restaurants));
    }, [count]);

    const handleOnMouseDown = (ev) => {
        setClientXonMouseDown(ev.clientX)
        setClientYonMouseDown(ev.clientY)
        ev.preventDefault()
    }

    const handleOnClick = (ev, categoryId) => {
        ev.stopPropagation()
        if (clientXonMouseDown !== ev.clientX || clientYonMouseDown !== ev.clientY) {
            ev.preventDefault()
            return
        }
        navigate(`/category/${categoryId}`);
    }

    return (
        <section className="category-preview"
            onMouseDown={(ev) => handleOnMouseDown(ev)} onClick={(ev) => handleOnClick(ev, category.id)}>
            <img src={category.img} alt={category.name} />
            <div className="category-preview-header" >
                <h3>{category.name}</h3>
                <h4>{count} places</h4>
            </div>
        </section>
    )
};
