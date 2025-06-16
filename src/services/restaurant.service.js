import { storageService } from './async-storage.service';
import { httpService } from './http.service';
import categories from '../data/category';
import menus from '../data/menu_db'; // ✅ make sure menu_db is imported correctly

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

    // 🟢 Flatten all restaurant groups into a single array
    const restaurants = Array.isArray(res)
        ? res.flatMap(group => group.results || [])
        : [];

    if (!filterBy) return restaurants;

    return restaurants.filter(restaurant => {
        const { categories } = restaurant;
        return categories?.some(category => category.slug === filterBy);
    });
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

    return res;
}

// ✅ New logic: find menu by restaurant ID or slug from local `menu_db.js`
async function getMenuById(idOrSlug) {
    console.log('📦 Resolving menu for:', idOrSlug);

    const menu = menus.find(menu =>
        menu.id === idOrSlug ||
        menu.slug === idOrSlug
    );

    if (!menu) {
        console.warn(`⚠️ No menu found for ID or slug: ${idOrSlug}`);
    }

    return menu;
}

// Get all categories
function getCategories() {
    return categories;
}

// Get category by ID
function getCategoryById(id) {
    return categories.find(category => category.id === id);
}
