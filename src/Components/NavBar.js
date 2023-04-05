import React from 'react';
import marvelLogo from '../Images/marvel.svg';

function NavBar() {
    return (
        <nav className="Header">
            <img className="img-logo" src={marvelLogo} alt={"Marvel logo"}/>
            <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li><a href="/characters">Characters</a></li>
            <li><a href="/comics">Comics</a></li>
            <li><a href="/about-us">About Us</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;