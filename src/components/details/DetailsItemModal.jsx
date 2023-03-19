import React from 'react';

export const DetailsItemModal = ({ itemId, menu }) => {

    let item = menu.items.find(i => i.id === itemId);

    const exitModal = (ev, item) => {
        ev.stopPropagation();
        item = null;
    };

    return (
        <section className="restaurantDetails-modal">
            <section className="restaurantDetails-modal--overlay" onClick={(ev) => exitModal(ev, item)}>
                <section className="itemModal">
                    <img src={item.image} alt="" />
                    <section className="itemModal--details">
                        <h1>{item.name}</h1>
                        <a>
                            {
                                (item.baseprice / 100).toLocaleString('he-IL', {
                                    style: 'currency',
                                    currency: 'ILS',
                                })}
                        </a>
                        <p>
                            {item.description}
                        </p>
                    </section>
                </section>
            </section>
        </section>

    );
};


