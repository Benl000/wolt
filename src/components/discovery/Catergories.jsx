import { CategoriesPreview } from './CatergoriesPreview';

export const Categories = ({ categories }) => {
    return (
        <>
            <div>
                Categories
                <ul>{categories && categories.map(category =>
                    <CategoriesPreview key={category.id} category={category} />)}</ul>
            </div>
        </>
    );
};
