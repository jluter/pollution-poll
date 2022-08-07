import React from 'react';
import './Header.scss';
import logo from '../../assets/images/pollution-poll-icon.ico';
import { Link } from 'react-router-dom';
import {BiPoll}  from 'react-icons/bi';


const Header = (props) => {
    return (
        <header className='header'>
            <img onClick={() => {props.handleLogoClick()}} className="header__logo" src={logo} alt="Pollution Poll logo"/>
            <nav className='header__nav-bar'>
                <div className='dropdown'>
                    <button className='dropdown__button'> 
                        <BiPoll className='dropdown__bipoll'/>
                    <div className='dropdown__list'>
                        <Link 
                        to="/"
                        className='dropdown__list--item'>Home</Link>
                        <Link 
                        to="/pollutionpoll"
                        className='dropdown__list--item'>Pollution Poll</Link>
                    </div>
                    </button>
                </div>
                {/* <ul className='header__list'>
                    <li className='header__items'>Home</li>
                    <Link to="/pollutionpoll" className='header__items'>Pollution Poll</Link>
                    <Link to="/" className='header__items'>Emission Reduction</Link>
                </ul> */}
            </nav>
        </header>
    );
};

export default Header;