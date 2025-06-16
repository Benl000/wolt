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

// Load all restaurants, optionally filtered by category
async function query(filterBy) {
    const res = await httpService.get('restaurant');

    // If it's already flat (e.g., array of restaurants)
    if (Array.isArray(res) && res.every(item => item.slug)) {
        console.log('🟢 Flat restaurant array');
        return res.filter(r => !filterBy || r.categories?.some(c => c.slug === filterBy));
    }

    // If it's nested inside { results: [...] }
    if (Array.isArray(res)) {
        console.log('🟡 Nested restaurant array');
        return res.flatMap(group => group.results || []).filter(r => 
            !filterBy || r.categories?.some(c => c.slug === filterBy)
        );
    }

    console.warn('🔴 Unexpected restaurant response format:', res);
    return [];
}


// Fetch a single restaurant by slug/id (unwraps nested results)
async function getRestaurantById(id) {
    console.log('restaurant id is:', id);
    const res = await httpService.get(`restaurant/${id}`);

    if (Array.isArray(res)) {
        const restaurant = res[0]?.results?.[0];
        console.log('👉 Parsed restaurant:', restaurant);
        return restaurant;
    }

    return res; // fallback if not wrapped
}

// Fetch a menu by internal menu ID or $oid wrapper
async function getMenuById(id) {
    const menuId = typeof id === 'object' && id.$oid ? id.$oid : id;
    console.log('📦 Fetching menu with ID:', menuId);
    return await httpService.get(`menu/${menuId}`);
}

// Get all categories
function getCategories() {
    return categories;
}

// Get category by ID
function getCategoryById(id) {
    return categories.find(category => category.id === id);
}
