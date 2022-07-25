import React from 'react';
// import category from '../../data/category';
import { DetailsCategoryPreview } from './DetailsCategoryPreview.jsx';

export const DetailsMenu = ({ restaurant, menu }) => {
    return restaurant && menu ? (
        <section className="restaurant-menu">
            <nav className="restaurant-menu--nav">
                <ul>
                    {menu.categories.map(category => {
                        //return <DetailsCategoryPreview key={category.id} category={category} />
                        return <li key={category.id}>{category.name}</li>;
                    }
                    )}
                </ul>
            </nav>
            <div className="restaurant-menu--main">
                <ul>
                    {menu.categories.map(category => {
                        return <DetailsCategoryPreview key={category.id} category={category} menu={menu} />;
                    }
                    )}
                </ul>
                {/* {JSON.stringify(menu)} */}
            </div>
            <div className="restaurant-menu--information"></div>
        </section >) : null;
};
