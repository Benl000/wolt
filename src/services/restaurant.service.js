import { storageService } from './async-storage.service'

export const restaurantService = {
    query
}

async function query() {
    const restaurants = await storageService.query()
    console.log(restaurants);
    return restaurants
}