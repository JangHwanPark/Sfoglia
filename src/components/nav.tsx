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
                    <a href="#">Chef Intro</a>
                </li>
                <li className="navbar__list">
                    <a href="#">Menu</a>
                </li>
                <li className="navbar__list">
                    <a href="#">Reservation</a>
                </li>
            </ul>
            <a href="#" className="hamburger-icon">
                <FontAwesomeIcon icon={faBars} />
            </a>
        </nav>
    );
};