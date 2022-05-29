import { Component } from 'react';
import woltLogo from '../assets/svgs/woltLogo.svg';
import profileLogo from '../assets/svgs/profile.svg';
import arrowLogo from '../assets/svgs/arrow_header_btn.svg';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <section className='header-main'>
                    <section className='header-main-logo'>
                        <img className='logo' src={woltLogo} />
                    </section>
                    <section className='header-main-search'>
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
    }
}
