import React, { useState } from 'react';
import { ReactComponent as MinusLogo } from '../../assets/svgs/detailsPage/minus.svg';
import { ReactComponent as PlusLogo } from '../../assets/svgs/detailsPage/plus.svg';
import { ReactComponent as XLogo } from '../../assets/svgs/detailsPage/x.svg';

export const DetailsItemModal = ({ itemId, menu }) => {

    let item = menu.items.find(i => i.id === itemId);
    const [itemAmount, setItemAmount] = useState(1);


    const exitModal = (ev) => {
        console.log('exitModal');
    };

    const handleChangeAmount = (ev, param) => {
        setItemAmount(itemAmount + param);
        if (itemAmount <= 0) exitModal(ev);
        ev.preventDefault();
    };

    return (
        <section className="restaurantDetails-modal">
            <section className="restaurantDetails-modal--overlay" onClick={(ev) => exitModal(ev)}>
                <section className="itemModal">
                    <header>
                        <button>
                            <XLogo onClick={(ev) => exitModal(ev)} />
                        </button>
                    </header>
                    <img src={item.image} alt="" />
                    <section className="itemModal--details">
                        <h1>{item.name}</h1>
                        <div>

                            <a>
                                {
                                    (item.baseprice / 100).toLocaleString('he-IL', {
                                        style: 'currency',
                                        currency: 'ILS',
                                    })}
                            </a>
                        </div>
                        <p>
                            {item.description}
                        </p>
                    </section>
                    <footer>
                        <div className="container">
                            <div className="container--amount">
                                <div>
                                    <PlusLogo onClick={(ev) => handleChangeAmount(ev, 1)} />
                                </div>
                                <div>
                                    <span>{itemAmount}</span>
                                </div>
                                <div>
                                    <MinusLogo onClick={(ev) => handleChangeAmount(ev, -1)} />
                                </div>
                            </div>
                            <button>
                                <div>
                                    {
                                        (item.baseprice / 100 * itemAmount).toLocaleString('he-IL', {
                                            style: 'currency',
                                            currency: 'ILS',
                                        })}
                                </div>
                                <div>
                                    <button>
                                        להוסיף להזמנה
                                    </button>
                                </div>
                            </button>
                        </div>
                    </footer>
                </section>
            </section>
        </section>

    );
};


