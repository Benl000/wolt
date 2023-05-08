import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import woltLogo from '../assets/svgs/header/woltLogo.svg';
import profileLogo from '../assets/svgs/header/profile.svg';
import arrowLogo from '../assets/svgs/header/arrowHeaderBtn.svg';
import searchLogo from '../assets/svgs/header/magnifying-glass.svg';

export const Header = () => {

    const navigate = useNavigate();
    let { pathname } = useLocation();
    const [detailPage, setDetailPage] = useState(false);

    const goTo = () => {
        navigate(`/`);
    };

    useEffect(() => {
        const params = pathname.split('/');
        setDetailPage((params[1] === 'restaurant' && params[2]) ? true : false);
    }, [pathname]);


    return (
        <header className={detailPage ? "header details" : "header"}>
            <section className='header-main'>
                <section className='header-main-logo' onClick={() => goTo()}>
                    <img className='logo' src={woltLogo} />
                </section>
                <section className='header-main-search'>
                    <img className='searchLogo' src={searchLogo} />
                    <input type="text" placeholder='Search in Wolt...' />
                </section>
                <nav className='header-main-nav'>
                    <div>
                        <button>Log in</button>
                        <button className='signup-btn'>
                            <span>
                                Sign up
                            </span>
                        </button>
                        <button className='lang-btn'>
                            <span>
                                English
                            </span>
                            <img className='arrowLogo' src={arrowLogo} />
                        </button>
                    </div>
                    <button className='profile-btn'>
                        <img className='profileLogo' src={profileLogo} />
                        <img className='arrowLogo' src={arrowLogo} />
                    </button>
                </nav>
            </section>
        </header>
    );
};
