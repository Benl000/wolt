import { storageService } from './async-storage.service'
import categories from '../data/category'

export const restaurantService = {
    query,
    getCategories
}

async function query() {
    return await storageService.query()
}

function getCategories() {
    return categories
}