import { NavLink } from 'react-router-dom';
import { ReactComponent as DiscoveryLogo } from '../../assets/svgs/discoveryBtn.svg';
import { ReactComponent as RestaurantsLogo } from '../../assets/svgs/restaurantsBtn.svg';

export const SubNavigation = () => {
    return (
        <nav className='discovery-nav'>
            <section className='discovery-nav-start'>
                1
            </section>
            <section className='discovery-nav-center'>
                <NavLink className='discovery-nav-center-link' to={'/'}>
                    <DiscoveryLogo />
                    <span>Discovery</span>
                </NavLink>
                <NavLink className='discovery-nav-center-link' to={'/restaurants'}>
                    <RestaurantsLogo />
                    <span>Restaurants</span>
                </NavLink>
            </section>
            <section className='discovery-nav-end'>
                3
            </section>
        </nav>
    );
};
