import React from 'react';
import { DetailsItemPreview } from './DetailsItemPreview.jsx';

export const DetailsCategoryPreview = ({ category, menu }) => {
    return (
        <section className='details-categoryPreview'>
            <div className='head'>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
            </div>
            <div className='list'>
                <ul>
                    {menu.items
                        .filter(item => item.category === category.id)
                        .map(item => { return <DetailsItemPreview key={item.id} item={item} />; }
                        )
                    }
                </ul>
            </div>
        </section>
    );
};
