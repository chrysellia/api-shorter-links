import React from 'react';
import './Navbar.style.scss'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const menuRef = React.useRef(null);
    const [show, toggleShow] = React.useState(false);

    const handleClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            toggleShow(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClick, true);

        return () => document.removeEventListener('click', handleClick, true);
    });

    return (
        <div className="navbar-component">
            <div className="navbar-wrapper">
                <div className="navbar-content">
                    <div className="navbar-logo">Shortly</div>
                    <div className="navbar-menu">
                        <div className="menu-item">Features</div>
                        <div className="menu-item">Pricing</div>
                        <div className="menu-item">Resources</div>
                    </div>
                    <div className="navbar-authentification">
                        <div className="navbar-login">Login</div>
                        <div className="navbar-signup">Sign Up</div>
                    </div>
                    
                    <div className="navbar-mobile">
                        <div className="navbar-hamburger" onClick={() => toggleShow(true)}>
                            <GiHamburgerMenu/>
                        </div>

                        <div ref={menuRef} className={`toggle-menu ${ show ? 'show' : 'hide'}`}>
                            <div className="hamburger-bloc">
                                    <div className="hamburger-item">Features</div>
                                    <div className="hamburger-item">Pricing</div>
                                    <div className="hamburger-item">Resources</div>
                                <div className="line-wrapper">
                                    <div className="divide-line"></div>
                                </div>
                                    <div className="hamburger-login">Login</div>
                                    <div className="hamburger-signup">Sign Up</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
