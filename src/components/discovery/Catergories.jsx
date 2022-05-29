import { CategoriesPreview } from './CatergoriesPreview'

export const Categories = ({ categories }) => {
    return (
        <>
            <div>
                Categories
                <ul>{categories && categories.map((category, idx) =>
                    <CategoriesPreview key={idx} category={category} />)}</ul>
            </div>
        </>
    )
}
