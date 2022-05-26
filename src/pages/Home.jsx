import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../store/actions/restaurantAction';

export const Home = () => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurantModule);
    // const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        dispatch(loadRestaurants());
    }, []);

    return restaurants ? (
        <div>
            <pre>{JSON.stringify(restaurants, null, 2)}</pre>
        </div>
    ) : null
}