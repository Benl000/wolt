import { restaurantService } from '../../services/restaurant.service';

// Load all restaurants (already flattened in service)
export function loadRestaurants(filterBy) {
    return async (dispatch) => {
        try {
            const restaurants = await restaurantService.query(filterBy);
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

// Load single category by ID
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

// Load restaurant + menu
export function loadRestaurant(id) {
    return async (dispatch) => {
        try {
            console.log('🔍 Loading restaurant with ID:', id);
            const restaurant = await restaurantService.getRestaurantById(id);
            dispatch({ type: 'SET_RESTAURANT', restaurant });

            const menuId = restaurant?.active_menu?.$oid || restaurant?.id?.$oid;
            if (menuId) {
                const menu = await restaurantService.getMenuById(menuId);
                dispatch({ type: 'SET_MENU', menu });
            } else {
                console.warn(`❌ No menu ID found for restaurant "${restaurant?.slug || id}"`);
            }

            return restaurant;
        } catch (err) {
            console.error('🚨 Failed to load restaurant and menu:', err);
        }
    };
}

// Load menu by ID
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
