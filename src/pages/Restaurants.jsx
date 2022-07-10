import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants, loadCategories } from '../store/actions/restaurantAction';
import { RestaurantsWrap } from '../components/category/RestaurantsWrap';
import { SubNavigation } from '../components/discovery/SubNavigation';
import { CategoriesList } from '../components/discovery/CatergoriesList';


export const Restaurants = () => {
    const { restaurants } = useSelector((state) => state.restaurantModule);
    const { categories } = useSelector((state) => state.restaurantModule);
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(loadRestaurants(type));
            dispatch(loadCategories());
        } catch (err) {
            console.log(err);
        }
    }, [type]);

    return categories && restaurants ? (
        <>
            <SubNavigation />
            <section className="restaurants-page">
                <CategoriesList categories={categories.slice(0, 10)} restaurants={restaurants} />
                <div className="restaurants-page-header">
                    <h1>All restaurants</h1>
                </div>
                <RestaurantsWrap restaurants={restaurants} categoryId={type} />
            </section>
        </>
    ) : null;
};
