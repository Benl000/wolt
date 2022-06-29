import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../store/actions/restaurantAction';
import { RestaurantsWrap } from '../components/category/RestaurantsWrap';
import { SubNavigation } from '../components/discovery/SubNavigation';

export const Category = () => {
    const { restaurants } = useSelector((state) => state.restaurantModule);
    const { type } = useParams()
    const dispatch = useDispatch();
    console.log(type);
   
    useEffect(() => {
        try {
            dispatch(loadRestaurants(type));
        } catch (err) {
            console.log(err);
        }
    }, [type]);
    
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
        <section className="categoty-page">
            <SubNavigation/>
            {restaurants?
            <RestaurantsWrap restaurants={restaurants} category={type}/>: 
            <h4>The categoryis empty</h4>}
        </section>
    ) 
}
