import React from 'react';
import { DetailsSeprator } from './DetailsSeprator.jsx';
import { DetailsMenu } from './DetailsMenu.jsx';


export const DetailsContact = ({ restaurant, menu }) => {
    return restaurant && menu ? (
        <section className="restaurant-contact">
            <DetailsSeprator restaurant={restaurant} />
            <DetailsMenu restaurant={restaurant} menu={menu} />
        </section>
    ) : null;
};
