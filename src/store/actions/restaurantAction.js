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

// Load a single restaurant by ID and its menu
export function loadRestaurant(id) {
    return async (dispatch) => {
        try {
            console.log('Loading restaurant with ID:', id);
            const restaurant = await restaurantService.getRestaurantById(id);
            dispatch({ type: 'SET_RESTAURANT', restaurant });

            // Load related menu using internal menu ID
            const menuId = restaurant?.active_menu?.$oid;
            if (menuId) {
                const menu = await restaurantService.getMenuById(menuId);
                dispatch({ type: 'SET_MENU', menu });
            } else {
                console.warn('No active_menu ID found in restaurant');
            }

            return restaurant;
        } catch (err) {
            console.error('Failed to load restaurant and menu:', err);
        }
    };
}

// Load menu for a restaurant by ID
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
