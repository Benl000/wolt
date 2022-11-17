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
    // const restaurants = await storageService.query();
    console.log('restaurant id is:', id);
    const restaurant = await httpService.get(`restaurant/${id}`);
    // return restaurants.find(restaurant => restaurant.results[0].slug === id);
    // console.log('id is:', id);
    // console.log(restaurant);
    return restaurant;
}

async function getMenuById(id) {
    // const restaurants = await storageService.query();
    console.log('menu id is:', id);
    const menu = await httpService.get(`menu/${JSON.stringify(id)}`);
    // return restaurants.find(restaurant => restaurant.results[0].slug === id);
    // console.log('id is:', id);
    // console.log(menu);
    return menu;
}

function getCategories() {
    return categories;
}

function getCategoryById(id) {
    return categories.find(category => category.id === id);
}