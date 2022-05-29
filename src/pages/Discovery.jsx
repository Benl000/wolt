import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../store/actions/restaurantAction';
import { SubNavigation } from '../components/discovery/SubNavigation';
import { HeroCarousel } from '../components/discovery/HeroCarousel';
import { Categories } from '../components/discovery/Catergories';

export const Discovery = () => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurantModule);
    const { categories } = useSelector((state) => state.restaurantModule);
    // const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        try {
            dispatch(loadRestaurants());
        } catch (err) {
            console.log(err);
        }
    }, []);

    return restaurants ? (
        <div>
            <SubNavigation />
            <HeroCarousel />
            <Categories categories={categories} />
            {/* <pre>{JSON.stringify(restaurants, null, 2)}</pre> */}
        </div>
    ) : null;
};