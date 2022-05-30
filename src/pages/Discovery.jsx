import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, loadRestaurants } from '../store/actions/restaurantAction';
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
            dispatch(loadRestaurants())
            dispatch(loadCategories())
        } catch (err) {
            console.log(err);
        }
    }, []);

    return restaurants && categories ? (
        <div>
            <SubNavigation />
            <HeroCarousel />
            <Categories categories={categories.slice(0, 10)} />
            {/* <pre>{JSON.stringify(restaurants, null, 2)}</pre> */}
        </div>
    ) : null;
};