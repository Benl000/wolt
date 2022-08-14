import React from 'react';
// import category from '../../data/category';
import { DetailsCategoryPreview } from './DetailsCategoryPreview.jsx';
import { DetailsInformation } from './DetailsInformation.jsx';
// import { Link } from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

export const DetailsMenu = ({ restaurant, menu }) => {
    return restaurant && menu ? (
        <section className="restaurant-menu">
            <nav className="restaurant-menu--nav">
                <ul>
                    {menu.categories.slice(1).map(category => {
                        //return <DetailsCategoryPreview key={category.id} category={category} />
                        return <li key={category.id}>
                            <Link offset={-69} className={'link' + category.id} activeClass="underline" to={category.id} spy={true} smooth={true} duration={500}>{category.name}</Link>
                        </li>;


                    }
                    )}
                </ul>
            </nav>
            <div className="restaurant-menu--main">
                <ul>
                    {menu.categories.slice(1).map(category => {
                        return <DetailsCategoryPreview key={category.id} category={category} menu={menu} />;
                    }
                    )}
                </ul>
                {/* {JSON.stringify(menu)} */}
            </div>
            <div className="restaurant-menu--information">
                <DetailsInformation restaurant={restaurant} />
            </div>
        </section >) : null;
};
