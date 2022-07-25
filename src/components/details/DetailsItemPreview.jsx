import React from 'react';

export const DetailsItemPreview = ({ item }) => {
    return item ? (
        <section className='details-itemPreview'>
            <a href="http://">
                <div className='contant'>
                    <div className='info'>
                        <h6>
                            {item.name}
                        </h6>
                        <p>
                            {item.description}
                        </p>
                        <span>
                            {
                                (item.baseprice / 100).toLocaleString('he-IL', {
                                    style: 'currency',
                                    currency: 'ILS',
                                })}
                        </span>
                    </div>
                    {item.image ?
                        <div className='image'>
                            <img src={item.image} alt="" />
                        </div>
                        : null}
                </div>
            </a>
        </section>
    ) : null;
};
