import { Link } from 'react-scroll';

import { DetailsCategoryPreview } from './DetailsCategoryPreview.jsx';
import { DetailsInformation } from './DetailsInformation.jsx';

export const DetailsMenu = ({ restaurant, menu, isBigScreen }) => {

    return restaurant && menu ? (
        <section className="restaurant-menu">
            {isBigScreen ?
                <nav className="restaurant-menu--nav">
                    <ul>
                        {menu.categories.slice(1).map(category => {
                            return <li key={category.id}>
                                <Link offset={-69} className={'link' + category.id} activeClass="underline" to={category.id} spy={true} smooth={true} duration={500}>{category.name}</Link>
                            </li>;
                        })}
                    </ul>
                </nav>
                :
                null
            }
            <div className="restaurant-menu--main">
                <ul>
                    {menu.categories.slice(1).map(category => {
                        return <DetailsCategoryPreview key={category.id} category={category} menu={menu} />;
                    }
                    )}
                </ul>
            </div>
            {isBigScreen ? <div className="restaurant-menu--information">
                <DetailsInformation restaurant={restaurant} />
            </div> : null}

        </section >) : null;
};
