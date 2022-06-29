import { storageService } from './async-storage.service'
import categories from '../data/category'

export const restaurantService = {
    query,
    getCategories
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


function getCategories() {
    return categories
}


