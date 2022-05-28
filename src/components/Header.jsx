import { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <section className='header-main'>
                    <h1>Wolt</h1>
                    <input type="text" placeholder='Search in Wolt...' />
                    <nav>
                        <button>Log in</button>
                        <button className='signup-btn'>Sign up</button>
                        <button>English
                            {/* <svg arrow/> */}
                        </button>
                        <button>👤
                            {/* <svg profile+arrow/> */}
                        </button>
                    </nav>
                </section>
            </header>
        );
    }
}
