import React from 'react';
import './Header.scss';
import logo from '../../assets/images/pollution-poll-icon.ico';

const Header = () => {
    return (
        <header className='header'>
            <img className="header__logo" src={logo} alt="Pollution Poll logo"/>
            <nav className='header__nav-bar'>
                <ul className='header__list'>
                    <li className='header__items'>Home</li>
                    <li className='header__items'>Pollution Poll</li>
                    <li className='header__items'>Emission Reduction</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;