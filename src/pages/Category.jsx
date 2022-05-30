import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Category = () => {
    const { type } = useParams()
    console.log(type);
    // const [restaurants, setRestaurants] = useState(null)

    // useEffect(() => {
    // fetch('restaurant-api.wolt.com/v1/pages/venue-list/category-street_food?lon=34.78698525756491&lat=32.087236876497585')
    //     .then(data => {
    //         console.log(data);
    //         // var x = data.json()
    //         // x.then(res => console.log(res))
    //         // console.log(x);
    //     })
    // }, [])

    return (
        <div>CATEGORY PAGE</div>
    )
}
