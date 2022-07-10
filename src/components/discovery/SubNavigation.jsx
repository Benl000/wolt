import { NavLink } from 'react-router-dom';
import { ReactComponent as DiscoveryLogo } from '../../assets/svgs/discovery/discoveryBtn.svg';
import { ReactComponent as RestaurantsLogo } from '../../assets/svgs/discovery/restaurantsBtn.svg';
import { ReactComponent as LocationLogo } from '../../assets/svgs/discovery/locationBtn.svg';

export const SubNavigation = () => {
    return (
        <nav className='discovery-nav'>
            <section className='discovery-nav-start'>
                <button>
                    <div>
                        <LocationLogo className="location-logo" />
                    </div>
                    <span>Tel Aviv</span>
                </button>
            </section>
            <section className='discovery-nav-center'>
                <NavLink className='discovery-nav-center-link' to={'/'}>
                    <DiscoveryLogo />
                    <span>Discovery</span>
                </NavLink>
                <NavLink className='discovery-nav-center-link' to={'/restaurant'}>
                    <RestaurantsLogo />
                    <span>Restaurants</span>
                </NavLink>
            </section>
            <section className='discovery-nav-end'>
            </section>
        </nav>
    );
};
