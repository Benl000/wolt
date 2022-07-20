import React from 'react';
import smileyLogo from '../../assets/svgs/detailsPage/smiley.svg';


export const DetailsContact = ({ restaurant }) => {
    return restaurant ? (
        <section className="contact">
            <div className="contact-seprator">
                <div className="contact-seprator_module">
                    <div className="contact-seprator_module--description">
                        <div className="rating">
                            <img src={smileyLogo} alt="" />
                            <span className="score">{restaurant.rating.score}</span>
                            <span className="outOf"> out of 10</span>
                        </div>
                        <div className="favourite"></div>
                    </div>
                    <div className="contact-seprator_module--search">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="contact-menu"></div>
        </section>

    ) : null;
};
