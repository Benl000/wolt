import React from 'react';
import { DetailsSeprator } from './DetailsSeprator.jsx';
import { DetailsMenu } from './DetailsMenu.jsx';


export const DetailsContact = ({ restaurant }) => {
    return restaurant ? (
        <section className="restaurant-contact">
            <DetailsSeprator restaurant={restaurant} />
            <DetailsMenu restaurant={restaurant} />
        </section>
    ) : null;
};
