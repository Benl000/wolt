export const utilService = {
    getRestaurantsCount,
};
function getRestaurantsCount(filterBy, restaurants) {
    const count = restaurants.filter(restaurant => {
        const { categories } = restaurant;
        return categories.some(category => category.slug === filterBy);
    });
    return count.length;
}