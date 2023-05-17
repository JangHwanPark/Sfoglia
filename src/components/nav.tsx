import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__home">
                <a href="#">Sfoglia</a>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__list">
                    <a href="#">ABOUT</a>
                </li>
                <li className="navbar__list">
                    <a href="#">MENU</a>
                </li>
                <li className="navbar__list">
                    <a href="#">HOURS & LOCATION</a>
                </li>
            </ul>
            <ul className="navbar__menu-reservation">
                <li className="navbar__list">
                    <a href="#">KaKao</a>
                </li>
                <li className="navbar__list">
                    <span>/</span>
                </li>
                <li className="navbar__list">
                    <a href="#">Phone</a>
                </li>
            </ul>
            <a href="#" className="hamburger-icon">
                <FontAwesomeIcon icon={faBars} />
            </a>
        </nav>
    );
};