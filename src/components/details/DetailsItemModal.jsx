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
                    <h1>{item.name}</h1>
                    <span>
                        {
                            (item.baseprice / 100).toLocaleString('he-IL', {
                                style: 'currency',
                                currency: 'ILS',
                            })}
                    </span>
                    <p>
                        {item.description}
                    </p>
                </section>
            </section>
        </section>

    );
};


