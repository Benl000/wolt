import { restaurantService } from '../../services/restaurant.service';

// Load all restaurants (flattened safely)
export function loadRestaurants(filterBy) {
    return async (dispatch) => {
        try {
            const res = await restaurantService.query(filterBy);

            // Flatten and validate structure
            const restaurants = Array.isArray(res)
                ? res.flatMap(group => group.results || [])
                : [];

            dispatch({ type: 'SET_RESTAURANTS', restaurants });
        } catch (err) {
            console.error('Failed to load restaurants:', err);
        }
    };
}

// Load all categories
export function loadCategories() {
    return async (dispatch) => {
        try {
            const categories = await restaurantService.getCategories();
            dispatch({ type: 'SET_CATEGORIES', categories });
        } catch (err) {
            console.error('Failed to load categories:', err);
        }
    };
}

// Load single category
export function loadCategory(id) {
    return async (dispatch) => {
        try {
            const category = await restaurantService.getCategoryById(id);
            dispatch({ type: 'SET_CATEGORY', category });
        } catch (err) {
            console.error('Failed to load category:', err);
        }
    };
}

// Load menu for a restaurant
export function loadMenu(id) {
    return async (dispatch) => {
        try {
            const menu = await restaurantService.getMenuById(id);
            dispatch({ type: 'SET_MENU', menu });
            return menu;
        } catch (err) {
            console.error('Failed to load menu:', err);
        }
    };
}

// Load a single restaurant by ID
export function loadRestaurant(id) {
    return async (dispatch) => {
        try {
            console.log('Loading restaurant with ID:', id);
            const restaurant = await restaurantService.getRestaurantById(id);
            dispatch({ type: 'SET_RESTAURANT', restaurant });
            return restaurant;
        } catch (err) {
            console.error('Failed to load restaurant:', err);
        }
    };
}
