import React from 'react';
import { DetailsSeprator } from './DetailsSeprator.jsx';
import { DetailsMininav } from './DetailsMininav.jsx';
import { DetailsMiniSeprator } from './DetailsMiniSeprator.jsx';
import { DetailsMenu } from './DetailsMenu.jsx';
import { useMediaQuery } from 'react-responsive';



export const DetailsContact = ({ restaurant, menu }) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    return restaurant && menu ? (
        <section className="restaurant-contact">
            <DetailsSeprator restaurant={restaurant} isBigScreen={isBigScreen} />
            {!isBigScreen ?
                <DetailsMininav restaurant={restaurant} menu={menu} /> : null
            }
            <DetailsMenu restaurant={restaurant} menu={menu} isBigScreen={isBigScreen} />
        </section>
    ) : null;
};
