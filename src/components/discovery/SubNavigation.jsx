import { ReactComponent as DiscoveryLogo } from '../../assets/svgs/discoveryBtn.svg';
import { ReactComponent as RestaurantsLogo } from '../../assets/svgs/restaurantsBtn.svg';

export const SubNavigation = () => {
    return (
        <nav className='discovery-nav'>
            <section className='discovery-nav-start'>
                1
            </section>
            <section className='discovery-nav-center'>
                <button>
                    <DiscoveryLogo />
                    <span>Discovery</span>
                </button>
                <button>
                    <RestaurantsLogo />
                    <span>Restaurants</span>
                </button>
            </section>
            <section className='discovery-nav-end'>
                3
            </section>
        </nav>
    );
};
