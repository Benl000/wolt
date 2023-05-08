import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRestaurants } from '../store/actions/restaurantAction';

import { SubNavigation } from '../components/discovery/SubNavigation';
import { HeroCarouselList } from '../components/discovery/HeroCarouselList';
import { CategoriesList } from '../components/discovery/CatergoriesList';
import { RestaurantsCarouselList } from '../components/discovery/RestaurantsCarouselList';

export const Discovery = () => {

    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurantModule.restaurants);

    useEffect(() => {
        try {
            dispatch(loadRestaurants());
            dispatch(loadCategories());
        } catch (err) {
            console.log(err);
        }
    }, []);

    return restaurants ? (
        <>
            <SubNavigation />
            <section className="discovery-page">
                <HeroCarouselList />
                <CategoriesList restaurants={restaurants} />
                <RestaurantsCarouselList restaurants={restaurants} />
                <RestaurantsCarouselList restaurants={restaurants} />
                <RestaurantsCarouselList restaurants={restaurants} />
            </section>
        </>
    ) : null;
};