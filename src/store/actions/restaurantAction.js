import { restaurantService } from '../../services/restaurant.service';

export function loadRestaurants() {
    return async (dispatch) => {
        try {
            const restaurants = await restaurantService.query();
            dispatch({ type: 'SET_RESTAURANTS', restaurants });
        } catch (err) {
            console.log(err);
        }
    };
}

export function loadRestaurant(id) {
    return async (dispatch) => {
        try {
            const restaurant = await restaurantService.getById(id);
            dispatch({ type: 'SET_RESTAURANT', restaurant });
        } catch (err) {
            console.log(err);
        }
    };
}