import React from 'react';
import marvelLogo from '../Images/marvel.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="Header">
            <img className="img-logo" src={marvelLogo} alt={"Marvel logo"}/>
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link> </li>
                <li><Link to="/comics">Comics</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;