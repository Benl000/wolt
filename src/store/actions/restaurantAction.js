import { restaurantService } from '../../services/restaurant.service';

export function loadRestaurants(filterBy) {
    return async (dispatch) => {
        try {
            const restaurants = await restaurantService.query(filterBy);
            dispatch({ type: 'SET_RESTAURANTS', restaurants });
        } catch (err) {
            console.log(err);
        }
    };
}

export function loadRestaurant(id) {
    return async (dispatch) => {
        try {
            const restaurant = await restaurantService.getRestaurantById(id);
            dispatch({ type: 'SET_RESTAURANT', restaurant });
            return restaurant;
        } catch (err) {
            console.log(err);
        }
    };
}

export function loadCategories() {
    return async (dispatch) => {
        try {
            const categories = await restaurantService.getCategories();
            dispatch({ type: 'SET_CATEGORIES', categories });
        } catch (err) {
            console.log(err);
        }
    };
}

export function loadCategory(id) {
    return async (dispatch) => {
        try {
            const category = await restaurantService.getCategoryById(id);
            dispatch({ type: 'SET_CATEGORY', category });
        } catch (err) {
            console.log(err);
        }
    };
}

export function loadMenu(id) {
    return async (dispatch) => {
        try {
            const menu = await restaurantService.getMenuById(id);
            dispatch({ type: 'SET_MENU', menu });
        } catch (err) {
            console.log(err);
        }
    };
}