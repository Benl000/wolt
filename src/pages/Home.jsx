import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../store/actions/restaurantAction';

export const Home = () => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurantModule);
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
            <pre>{JSON.stringify(restaurants[0].results[0], null, 2)}</pre>
        </div>
    ) : null
}