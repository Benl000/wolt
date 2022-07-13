const INITIAL_STATE = {
    restaurants: null,
    restaurant: null,
    categories: null,
    category: null,
    menu: null
};

export function restaurantReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RESTAURANTS':
            return {
                ...state,
                restaurants: [...action.restaurants]
            };
        case 'SET_RESTAURANT': {
            return {
                ...state,
                restaurant: action.restaurant,
            };
        };
        case 'ADD_RESTAURANT':
            return {
                ...state,
                restaurant: [...state.restaurant, action.restaurant],
            };
        case 'REMOVE_RESTAURANT':
            return {
                ...state,
                restaurant: state.restaurant.filter((restaurant) => restaurant._id !== action.restaurantId),
            };
        case 'UPDATE_RESTAURANT':
            return {
                ...state,
                restaurant: state.restaurant.map((restaurant) =>
                    restaurant._id === action.restaurant._id ? action.restaurant : restaurant
                ),
            };
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: [...action.categories]
            };
        case 'SET_CATEGORY': {
            return {
                ...state,
                category: action.category,
            };
        };
        case 'SET_MENU': {
            return {
                ...state,
                menu: action.menu,
            };
        };
        default:
            return state;
    }
}
