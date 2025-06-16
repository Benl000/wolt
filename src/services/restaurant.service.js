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

    // ✅ If the data is wrapped like { results: [...] }
    const restaurant = Array.isArray(res?.results) ? res.results[0] : res;

    return restaurant;
}


async function getMenuById(id) {
    console.log('menu id is:', id);
    const menu = await httpService.get(`menu/${id}`);
    return menu;
}

function getCategories() {
    return categories;
}

function getCategoryById(id) {
    return categories.find(category => category.id === id);
}