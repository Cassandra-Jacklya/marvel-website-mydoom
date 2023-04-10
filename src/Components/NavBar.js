import React, { useState } from 'react';
import marvelLogo from '../Images/marvel.svg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="Header">
            <img className="img-logo" src={marvelLogo} alt={"Marvel logo"}/>
            <button className="hamburger-menu" onClick={toggleMenu}>
                <FaBars />
            </button>
            <ul className={`navigation ${showMenu ? 'active' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="characters" onClick={toggleMenu}>Characters</Link></li>
                <li><Link to="comics" onClick={toggleMenu}>Comics</Link></li>
                <li><Link to="about-us" onClick={toggleMenu}>About Us</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
