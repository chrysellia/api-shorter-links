import React from 'react';
import './Navbar.style.scss'

const Navbar = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Navbar
