import { storageService } from './async-storage.service';
import { httpService } from './http.service';
import categories from '../data/category';

export const restaurantService = {
    query,
    getCategories,
    getCategoryById,
    getRestaurantById,
    getMenuById
};

async function query(filterBy) {
    // const restaurants = await storageService.query()
    const restaurants = await httpService.get('restaurant');
    if (!filterBy) return restaurants;
    return restaurants.filter(restaurant => {
        const { categories } = restaurant;
        return categories.some(category => category.slug === filterBy);
    });
}

async function getRestaurantById(id) {
    console.log('restaurant id is:', id);
    const res = await httpService.get(`restaurant/${id}`);

    // If response is an array (e.g. [{ results: [restaurant] }])
    if (Array.isArray(res)) {
        const restaurant = res[0]?.results?.[0];
        console.log('👉 Parsed restaurant:', restaurant);
        return restaurant;
    }

    // Fallback if it's already a restaurant object
    return res;
}



async function getMenuById(id) {
    const menuId = typeof id === 'object' && id.$oid ? id.$oid : id;
    console.log('📦 Fetching menu with ID:', menuId);
    const menu = await httpService.get(`menu/${menuId}`);
    return menu;
}

function getCategories() {
    return categories;
}

function getCategoryById(id) {
    return categories.find(category => category.id === id);
}