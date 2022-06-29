import { storageService } from './async-storage.service'
import categories from '../data/category'

export const restaurantService = {
    query,
    getCategories,
    getCategoryById,
    getRestaurantById
}

// async function query() {
//     return await storageService.query()
// }

async function query(filterBy) {
    const restaurants = await storageService.query()
    if (!filterBy) return restaurants
    return restaurants.filter(restaurant=>{
        const{categories}= restaurant.results[0]
        return categories.some(category=>category.slug===filterBy)
    })
}

async function getRestaurantById(id) {
    const restaurants = await storageService.query()
    return restaurants.find(restaurant=> restaurant.results[0].slug===id)
}


function getCategories() {
    return categories
}

function getCategoryById(id) {
    return categories.find(category=>category.id===id)
}


