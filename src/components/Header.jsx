import woltLogo from '../assets/svgs/header/woltLogo.svg';
import profileLogo from '../assets/svgs/header/profile.svg';
import arrowLogo from '../assets/svgs/header/arrowHeaderBtn.svg';
import searchLogo from '../assets/svgs/header/magnifying-glass.svg';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    let { pathname } = useLocation();
    // const { name, type } = useParams();

    const goTo = () => {
        navigate(`/`);
    };

    useEffect(() => {
        // dispatch(name);
        console.log(pathname);
        // console.log(name);
        // console.log(type);

        // return () => {
        //     second;
        // };
    }, [pathname]);


    return (
        <header className='header'>
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
