import React from 'react';
import smileyLogo from '../../assets/svgs/detailsPage/smiley.svg';
import heartLogo from '../../assets/svgs/detailsPage/heart.svg';

export const DetailsMiniSeprator = ({ restaurant, isBigScreen }) => {

    return restaurant ? (
        <div className="restaurant-seprator">

            <div className="restaurant-seprator_module--description">
                <div className="rating">
                    <img src={smileyLogo} alt="" />
                    <span className="score">{restaurant.rating.score}</span>
                    <span className="outOf"> out of 10</span>
                </div>
                <div className="favourite">
                    <div className="favourite-logo">
                        <img src={heartLogo} alt="" />
                    </div>
                    <span className="favourite-text">Favourite</span>
                </div>
            </div>
            <div className="restaurant-seprator_module--search">
                <label htmlFor="search" >
                    <input id='search' type="text" placeholder='Search' />
                </label>

            </div>
        </div>) : null;
};
