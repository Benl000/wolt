import { useEffect, useState } from 'react';

export const Category = ({ params }) => {
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        fetch('https://restaurant-api.wolt.com/v1/pages/venue-list/category-pizza?lon=34.80746574626252&lat=31.902428004772347')
            .then(res => console.log(res))
    }, [])

    console.log(params);
    return (
        <div>CATEGORY PAGE</div>
    )
}
